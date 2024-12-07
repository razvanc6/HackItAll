import React from "react";

const UserProfile = () => {
  const user = {
    firstName: "John",
    lastName: "Doe",
    avatar: "https://via.placeholder.com/100", // Replace with actual user image URL
    profileLink: "https://example.com", // Replace with the desired profile link
    currency: "$", // Example currency
    balance: 1234, // Example integer value
  };

  return (
    <div
      className="position-fixed top-0 end-0 p-3 d-flex align-items-center bg-dark text-white rounded"
      style={{
        zIndex: 1000, // Ensure it stays above other content
        padding: "10px",
      }}
    >
      {/* User Details */}
      <div className="me-3 text-end">
        <div>
          <strong>{user.firstName} {user.lastName}</strong>
        </div>
        <div>
          {user.currency} {user.balance}
        </div>
      </div>

      {/* User Avatar */}
      <a href={user.profileLink} target="_blank" rel="noopener noreferrer">
        <img
          src={user.avatar}
          alt="User Avatar"
          className="rounded-circle border border-white"
          style={{
            width: "50px", // Adjust the avatar size
            height: "50px", // Make it a circle
            objectFit: "cover", // Properly fit the image
          }}
        />
      </a>
    </div>
  );
};

export default UserProfile;
