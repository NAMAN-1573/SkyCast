import React, { useState } from 'react';

const SearchForm = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city) {
      onSearch(city);
    }
  };

  return (
    <form className="form-container active text-center p-6" onSubmit={handleSubmit}>
      <input
        className="p-2 border border-gray-300 rounded mb-4"
        placeholder="Search for City..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button className="btn bg-blue-500 text-white px-4 py-2 rounded" type="submit">
        <img src="./search.png" width="20" height="20" alt="Search" />
      </button>
    </form>
  );
};

export default SearchForm;
