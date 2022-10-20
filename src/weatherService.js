// unit m = metric
const getFormattedWeatherData = async (city, units = "m") => {
  const URL = `http://api.weatherstack.com/current?access_key=cc03f148abf429e857aa03f3a87bbf5f&query=${city}&units=${units}`;

  const data = await fetch(URL)
    .then((res) => res.json())
    .then((data) => data); 

    const { current: {temperature, feelslike, pressure, humidity, weather_descriptions, wind_dir, wind_speed, weather_icons},
    location: {name, country, localtime},
} = data; 

return{
    weather_descriptions,
    weather_icons,
    temperature,
    feelslike,
    pressure,
    humidity,
    wind_dir, 
    wind_speed,
    country,
    name,
    localtime,  
};
    
} ;
export {getFormattedWeatherData};

