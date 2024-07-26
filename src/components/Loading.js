import React from 'react';

const Loading = () => {
  return (
    <div className="sub-container loading-container active text-center p-6">
      <img src="./loading.gif" className="mx-auto mb-4" width="150" height="150" alt="Loading" />
      <p className="text-lg">Loading</p>
    </div>
  );
};

export default Loading;
