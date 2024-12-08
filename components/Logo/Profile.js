import React from 'react';

function Profile() {
  return (
    <div className="flex flex-row gap-3 items-center align-middle">
      <div className="bg-[#CAD2D566] rounded-full w-10 h-10"></div>
      <div className="flex items-center gap-1">
        FR
        {/* Dropdown Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-gray-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
}

export default Profile;
