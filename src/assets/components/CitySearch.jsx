import React from 'react'

export default function CitySearch({setWeather,setCity}) {
  const API_url = import.meta.env.VITE_API_URL
  const API_key = import.meta.env.VITE_API_KEY
  async function handleSubmit(e) {
    e.preventDefault()

    const form = e.target
    const formData = new FormData(form)
    const city = formData.get("city")

    const url = new URL(API_url)
    url.searchParams.set("q",city)
    url.searchParams.set("appid",API_key)
    if (city != "") {
      const respons = await fetch(url)
      const data = await respons.json()

      if (data.length != 0){
        setCity(data[0])
        const url = new URL(import.meta.env.VITE_API_CORD_URL)
        url.searchParams.set("lat",data[0].lat)
        url.searchParams.set("lon",data[0].lon)
        url.searchParams.set("appid",API_key)
        url.searchParams.set("units","metric")
        const respons = await fetch(url)
        const info = await respons.json()
        setWeather(info)
      }
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="search" name="city" placeholder='Copenhagen' />
        <input type="submit" value="Search" />
      </form>
    </div>
  )
}
