import React from 'react'
import countryName from './functions/countryName';
export default function WeatherDisplay({weather,city}) {
    console.log(weather);
    if(weather == undefined){
        return
    }
    console.log(city);
    const nameDK = city?.local_names?.da || undefined
    const main = weather.main
    console.log(nameDK);
    
    
  return (
    weather &&<div>
        <h3>{countryName(city.country)}</h3>
        <h2>{nameDK || weather.name}</h2>
        <p>Temp {main.temp}. Feels like {main.feels_like}</p>
        <p>Humidity: {main.humidity}%</p>
    </div>
  )
}
