const API_KEY = '93e639f4dffec297e1447bbe5edf1f07'

const makeIconURL = (iconId) =>
  `https://openweathermap.org/img/w/${iconId}.png`;

const getFormattedWeatherData = async (city, units = 'metric') => {
    const URL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;
    
    const data = await fetch(URL)
        .then((res) => res.json())
        .then((data) => data);

    const { 
        weather,
        main: {temp, feels_like, temp_min, temp_max, pressure, humidity },
        wind: { speed },
        sys: { country }, 
        name,
       } = data;
    
    const { description, icon } = weather[0];

    return {
        description, 
        iconURL: makeIconURL(icon), 
        temp, 
        feels_like, 
        temp_min, 
        temp_max, 
        pressure, 
        humidity, 
        speed, 
        country, 
        name
       };
    };

    export { getFormattedWeatherData };