import { useContext } from "react";
import { WeatherContext } from "./WeatherContext";

export function CityInputs() {
  const { originCity, setOriginCity, currentCity, setCurrentCity } = useContext(WeatherContext);

  return (
    <div>
      <h2>City Inputs</h2>

      <label>
        Origin City:
        <input
          type="text"
          value={originCity}
          onChange={(e) => setOriginCity(e.target.value)}
        />
      </label>

      <label>
        Current City:
        <input
          type="text"
          value={currentCity}
          onChange={(e) => setCurrentCity(e.target.value)}
        />
      </label>

      <div style={{ marginTop: "1rem" }}>
        <p><strong>Origin City:</strong> {originCity}</p>
        <p><strong>Current City:</strong> {currentCity}</p>
      </div>
    </div>
  );
};