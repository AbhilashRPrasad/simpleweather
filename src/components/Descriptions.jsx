import React from 'react'
import "./descriptions.css"  
import {  FaArrowDown, FaWind } from "react-icons/fa"; 
import {TiWeatherCloudy} from 'react-icons/ti';
import { BiHappy } from "react-icons/bi";
import { MdCompress, MdOutlineWaterDrop } from "react-icons/md";

function Descriptions({weather}){
  const tempUnit = "°C";
  const windUnit = "m/s";
  const cards = [ 
    {
      id: 1, 
      icon: <TiWeatherCloudy/>,
      title: "Current Temp",
      data: weather?.temperature?.toFixed(),
      unit: tempUnit,
    },
    {
       id: 2, 
      icon: <BiHappy/>,
      title: "feels like",
      data: weather?.feelslike?.toFixed(),
      unit: tempUnit,
    },
    {
      id: 3, 
      icon: <MdCompress/>,
      title: "pressure",
      data: weather?.pressure,
      unit: "hPa",
    },
     {
      id: 4, 
      icon: <MdOutlineWaterDrop/>,
      title: "humidity",
      data: weather?.humidity,
      unit: "%",
    },
     {
      id: 5, 
      icon: <FaWind/>,
      title: "wind speed",
      data: weather?.wind_speed,
      unit: windUnit,
    },
     {
      id: 6, 
      icon: <FaWind/>,
      title: "wind direction",
      data: weather?. wind_dir,
      unit: "",
    },

  ]

  return (
    <div className='section section__descriptions'>
       {cards.map(({ id, icon, title, data, unit }) => (
        <div key={id} className="card">
          <div className="description__card-icon">
            {icon}
            <small>{title}</small>
          </div>
          <h2>{`${data} ${unit}`}</h2>
        </div>
      ))}
       
    </div>
  )
}

export default Descriptions
