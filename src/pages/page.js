import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SmartButton from '../components/SmartButton';
import './page.css';

import 'dotenv/config';

export default function Page() {
  const [status, setStatus] = useState('');
  const [smartButtons, setSmartButtons] = useState([]);

  const [weatherInfo, setWeatherInfo] = useState({
      city: "",
      temp: "",
      feels_like: "",
      humidity: ""
  });

  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    getSmartButtons()
  }, []);

  async function getSmartButtons(){
    try {
      let response = await axios.get('./db.json');
      if(!response || !response.data ){
        return;
      }
      let buttons = response.data.buttons;
      setSmartButtons(buttons)
    } catch (error) {
      console.error(error)
    }
  }

  async function getCurrentWeather(url){
    try {
      let result = await axios.get(url + process.env.REACT_APP_WEATHER_API_KEY);
      if(!result || !result.data || !result.data.main){
        return null;
      }
      let main = result.data.main;
      let data = {
        'city':result.data.name || '-',
        'temp':`${main.temp}°C`,
        'feels_like':`${main.feels_like}°C`,
        'humidity': `${main.humidity}%`
      }
      return data;
    } catch (error) {
      console.error(error)
    }
    return null;
  }

 async function smartButtonPressed(item){
    let counter = item.counter ? ++item.counter : 1;
    item.counter = counter;
    let arr = smartButtons;
    setSmartButtons(arr)
    setStatus(`${item.label} click counter : ${counter}`);
    let weather = await getCurrentWeather(item.action)
    if(weather){
      setWeatherInfo(weather);
      setShowResults(true);
    }else{
      console.error("Unable to retrieve weather data");
    }
  }

  const Results = () => (
    <div id="results" className="weather-results">
      <h2>{weatherInfo.city}</h2>
      <p>Temperature: {weatherInfo.temp}</p>
      <p>Feels Like: {weatherInfo.feels_like}</p>
      <p>Humidity: {weatherInfo.humidity}</p>
    </div>
  )

  return (
    <div className="container">
      <h2> Current Weather Data </h2>
      {smartButtons.map((item,index)=>
        <SmartButton key={index} onPress={()=>{smartButtonPressed(item)}} data={item}></SmartButton>
        )}
        <h3>{status}</h3>
        { showResults ? <Results /> : null }
    </div>
  )
}
