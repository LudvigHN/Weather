import React from 'react'
import countryName from './functions/countryName';
export default function WeatherDisplay({ weather, city }) {
    if (weather == undefined) {
        return
    }
    const nameDK = city?.local_names?.da || undefined
    const main = weather.main
    const getCloudDescription = (clouds) => {
        switch (true) {
            case clouds <= 10:
                return 'Klar himmel';
            case clouds <= 25:
                return 'Få skyer';
            case clouds <= 50:
                return 'Delvist skyet';
            case clouds <= 75:
                return 'Skyet';
            case clouds <= 90:
                return 'Meget skyet';
            default:
                return 'Overskyet';
        }
    };
    
    



    return (
        weather && <div className='weather_wrapper'>
            <div>
            <h3>{countryName(city.country)}</h3>
            <h2>{nameDK || city.name}</h2>
            </div>
            <div className='weather_stats'>
            <p className='temp'>{main.temp.toFixed()}°</p> 
            <p> Føles som {main.feels_like.toFixed()}°</p>
            <p>Fugt: {main.humidity}%</p>
            <p>Vind: {weather.wind.speed} m/s <span className='windarrow' style={{ transform: `rotate(${weather.wind.deg}deg)` }}>⬆</span></p>
            <p>{getCloudDescription(weather.clouds.all)}</p>
            </div>
        </div>
    )
}
