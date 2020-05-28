import React, { useEffect, useState } from 'react'

let useComponentDidMount = (callback) => {
    useEffect(callback, [])
}

export function CompareEarth(props) {

    //GET USERS CURRENT CITY
    let [currentDay, setCurrentDay] = useState(null)

    useComponentDidMount( () => {
        fetch('https://api.openweathermap.org/data/2.5/weather?q=Houston&appid=b2155d7bcc9acd90bde0e1c32ab5d85e')
            .then( resp => resp.json() )
            .then( currentDay => {(
                setCurrentDay(currentDay)
                )} ) 
    })
   

    console.log(currentDay)

    let convertKtoF = (k) => {
        return Math.round(((k - 273.15)*(9/5)+32))
    }

    if(currentDay === null){
        return(
            <h1>Loading Current Weather Info</h1>
        )
    }
    return (
        <div className="compare-earth-container">
            <h3>Earth Weather</h3>
            <br></br><br></br>
            <div className="compare-earth-info">
                <h4>Location:</h4>
                <p>{currentDay.name}</p>
                <hr></hr><br></br>
                <h4>Temperature:</h4>
                <p>{convertKtoF(currentDay.main.temp)}°F</p>
                <hr></hr><br></br>
                <h4>Wind:</h4>
                <p>Speed: {currentDay.wind.speed} mph</p>
                <p>Direction: {currentDay.wind.deg}</p>
                <hr></hr><br></br>
                <h4>Air Pressure:</h4>
                <p>{currentDay.main.pressure} Pa</p>
                <hr></hr><br></br>
                <h4>Season:</h4>
                <p>summer</p>
                <hr></hr><br></br>
            </div>
        </div>
    )
}