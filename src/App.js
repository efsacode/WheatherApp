import cloudyBg from "./assets/cloudy.jpg";
import hotBg from "./assets/hot.jpg";
import rainyBg from "./assets/rainy.jpg";
import snowyBg from "./assets/snowy.jpg";
import clearBg from "./assets/clear.jpg";
import thunderBg from "./assets/thunder.jpg";
import mistyBg from "./assets/misty.jpg";
import Descriptions from "./components/Descriptions";
import { useEffect, useState } from "react";
import { getFormattedWeatherData } from "./wheatherService";
import "./index.css";



function App() {

  const [city, setCity] = useState("Ankara");
  const [weather, setWeather] = useState(null);
  const [units, setUnits] = useState("metric");
  const [bg, setBg] = useState(rainyBg);
  

  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await getFormattedWeatherData(city,units);
      setWeather(data);

      const threshold = units === "metric" ? 15 : 60;
      if(data.temp > threshold && data.description.includes("clear"))
        setBg(hotBg);
      else if(data.temp < threshold && data.description.includes("rain"))
        setBg(rainyBg);
      else if (data.temp <= threshold && data.description.includes("cloud"))
        setBg(cloudyBg);
      else if (data.temp <= threshold && data.description.includes("clear"))
        setBg(clearBg);
      else if (data.temp <= threshold && data.description.includes("snow"))
        setBg(snowyBg);
      else if (data.temp <= threshold && data.description.includes("thunder"))
        setBg(thunderBg);
      else if (data.temp > threshold && data.description.includes("thunder"))
        setBg(thunderBg);
        else if (data.temp > threshold && data.description.includes("snow"))
        setBg(snowyBg);
        else if (data.temp > threshold && data.description.includes("rain"))  
        setBg(rainyBg);
        else if (data.temp > threshold && data.description.includes("cloud"))
        setBg(cloudyBg);
        else if (data.temp > threshold && data.description.includes("clear"))
        setBg(clearBg);
        else if (data.temp <= threshold && data.description.includes("broken clouds"))
        setBg(cloudyBg);
        else if (data.temp <=threshold && data.description.includes("overcast clouds"))
        setBg(cloudyBg);
        else if (data.temp <=threshold && data.description.includes("scattered clouds"))
        setBg(cloudyBg);
        else if (data.temp <=threshold && data.description.includes("few clouds"))
        setBg(cloudyBg);
        else if (data.temp > threshold && data.description.includes("broken clouds"))
        setBg(cloudyBg);
        else if (data.temp > threshold && data.description.includes("overcast clouds"))
        setBg(cloudyBg);
        else if (data.temp > threshold && data.description.includes("scattered clouds"))
        setBg(cloudyBg);
        else if (data.temp > threshold && data.description.includes("few clouds"))
        setBg(cloudyBg);
        else if (data.temp <= threshold && data.description.includes("light rain"))
        setBg(rainyBg);
        else if (data.temp <= threshold && data.description.includes("moderate rain"))
        setBg(rainyBg);
        else if (data.temp <= threshold && data.description.includes("heavy intensity rain"))
        setBg(rainyBg);
        else if (data.temp <= threshold && data.description.includes("very heavy rain"))
        setBg(rainyBg);
        else if (data.temp <= threshold && data.description.includes("extreme rain"))
        setBg(rainyBg);
        else if (data.temp <= threshold && data.description.includes("freezing rain"))
        setBg(rainyBg);
        else if (data.temp <= threshold && data.description.includes("light intensity shower rain"))
        setBg(rainyBg);
        else if (data.temp <= threshold && data.description.includes("shower rain"))
        setBg(rainyBg);
        else if (data.temp <= threshold && data.description.includes("heavy intensity shower rain"))
        setBg(rainyBg);
        else if (data.temp <= threshold && data.description.includes("ragged shower rain"))
        setBg(rainyBg);
        else if (data.temp > threshold && data.description.includes("light rain"))
        setBg(rainyBg);
        else if (data.temp > threshold && data.description.includes("moderate rain"))
        setBg(rainyBg);
        else if (data.temp > threshold && data.description.includes("heavy intensity rain"))
        setBg(rainyBg);
        else if (data.temp > threshold && data.description.includes("very heavy rain"))
        setBg(rainyBg);
        else if (data.temp > threshold && data.description.includes("extreme rain"))
        setBg(rainyBg);
        else if (data.temp > threshold && data.description.includes("freezing rain"))
        setBg(rainyBg);
        else if (data.temp > threshold && data.description.includes("light intensity shower rain"))
        setBg(rainyBg);
        else if (data.temp > threshold && data.description.includes("shower rain"))
        setBg(rainyBg);
        else if (data.temp > threshold && data.description.includes("heavy intensity shower rain"))
        setBg(rainyBg);
        else if (data.temp > threshold && data.description.includes("ragged shower rain"))
        setBg(rainyBg);
        else if (data.temp <= threshold && data.description.includes("light intensity drizzle"))
        setBg(rainyBg);
        else if (data.temp <= threshold && data.description.includes("drizzle"))
        setBg(rainyBg);
        else if (data.temp <= threshold && data.description.includes("heavy intensity drizzle"))
        setBg(rainyBg);
        else if (data.temp <= threshold && data.description.includes("light intensity drizzle rain"))
        setBg(rainyBg);
        else if (data.temp <= threshold && data.description.includes("drizzle rain"))
        setBg(rainyBg);
        else if (data.temp <= threshold && data.description.includes("heavy intensity drizzle rain"))
        setBg(rainyBg);
        else if (data.temp <= threshold && data.description.includes("shower rain and drizzle"))
        setBg(rainyBg);
        else if (data.temp <= threshold && data.description.includes("heavy shower rain and drizzle"))
        setBg(rainyBg);
        else if (data.temp <= threshold && data.description.includes("shower drizzle"))
        setBg(rainyBg);
        else if (data.temp > threshold && data.description.includes("light intensity drizzle"))
        setBg(rainyBg);
        else if (data.temp > threshold && data.description.includes("drizzle"))
        setBg(rainyBg);
        else if (data.temp > threshold && data.description.includes("heavy intensity drizzle"))
        setBg(rainyBg);
        else if (data.temp > threshold && data.description.includes("light intensity drizzle rain"))
        setBg(rainyBg);
        else if (data.temp > threshold && data.description.includes("drizzle rain"))
        setBg(rainyBg);
        else if (data.temp > threshold && data.description.includes("heavy intensity drizzle rain"))
        setBg(rainyBg);
        else if (data.temp > threshold && data.description.includes("shower rain and drizzle"))
        setBg(rainyBg);
        else if (data.temp > threshold && data.description.includes("heavy shower rain and drizzle"))
        setBg(rainyBg);
        else if (data.temp > threshold && data.description.includes("shower drizzle"))
        setBg(rainyBg);
        else if (data.temp <= threshold && data.description.includes("light snow"))
        setBg(snowyBg);
        else if (data.temp <= threshold && data.description.includes("Snow"))
        setBg(snowyBg);
        else if (data.temp <= threshold && data.description.includes("Heavy snow"))
        setBg(snowyBg);
        else if (data.temp <= threshold && data.description.includes("Sleet"))
        setBg(snowyBg);
        else if (data.temp <= threshold && data.description.includes("Light shower sleet"))
        setBg(snowyBg);
        else if (data.temp <= threshold && data.description.includes("Shower sleet"))
        setBg(snowyBg);
        else if (data.temp <= threshold && data.description.includes("Light rain and snow"))
        setBg(snowyBg);
        else if (data.temp <= threshold && data.description.includes("Rain and snow"))
        setBg(snowyBg);
        else if (data.temp <= threshold && data.description.includes("Light shower snow"))
        setBg(snowyBg);
        else if (data.temp <= threshold && data.description.includes("Shower snow"))
        setBg(snowyBg);
        else if (data.temp <= threshold && data.description.includes("Heavy shower snow"))
        setBg(snowyBg);
        else if (data.temp > threshold && data.description.includes("light snow"))
        setBg(snowyBg);
        else if (data.temp > threshold && data.description.includes("Snow"))
        setBg(snowyBg);
        else if (data.temp > threshold && data.description.includes("Heavy snow"))
        setBg(snowyBg);
        else if (data.temp > threshold && data.description.includes("Sleet"))
        setBg(snowyBg);
        else if (data.temp > threshold && data.description.includes("Light shower sleet"))
        setBg(snowyBg);
        else if (data.temp > threshold && data.description.includes("Shower sleet"))
        setBg(snowyBg);
        else if (data.temp > threshold && data.description.includes("Light rain and snow"))
        setBg(snowyBg);
        else if (data.temp > threshold && data.description.includes("Rain and snow"))
        setBg(snowyBg);
        else if (data.temp > threshold && data.description.includes("Light shower snow"))
        setBg(snowyBg);
        else if (data.temp > threshold && data.description.includes("Shower snow"))
        setBg(snowyBg);
        else if (data.temp > threshold && data.description.includes("Heavy shower snow"))
        setBg(snowyBg);
        else if(data.temp>threshold && data.description.includes("clear sky"))
        setBg(clearBg);
        else if(data.temp<=threshold && data.description.includes("mist"))
        setBg(mistyBg);
        else if(data.temp<=threshold && data.description.includes("smoke"))
        setBg(mistyBg);
        else if(data.temp<=threshold && data.description.includes("haze"))
        setBg(mistyBg);
        else if(data.temp<=threshold && data.description.includes("sand/ dust whirls"))
        setBg(mistyBg);
        else if(data.temp<=threshold && data.description.includes("fog"))
        setBg(mistyBg);
        else if(data.temp>threshold && data.description.includes("fog")) 
        setBg(mistyBg);
        else if(data.temp>threshold && data.description.includes("mist"))
        setBg(mistyBg);
        else if(data.temp>threshold && data.description.includes("smoke"))
        setBg(mistyBg);
        else if(data.temp>threshold && data.description.includes("haze"))
        setBg(mistyBg);
        else if(data.temp>threshold && data.description.includes("sand/ dust whirls"))
        setBg(mistyBg);
    
      };

    fetchWeatherData();
  }, [units, city]);

  const enterKeyPressed = (e) => {
    if(e.keyCode === 13){
      setCity(e.currentTarget.value);
      };
    };


  

  return (
    <div className="app" style={{ backgroundImage: `url(${bg}) ` }}>
      <div className="overlay">
        {
          weather && (
            <div className="container">
              <div className="section section__inputs">
                <input onKeyDown={enterKeyPressed} type="text" name="city" placeholder="Enter City..." />
                  
              </div>

              <div className="section section__temperature">
                <div className="icon">
                  <h3>{`${weather.name}, ${weather.country}`}</h3>
                    <img src={weather.iconURL} alt="weatherIcon" />
                    <h3>{weather.description}</h3>
              </div>
              <div className="temperature">
                <h1>{`${weather.temp.toFixed()} °${units === 'metric' ? "C" : "F" } `}</h1>

              </div>
            </div>

          {/*bottom description*/}
              <Descriptions weather ={weather} units = {units} />
          
         </div>
          )

        }
        </div>
       </div>
  );
}

export default App;