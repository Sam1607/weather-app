import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { fetchWeather } from "../services/WeatherServices";

export default function WeatherPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const city = location?.state?.city;

  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!city) {
      navigate("/");
      return;
    }

    const loadWeather = async () => {
      try {
        const data = await fetchWeather(city);
        setWeather(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadWeather();
  }, [city, navigate]);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>{weather.city}, {weather.country}</h2>
      <p>Temperature: {weather.temperature} °C</p>
      <p>Humidity: {weather.humidity} %</p>
      <p>Wind Speed: {weather.windSpeed} m/s</p>
      <p>Description: {weather.description}</p>

      <button onClick={() => navigate("/")}>Back</button>
    </div>
  );
}
