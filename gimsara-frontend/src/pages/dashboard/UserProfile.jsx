import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import { useForm } from 'react-hook-form';
import { FaUser, FaUpload } from 'react-icons/fa';

const UserProfile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);
  const [currentPhotoURL, setCurrentPhotoURL] = useState(user?.photoURL || '');
  const [currentName, setCurrentName] = useState(user?.displayName || '');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: user?.displayName || '',
      photoURL: user?.photoURL || '',
    },
  });

  // Update form fields when user data changes
  useEffect(() => {
    if (user) {
      setCurrentPhotoURL(user.photoURL || '');
      setCurrentName(user.displayName || '');
      reset({
        name: user.displayName || '',
        photoURL: user.photoURL || '',
      });
    }
  }, [user, reset]);

  const onSubmit = (data) => {
    const name = data.name;
    const photoURL = data.photoURL;

    updateUserProfile(name, photoURL)
      .then(() => {
        alert('Profile updated successfully');
        setCurrentPhotoURL(photoURL); // Update the displayed photo
        setCurrentName(name); // Update the displayed name
      })
      .catch((error) => {
        console.error('Error updating profile:', error);
      });
  };

  return (
    <div className="min-h-screen flex items-center mt-20 justify-center">
      <div className="w-full max-w-md mx-4 bg-white rounded-lg shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105">
        <div className="px-6 py-8">
          <div className="text-center">
            {/* Profile Picture */}
            <div className="relative w-24 h-24 mx-auto mb-6">
              <div className="absolute inset-0 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
                {currentPhotoURL ? (
                  <img
                    src={currentPhotoURL}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <FaUser className="text-4xl text-gray-600" />
                )}
              </div>
              <input
                type="file"
                {...register('photoURL')}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <div className="absolute bottom-0 right-0 bg-green-500 rounded-full p-2 cursor-pointer hover:bg-green-600 transition-colors">
                <FaUpload className="text-white text-sm" />
              </div>
            </div>

            {/* Current Name */}
            <h2 className="text-3xl font-bold text-gray-800 mb-2">{currentName || 'User'}</h2>
            <p className="text-gray-600">Keep your profile updated for a better experience.</p>
          </div>

          {/* Update Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
              <input
                type="text"
                {...register('name')}
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                required
              />
            </div>

            {/* <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Upload Photo</label>
              <input
                type="file"
                {...register('photoURL')}
                className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              />
            </div> */}

            <button
              type="submit"
              className="w-full bg-gradient-to-r bg-green text-white py-3 rounded-lg font-semibold hover:from-light-green hover:to-pink-600 transition-all transform hover:scale-105"
            >
              Update Profile
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;