import React, { useState } from "react";
import { UtensilsCrossed, Sparkles } from "lucide-react";
import emailjs from "emailjs-com";

const TableBooking = () => {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: 2,
    name: "",
    email: "",
    phone: "",
    specialRequests: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // EmailJS template parameters
    const templateParams = {
      to_email: formData.email,
      name: formData.name,
      date: formData.date,
      time: formData.time,
      guests: formData.guests,
      specialRequests: formData.specialRequests,
    };

    try {
      // Send email using EmailJS
      await emailjs.send(
        "service_mq5ivxp", // Replace with your EmailJS Service ID
        "template_quqgp8r", // Replace with your EmailJS Template ID
        templateParams,
        "oDe8-9CJcFmdKjSa8" // Replace with your EmailJS User ID
      );

      setSuccess(true);
      // Reset form
      setFormData({
        date: "",
        time: "",
        guests: 2,
        name: "",
        email: "",
        phone: "",
        specialRequests: "",
      });
    } catch (error) {
      console.error("Failed to send email:", error);
      alert("Failed to send email. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Generate time slots from 6:00 PM to 12:00 AM
  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 18; hour <= 24; hour++) {
      const time = hour === 24 ? "12:00 AM" : `${hour % 12 || 12}:00 ${hour < 12 ? "AM" : "PM"}`;
      slots.push(time);
    }
    return slots;
  };

  return (
    <div className="min-h-screen mt-10 bg-green-50 flex items-center justify-center py-10">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-green-800 flex items-center justify-center gap-2">
            <UtensilsCrossed className="w-8 h-8" /> Table Reservation
          </h1>
          <p className="text-green-600 mt-2">
            Book your perfect dining experience
          </p>
        </div>

        {/* Booking Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Date */}
          <div>
            <label className="block text-sm font-medium text-green-700">
              Date
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full border border-green-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          {/* Time */}
          <div>
            <label className="block text-sm font-medium text-green-700">
              Time
            </label>
            <select
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="w-full border border-green-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            >
              <option value="">Select time</option>
              {generateTimeSlots().map((time, index) => (
                <option key={index} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>

          {/* Guests */}
          <div>
            <label className="block text-sm font-medium text-green-700">
              Guests
            </label>
            <select
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              className="w-full border border-green-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            >
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <option key={num} value={num}>
                  {num} Guests
                </option>
              ))}
            </select>
          </div>

          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-green-700">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full border border-green-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-green-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full border border-green-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-green-700">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="w-full border border-green-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          {/* Special Requests */}
          <div>
            <label className="block text-sm font-medium text-green-700">
              Special Requests
            </label>
            <textarea
              name="specialRequests"
              value={formData.specialRequests}
              onChange={handleChange}
              placeholder="Any special requests?"
              className="w-full border border-green-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              rows={3}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white h-10 font-semibold py-2 bg-green rounded-lg hover:bg-green-700">
              Book
            </button>


          {/* Success Message */}
          {success && (
            <p className="text-green text-center mt-4">
              Booking confirmed!
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default TableBooking;