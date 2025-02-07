import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/50">
      <div className="animate-spin rounded-full h-8 w-8 border-4 border-gray-200 border-t-green"></div>
    </div>
  );
};

export default LoadingSpinner;