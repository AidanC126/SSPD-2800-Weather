import { useState } from "react";
import { WeatherContext } from "./WeatherContext";

const WeatherProvider = ({ children }) => {
  const [originCity, setOriginCity] = useState("London");
  const [currentCity, setCurrentCity] = useState("New York");

  const value = {
    originCity,
    setOriginCity,
    currentCity,
    setCurrentCity,
  };

  return (
    <WeatherContext.Provider value={value}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;