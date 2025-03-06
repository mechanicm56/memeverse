import React from "react";

const UserCard = ({ name, avatar, rating }) => {
  // Function to render the stars based on the rating
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating); // Full stars (integer part)
    const emptyStars = 5 - fullStars; // Empty stars

    // Generate an array of full and empty stars
    return (
      <>
        {[...Array(fullStars)].map((_, index) => (
          <span key={`full-${index}`} className="text-yellow-500">&#9733;</span>
        ))}
        {[...Array(emptyStars)].map((_, index) => (
          <span key={`empty-${index}`} className="text-gray-300">&#9734;</span>
        ))}
      </>
    );
  };

  return (
    <div className="flex items-center space-x-4 px-4 py-2 bg-gray-100 dark:bg-black rounded-lg shadow-md">
      {/* Avatar */}
      <img className="w-12 h-12 rounded-full" src={avatar} alt="User Avatar" />

      {/* User Info */}
      <div>
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-600">{name}</h3>
        
        {/* Rating */}
        <div className="flex items-center">
          {renderStars(rating)}
          <span className="ml-2 text-gray-600">{rating} / 5</span>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
