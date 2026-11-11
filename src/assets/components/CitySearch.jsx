import React from 'react'
import fetchCity from './functions/fetchCity'

export default function CitySearch({ setWeather, setCity }) {
  const API_url = import.meta.env.VITE_API_URL
  const API_key = import.meta.env.VITE_API_KEY
  async function handleSubmit(e) {
    e.preventDefault()

    const form = e.target
    const formData = new FormData(form)
    const city = formData.get("city")

    const url = new URL(API_url)

    if (city != "") {
      fetchCity(url, setCity, setWeather, city)
    }
  }
  // ask for location
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error)
  }
  // if location permissions are given
  async function success(position) {
    const url = new URL(import.meta.env.VITE_API_CORD_URL)
    url.searchParams.set("lat", position.coords.latitude)
    url.searchParams.set("lon", position.coords.longitude)
    url.searchParams.set("appid", API_key)
    url.searchParams.set("units", "metric")
    const respons = await fetch(url)
    const info = await respons.json()
    const newUrl = new URL(API_url)
    fetchCity(newUrl, setCity, setWeather, info.name)

  }
  // use copenhagen as initial displayed city if location permissions not given
  function error() {
    const url = new URL(API_url)
    fetchCity(url, setCity, setWeather, "copenhagen")
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="search" name="city" placeholder='København' />
        <input type="submit" value="Søg" />
      </form>
    </div>
  )
}
