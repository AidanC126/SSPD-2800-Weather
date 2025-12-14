import { useContext } from "react";
import "./App.css";
import { Routes, Route, Link } from 'react-router-dom';
import { WeatherContext } from "./components/WeatherContext";
import WeatherProvider from "./components/WeatherProvider";
import { CityInputs } from "./components/CityInputs";
import WeatherCard from "./components/WeatherCard";
import AboutPage from './pages/AboutPage';

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
        <div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </nav>
        </div>
      </header>

      <main className="app-main">
        <div className="content-grid">
          <CityInputs />
        </div>

        <div className="content-grid">
          <section className="weather-grid">
            <WeatherCard title="Origin City" cityName={originCity} />
            <WeatherCard title="Current City" cityName={currentCity} />
          </section>
        </div>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <WeatherProvider>
        <Routes>
            <Route path="/" element={<AppContent />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
    </WeatherProvider>
  );
}
