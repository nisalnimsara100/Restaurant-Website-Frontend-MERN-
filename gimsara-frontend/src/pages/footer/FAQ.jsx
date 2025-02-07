import React from "react";

const FAQ = () => {
  return (
    <div className="pt-12 mb-0 pb-0">
      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-green mb-6">Common Questions</h2>
        <div className="space-y-6">
          {/* FAQ Item 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-green mb-2">
              What are your opening hours?
            </h3>
            <p className="text-lg leading-relaxed">
              We are open from 07:00 PM to 10:00 PM every day, including
              weekends and public holidays.
            </p>
          </div>

          {/* FAQ Item 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-green mb-2">
              Do you offer vegetarian options?
            </h3>
            <p className="text-lg leading-relaxed">
              Yes, we have a wide range of vegetarian dishes that are prepared
              with fresh, locally sourced ingredients.
            </p>
          </div>

          {/* FAQ Item 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-green mb-2">
              Can I make a reservation?
            </h3>
            <p className="text-lg leading-relaxed">
              Absolutely! You can make a reservation online through our website
              or by calling us directly.
            </p>
          </div>

          {/* FAQ Item 4 */}
          {/* <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-green mb-2">
                Do you offer catering services?
              </h3>
              <p className="text-lg leading-relaxed">
                Yes, we provide catering services for events and special occasions. Please contact us for more details.
              </p>
            </div> */}

          {/* FAQ Item 4 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-green mb-2">
              Is parking available?
            </h3>
            <p className="text-lg leading-relaxed">
              Yes, we have ample parking space available for our customers.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-green py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Still Have Questions?
          </h2>
          <p className="text-lg text-orange-100 mb-8">
            Feel free to reach out to us. We are here to help!
          </p>
          <button className="bg-white text-green px-8 py-3 rounded-full font-semibold hover:bg-orange-50 transition duration-300">
            <a href="https://wa.me/+94741348118" target="blank">Contact Us</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
