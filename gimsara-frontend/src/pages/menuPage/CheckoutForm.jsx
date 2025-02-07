import React, { useEffect, useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { FaMoneyBillWave } from "react-icons/fa";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Checkout = ({ price, cart }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [isCOD, setIsCOD] = useState(false); // State for COD
  const [phone, setPhone] = useState(""); // State for phone number
  const [address, setAddress] = useState(""); // State for address

  useEffect(() => {
    if (typeof price !== "number" || price < 1) {
      console.log("Price is not a number or less than 1");
      return;
    }
    axiosSecure.post("/create-payment-intent", { price }).then((res) => {
      console.log(res.data.clientSecret);
      setClientSecret(res.data.clientSecret);
    });
  }, [price, axiosSecure]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setCardError(error.message);
    } else {
      setCardError("Success! Your payment is being processed!");
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "anonymous",
            email: user?.email || "unknown",
          },
        },
      });
    if (confirmError) {
      console.log(confirmError);
      setCardError(confirmError.message);
    }
    console.log(paymentIntent);
    if (paymentIntent?.status === "succeeded") {
      console.log(paymentIntent.id);
      setCardError(`Your transactionId is ${paymentIntent.id}`);
      const paymentInfo = {
        email: user.email,
        transactionId: paymentIntent.id,
        price,
        quantity: cart.length,
        status: "order pending",
        itemName: cart.map((item) => item.name),
        cartItems: cart.map((item) => item._id),
        menuItems: cart.map((item) => item.menuItemId),
      };

      axiosSecure.post("/payments", paymentInfo).then((res) => {
        console.log(res.data);
        alert("Payment Successful!");
        navigate("/order");
      });
    }
  };

  const handleCOD = async () => {
    if (!phone || !address) {
      alert("Please provide your phone number and address for COD.");
      return;
    }

    const paymentInfo = {
      email: user.email,
      transactionId: `COD-${Date.now()}`, // Generate a unique ID for COD
      price,
      quantity: cart.length,
      status: "order pending",
      itemName: cart.map((item) => item.name),
      cartItems: cart.map((item) => item._id),
      menuItems: cart.map((item) => item.menuItemId),
      phone, // Include phone number
      address, // Include address
    };

    try {
      const res = await axiosSecure.post("/payments", paymentInfo);
      console.log(res.data);
      alert("Order placed successfully! Pay on delivery.");
      navigate("/order");
    } catch (error) {
      console.error("Failed to place COD order:", error);
      alert("Failed to place COD order. Please try again.");
    }
  };

  return (
    <div className="flex flex-col sm:flex-row justify-start items-start gap-8">
      {/* Left side */}
      <div className="md:w-1/2 w-full space-y-3">
        <h4 className="text-lg font-semibold">Order Summary</h4>
        <p>Total Price: Rs.{price}</p>
        <p>Number of Items: {cart.length}</p>
      </div>

      {/* Right side */}
      <div className="md:w-1/3 w-full space-y-5 card shrink-0 max-w-sm shadow-2xl bg-base-100 px-4 py-7">
        <h4 className="text-lg font-semibold">Process Your Payment!</h4>
        <h5 className="font-medium">Credit/Debit Card</h5>
        {/* Stripe Form */}
        <form onSubmit={handleSubmit}>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
          <button
            type="submit"
            disabled={!stripe}
            className="btn btn-primary btn-sm mt-5 w-full text-white"
          >
            Pay
          </button>
        </form>
        {cardError ? (
          <p className="text-red italic text-xs">{cardError}</p>
        ) : (
          ""
        )}

        {/* Cash on Delivery Button */}
        <div className="mt-5 text-center">
          <button
            type="button"
            onClick={() => setIsCOD(!isCOD)}
            className="btn bg-green btn-sm mt-5 text-white"
          >
            <FaMoneyBillWave /> Cash on Delivery
          </button>
        </div>

        {/* COD Form */}
        {isCOD && (
          <div className="mt-5 space-y-4">
            <div>
              <label className="block text-sm font-medium text-green-700">
                Phone Number
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter your phone number"
                className="w-full border border-green-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-green-700">
                Delivery Address
              </label>
              <textarea
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter your delivery address"
                className="w-full border border-green-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                rows={3}
                required
              />
            </div>
            <button
              type="button"
              onClick={handleCOD}
              className="btn bg-green-500 btn-sm w-full text-white"
            >
              Place Order (COD)
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;