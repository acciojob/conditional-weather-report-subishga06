import React, { useState, useEffect } from "react";
import WeatherDisplay from "./WeatherDisplay";

function App() {
  // Hardcoded weather data using useState
  const [weather, setWeather] = useState({
    temperature: 25,
    conditions: "Sunny"
  });

  // useEffect included as per requirement (even though data is static)
  useEffect(() => {
    // No API call required
  }, []);

  return (
    <div>
      <WeatherDisplay weather={weather} />
    </div>
  );
}

export default App;
