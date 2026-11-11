import React, { useState } from 'react'
import CitySearch from './CitySearch'
import WeatherDisplay from './WeatherDisplay'

export default function Weather() {
    const [weather, setWeather] = useState()
    const [city, setCity] = useState()
  return (
    <div className='wrapper'>
      <CitySearch setWeather={setWeather} setCity={setCity}></CitySearch>
      <WeatherDisplay weather={weather} city={city}></WeatherDisplay>
    </div>
  )
}
