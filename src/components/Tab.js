import React from 'react';

const Tab = ({ label, isActive, onClick }) => {
  return (
    <p
      className={`cursor-pointer p-3 ${isActive ? 'text-blue-500 font-bold border-b-2 border-blue-500' : 'text-gray-500'}`}
      onClick={onClick}
    >
      {label}
    </p>
  );
};

export default Tab;
