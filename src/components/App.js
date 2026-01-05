import React, { useState, useEffect } from "react";

function App() {
  // Static weather data
  const [weather, setWeather] = useState({
    temperature: 25,
    conditions: "Sunny"
  });

  // useEffect included as required
  useEffect(() => {
    // No API calls needed
  }, []);

  // Conditional inline style
  const temperatureStyle = {
    color: weather.temperature > 20 ? "red" : "blue"
  };

  return (
    <div>
      <p>
        Temperature: <span style={temperatureStyle}>{weather.temperature}</span>
      </p>
      <p>
        Conditions: {weather.conditions}
      </p>
    </div>
  );
}

export default App;
