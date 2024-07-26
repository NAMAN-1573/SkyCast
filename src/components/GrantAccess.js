import React from 'react';

const GrantAccess = ({ onGrantAccess }) => {
  return (
    <div className="sub-container grant-location-container active text-center p-6">
      <img src="./location.png" className="mx-auto mb-4" width="80" height="80" alt="Location" />
      <p className="text-lg mb-2">Grant Location Access</p>
      <p className="mb-4">Allow Access to get weather Information</p>
      <button className="btn bg-blue-500 text-white px-4 py-2 rounded" onClick={onGrantAccess}>Grant Access</button>
    </div>
  );
};

export default GrantAccess;
