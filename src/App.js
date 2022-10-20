import hotBg from "./assets/hot.jpg";
import coldBg from "./assets/cold.jpg";
import Descriptions from "./components/Descriptions";
import { useEffect, useState } from "react";
import { getFormattedWeatherData } from "./weatherService";


function App() {

  const [city, setCity] = useState("Mysuru")
const [weather, setWeather] = useState(null) 
const [bg, setBg] = useState(hotBg) 

  useEffect(()=>{ 
    const fetchWeatherData = async ()=>{
const data = await getFormattedWeatherData(city);
setWeather(data); 
//dynamic background
const threshold = 20;
if (data.temperature <= threshold) {
setBg(coldBg)
} else {
  setBg(hotBg)
}

    }
    fetchWeatherData();
  },[city]);

  const enterKeyPressed = (e)=>{
    if (e.keyCode ===13){
      setCity(e.currentTarget.value) 
      e.currentTarget.blur();
    }
  }

  return (
    <div className="app" style={{ backgroundImage: `url(${bg})` }}>
      <div className="overlay">
        {
          weather && (
 <div className="container">
          <div className="section section__inputs">
            <input onKeyDown={enterKeyPressed} type="text" name="City" placeholder="Enter City..." />
          </div>

          <div className="section section__temperature">
            
            <div className="icon">
              <h3>{`${weather.name}, ${weather.country}`}</h3> <br />
              <img src={weather. weather_icons}alt="weatherIcon" /> <br />
              <h3>{weather. weather_descriptions}</h3>
               </div>
               
               <div className="temperature">
                <h2>{`${weather?.localtime}`}</h2>
               </div>
              
              <div className="temperature">
                <h1>{`${weather.temperature.toFixed()} °C`}</h1>
              </div>

           
          </div>
          {/* bottom decription */} 
          <Descriptions weather={weather}/>
        </div>
          )
        }
       
      </div>
    </div>
  );
}

export default App;
