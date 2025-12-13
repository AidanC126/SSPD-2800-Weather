import {useEffect, useState} from 'react';


export default function WeatherCard({ cityName, title }) {
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let isMounted = true;
    
        const fetchWeather = async () => {

            if (!cityName || cityName.trim() === "") {
                setWeather(null);
                setLoading(false);
                setError(null);
                return;
            }

            try {
                setLoading(true);
                setError(null);

                const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`);

                if (!response.ok) {
                    throw new Error('City not found');
                }

                const data = await response.json();

                if (isMounted) {
                    setWeather(data);
                    setLoading(false);
                }
            } catch (err) {
                if (isMounted) {
                    setError(err.message || 'Failed to fetch weather data');
                    setWeather(null);
                    setLoading(false);
                }
            }
        };
        
        fetchWeather();
        return () => { isMounted = false;
        };
    }, [cityName]);

    return (
        <section
            className={`weather-card ${
                loading ? "loading" : error ? "error" : ""
            }`}
            aria-busy={loading}
        >

        <header>
            <h2>{title || "Weather Information"}</h2>
        </header>

        {loading && <p>Loading weather data...</p>}

        {error && <p className="error-message">Error: {error}</p>}

        {weather && !loading && !error && (
            <article>
                <h3 className="city-name">
                    {weather.name}, {weather.sys.country}
                </h3>

                <div className="temperature">
                    <span className="temp-value">{
                    Math.round(weather.main.temp)}°C</span>
                </div>

                <p className="description">
                    {weather.weather[0].description}
                </p>

                <section className="weather-details">
                    <div className="detail-item">
                        <span className="label">Humidity:</span>
                        <span className="value">{weather.main.humidity}%</span>
                    </div>
                    <div className="detail-item">
                        <span className="label">Wind:</span>
                        <span className="value">{weather.wind.speed} m/s</span>
                    </div>
                </section>
            </article>
        )}
        </section>
    )
}