import { useContext } from "react";
import { WeatherContext } from "./WeatherContext";

export function CityInputs() {
  const { originCity, setOriginCity, currentCity, setCurrentCity } =
    useContext(WeatherContext);

  return (
    <div className="city-inputs">
      <div className="input-group">
        <label className="origin-city">Origin City: </label>
        <input
          id="origin-city"
          type="text"
          className="city-input"
          value={originCity}
          onChange={(e) => setOriginCity(e.target.value)}
        />
      </div>

      <div className="input-group">
      <label className="current-city">
        Current City:</label>
        <input
          id="current-city"
          className="city-input"
          type="text"
          value={currentCity}
          onChange={(e) => setCurrentCity(e.target.value)}
        />
      </div>
    </div>
  );
}
