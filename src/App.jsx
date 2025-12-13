import { useContext } from "react";
import "./App.css";

import { WeatherContext } from "./components/WeatherContext";
import WeatherProvider from "./components/WeatherProvider";
import { CityInputs } from "./components/CityInputs";
import WeatherCard from "./components/WeatherCard";


function AppContent() {
  const { originCity, currentCity } = useContext(WeatherContext);

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Weather Comparison</h1>
        <p>
          Compare the current weather between your origin city and your current
          location.
        </p>
      </header>

      <main className="app-main">
        <section className="city-inputs">
          <CityInputs />
        </section>

        <section className="weather-grid">
          <WeatherCard title="Origin City" cityName={originCity} />
          <WeatherCard title="Current City" cityName={currentCity} />
        </section>
      </main>
    </div>
  );
}


export default function App() {
  return (
    <WeatherProvider>
      <AppContent />
    </WeatherProvider>
  );
}
