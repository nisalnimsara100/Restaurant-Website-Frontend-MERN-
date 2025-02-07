import React from 'react';

const Offers = () => {
  return (
    <div>
      <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 bg-gradient-to-r from-[#FAFAFA] to-[#FCFCFC]">
        <div className="py-48 flex flex-col items-center justify-center relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0">
            <div className="animate-pulse absolute top-20 left-20 w-24 h-24 bg-green-100 rounded-full opacity-40"></div>
            <div className="animate-bounce absolute bottom-20 right-20 w-16 h-16 bg-green-200 rounded-full opacity-30"></div>
            <div className="animate-ping absolute top-40 right-40 w-12 h-12 bg-green-300 rounded-full opacity-20"></div>
          </div>

          {/* Content */}
          <div className="text-center px-4 space-y-7 relative animate-fadeIn">
            <div className="animate-slideDown">
              <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug">
                Exciting{' '}
                <span className="text-green inline-block animate-bounce">
                  Offers
                </span>{' '}
                Coming Soon!
              </h2>
            </div>
            
            <p className="text-[#4A4A4A] text-xl md:w-4/5 mx-auto animate-slideUp">
              We are working hard to bring you amazing deals and discounts. Stay tuned
              for updates on our special offers!
            </p>

            {/* Added animated button */}
            <button className="mt-8 px-8 py-3 bg-green-500 text-white rounded-full 
                             transform transition-all duration-300 hover:scale-105 hover:bg-green-600
                             animate-pulse hover:animate-none">
              Notify Me
            </button>

            {/* Decorative elements */}
            <div className="absolute -left-4 top-1/2 w-24 h-24 border-4 border-green-200 rounded-full 
                          animate-spin-slow opacity-30"></div>
            <div className="absolute -right-4 bottom-0 w-16 h-16 border-4 border-green-300 rounded-full 
                          animate-spin-slow opacity-30"></div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideDown {
          from { transform: translateY(-50px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(50px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-slideDown {
          animation: slideDown 1s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 1s ease-out;
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Offers;