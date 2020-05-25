import React, { useEffect, useState } from 'react'

let useComponentDidMount = (callback) => {
    useEffect(callback, [])
}

export function UserWeatherPanel(props) {
    let [ userWeatherData, setUserWeatherData ] = useState(null)

    useComponentDidMount( () => {
        fetch('https://api.openweathermap.org/data/2.5/forecast?zip=77001,us&appid=b2155d7bcc9acd90bde0e1c32ab5d85e')
            .then( resp => resp.json() )
            .then( userWeatherData => console.log(userWeatherData) ) 
    })

    if (userWeatherData === null) {
        return (
            <h3>Loading User Weather Data</h3>
        )
    }
        
    return (
       <h1>Slowly But Surely I'm Working</h1>
    )
}