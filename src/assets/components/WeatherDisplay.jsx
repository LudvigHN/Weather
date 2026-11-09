import React from 'react'
import countryName from './functions/countryName';
export default function WeatherDisplay({weather,city}) {
    if(weather == undefined){
        return
    }
    const nameDK = city?.local_names?.da || undefined
    const main = weather.main
    
    
    
  return (
    weather &&<div>
        <h3>{countryName(city.country)}</h3>
        <h2>{nameDK || city.name}</h2>
        <p>Temp {main.temp}. Feels like {main.feels_like}</p>
        <p>Humidity: {main.humidity}%</p>
        <p>Vind: {weather.wind.speed} m/s <span className='windarrow' style={{ transform: `rotate(${weather.wind.deg}deg)` }}>⬆</span></p>
    </div>
  )
}
