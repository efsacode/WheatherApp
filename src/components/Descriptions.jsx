import React from "react";
import './descriptions.css';

import { FaArrowDown, FaArrowUp, FaWind } from "react-icons/fa";
import { BiHappy } from "react-icons/bi";
import { MdCompress, MdOutlineWaterDrop  } from "react-icons/md";

const Descriptions = ({weather, units}) => {

    const tempUnits = units === "metric" ? "°C" : "°F";
    const windUnits = units === "metric" ? "m/s" : "m/h";

    const cards = [
        {
            id: 1,
            icon: <FaArrowDown />,
            title: "min",
            data:  weather.temp_min.toFixed(),
            units: tempUnits, 
        },
        {
            id: 2,
            icon: <FaArrowUp />,
            title: "max",
            data:  weather.temp_max.toFixed(),
            units: tempUnits, 
        },
        {
            id: 3,
            icon: <BiHappy />,
            title: "feels like",
            data:  weather.feels_like.toFixed(),
            units: tempUnits, 
        },

        {
            id: 4,
            icon: <MdOutlineWaterDrop />,
            title: "humidity",
            data:  weather.humidity,
            units: "%",
        },

        {
            id: 5,
            icon: <FaWind />,
            title: "wind speed",
            data:  weather.speed.toFixed(),
            units: windUnits,
        },

    ];


  return (
  <div className="section section__description">
    {cards.map(({id, icon, title, data, units}) => (
        <div key = {id} className="card">
            <div className="description__card-icon"> 
                 {icon} 
            <small>{title}</small> 
        </div>
        <h2>{`${data} ${units}`}</h2>
  </div>



    ))}
    
    
  
   </div>

 );
}

export default Descriptions;