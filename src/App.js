import React, { useState, useEffect } from 'react';
import './App.css';
import Tab from './components/Tab';
import WeatherInfo from './components/WeatherInfo';
import GrantAccess from './components/GrantAccess';
import Loading from './components/Loading';
import SearchForm from './components/SearchForm';

const API_KEY = "f590d8b96b085691dc52d98b4879e331";

const App = () => {
  const [activeTab, setActiveTab] = useState('userWeather');
  const [userCoordinates, setUserCoordinates] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const savedCoordinates = sessionStorage.getItem('user-coordinates');
    if (savedCoordinates) {
      setUserCoordinates(JSON.parse(savedCoordinates));
      fetchWeatherData(JSON.parse(savedCoordinates));
    }
  }, []);

  const fetchWeatherData = async (coordinates) => {
    const { lat, lon } = coordinates;
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleGrantAccess = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const coordinates = {
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        };
        sessionStorage.setItem('user-coordinates', JSON.stringify(coordinates));
        setUserCoordinates(coordinates);
        fetchWeatherData(coordinates);
      });
    }
  };

  const handleSearchWeather = async (city) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="wrapper text-center p-6">
      <h1 className="text-4xl font-bold mb-6">Weather App</h1>
      <div className="tab-container flex justify-center gap-6 mb-6">
        <Tab label="Your Weather" isActive={activeTab === 'userWeather'} onClick={() => setActiveTab('userWeather')} />
        <Tab label="Search Weather" isActive={activeTab === 'searchWeather'} onClick={() => setActiveTab('searchWeather')} />
      </div>
      <div className="weather-container">
        {loading ? (
          <Loading />
        ) : (
          <>
            {activeTab === 'userWeather' && !userCoordinates && <GrantAccess onGrantAccess={handleGrantAccess} />}
            {activeTab === 'searchWeather' && <SearchForm onSearch={handleSearchWeather} />}
            {weatherData && <WeatherInfo data={weatherData} />}
          </>
        )}
      </div>
    </div>
  );
};

export default App;
