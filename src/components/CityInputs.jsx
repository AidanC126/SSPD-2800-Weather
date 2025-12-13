import { useContext } from "react";
import { WeatherContext } from "./WeatherContext";

export function CityInputs() {
  const { originCity, setOriginCity, currentCity, setCurrentCity } = useContext(WeatherContext);

  return (
  <div class="city-inputs">
    <div class="input-group">
      <label>
        Origin City:
        <input
          class="city-input"
          type="text"
          value={originCity}
          onChange={(e) => setOriginCity(e.target.value)}
        />
      </label>
    </div>

    <div class="input-group">
      <label>
        Current City:
        <input
          class="city-input"
          type="text"
          value={currentCity}
          onChange={(e) => setCurrentCity(e.target.value)}
        />
      </label>
    </div>
  </div>
  );
};