import React from 'react';

const WeatherInfo = ({ data }) => {
  const { name, sys, weather, main, wind, clouds } = data;

  return (
    <div className="sub-container user-info-container active text-center p-6">
      <div className="name flex items-center justify-center mb-4">
        <p className="text-lg mr-2">{name}</p>
        <img src={`https://flagcdn.com/144x108/${sys.country.toLowerCase()}.png`} alt="Country Flag" />
      </div>
      <p className="text-lg mb-2">{weather[0].description}</p>
      <img src={`http://openweathermap.org/img/w/${weather[0].icon}.png`} alt="Weather Icon" className="mx-auto mb-2" />
      <p className="text-lg mb-4">{main.temp} °C</p>
      <div className="parameter-container grid grid-cols-3 gap-4">
        <div className="parameter text-center">
          <img src="./wind.png" alt="Wind" className="mx-auto mb-2" />
          <p className="text-sm">windspeed</p>
          <p className="text-sm">{wind.speed} m/s</p>
        </div>
        <div className="parameter text-center">
          <img src="./humidity.png" alt="Humidity" className="mx-auto mb-2" />
          <p className="text-sm">humidity</p>
          <p className="text-sm">{main.humidity}%</p>
        </div>
        <div className="parameter text-center">
          <img src="./cloud.png" alt="Clouds" className="mx-auto mb-2" />
          <p className="text-sm">Clouds</p>
          <p className="text-sm">{clouds.all}%</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;
