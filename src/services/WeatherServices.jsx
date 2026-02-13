const WEATHER_API_KEY = "d7b950541d7264a3b3df80a8b6f2cbf7";

export const normalizeWeatherResponse = (apiResponse) => {
  return {
    city: apiResponse?.name || "",
    country: apiResponse?.sys?.country || "",
    temperature: apiResponse?.main?.temp || null,
    humidity: apiResponse?.main?.humidity || null,
    windSpeed: apiResponse?.wind?.speed || null,
    description: apiResponse?.weather?.[0]?.description || ""
  };
};

export const fetchWeather = async (city) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}&units=metric`
  );
  
  if (!response.ok) {
    throw new Error("City not found");
  }

  const data = await response.json();
  return normalizeWeatherResponse(data);
};
