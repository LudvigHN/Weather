import React from 'react'

export default async function fetchCity(url, setCity, setWeather,city) {
    const API_key = import.meta.env.VITE_API_KEY
    
    url.searchParams.set("q", city)
    url.searchParams.set("appid", API_key)
    
    const respons = await fetch(url)
    const data = await respons.json()
    console.log(data);
    
    if (data.length != 0) {
        console.log(data[0]);

        setCity(data[0])
        const url = new URL(import.meta.env.VITE_API_CORD_URL)
        url.searchParams.set("lat", data[0].lat)
        url.searchParams.set("lon", data[0].lon)
        url.searchParams.set("appid", API_key)
        url.searchParams.set("units", "metric")
        const respons = await fetch(url)
        const info = await respons.json()
        setWeather(info)
    }

}
