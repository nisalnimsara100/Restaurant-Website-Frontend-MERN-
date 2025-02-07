import React, { useState } from "react";
import bannerImg from "/images/home/2.png";

const Banner = () => {
  
  const [isHovered, setIsHovered] = useState(false);
  return (
      <div className="max-w-screen-2xl container mx-auto xl:px-24 bg-gradient-to-r from-[#FAFAFA] to-[#FCFCFC] overflow-hidden">
        <div className="py-24 flex flex-col md:flex-row-reverse items-center justify-between gap-8">
          {/* Image section with animations */}
          <div className="md:w-1/2 relative group">
            {/* Floating animation for main image */}
            <div className="animate-float">
              <img 
                src={bannerImg} 
                alt="Banner Food" 
                className="relative z-10 transition-transform duration-300 hover:scale-105"
              />
            </div>
  
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-100 rounded-full opacity-60 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-green-50 rounded-full opacity-40 animate-pulse delay-300"></div>
            
            {/* Spinning circle decoration */}
            <div className="absolute top-1/2 -right-8 w-16 h-16 border-4 border-green-200 rounded-full animate-spin-slow opacity-30"></div>
          </div>
  
          {/* Text section with animations */}
          <div className="md:w-1/2 px-4 space-y-7">
            <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug animate-slideRight">
              Dive into Delights Of Delectable{" "}
              <span className="text-green inline-block">Food</span>
            </h2>
            
            <p className="text-[#4A4A4A] text-xl animate-fadeIn delay-300">
              Where Each Plate Weaves a Story of Culinary Mastery and Passionate
              Craftsmanship
            </p>
  
            {/* Animated button */}
            <button 
              className="bg-green font-semibold text-white px-8 py-3 rounded-full
                       transform transition-all duration-300 hover:scale-105
                       hover:shadow-lg hover:bg-green-600 relative overflow-hidden
                       group animate-slideUp"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Button hover effect */}
              <span className="relative z-10">
                <a href="/menu" className="flex items-center gap-2">
                  Order Now 
                  <span className="transform transition-transform group-hover:translate-x-1">→</span>
                </a>
              </span>
              <div className="absolute inset-0 bg-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </button>
          </div>
        </div>
  
        {/* Custom animations */}
        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
  
          @keyframes slideRight {
            from { transform: translateX(-50px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }
  
          @keyframes slideUp {
            from { transform: translateY(20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
  
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
  
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
  
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
  
          .animate-slideRight {
            animation: slideRight 1s ease-out;
          }
  
          .animate-slideUp {
            animation: slideUp 0.8s ease-out;
          }
  
          .animate-fadeIn {
            animation: fadeIn 1s ease-out;
          }
  
          .animate-spin-slow {
            animation: spin-slow 8s linear infinite;
          }
  
          .delay-300 {
            animation-delay: 300ms;
          }
        `}</style>
      </div>
    );
};

export default Banner;
