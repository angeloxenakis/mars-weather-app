import React, { useEffect, useState } from 'react'
import {CurrentDayTemperature} from './CurrentDayTemperature.js'
import {CurrentDayStatus} from './CurrentDayStatus.js'
import {EarthAirPressure} from './EarthAirPressure.js'
import {CurrentDayWind} from './CurrentDayWind.js'

let useComponentDidMount = (callback) => {
    useEffect(callback, [])
}

export function CurrentDayInfo(props) {

    //GET USERS CURRENT CITY


    let [currentDay, setCurrentDay] = useState(null)

    useComponentDidMount( () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${props.zipcode},us&appid=b2155d7bcc9acd90bde0e1c32ab5d85e`)
            .then( resp => resp.json() )
            .then( currentDay => {(
                setCurrentDay(currentDay)
                )} ) 
    })
   



    console.log(currentDay)

    
    let farenTemp = null


    let convertKtoF = (k) => {
        return Math.round(((k - 273.15)*(9/5)+32))
    }

    let convertMBtoBar = (mb) =>{
        return mb/1000
    }

    let convertWindSpeed = (speed) => {
        return speed
    }



    if(currentDay === null){
        return(
            <h1>Loading Current Weather Info</h1>
        )
    }
    else{
        let status = currentDay.weather[0].main
        return(
        <div className="weather-info">
            <div className="main-panel">
                <CurrentDayTemperature temperature = {convertKtoF(currentDay.main.temp)} status = {status}/>
            </div>
            <div className="main-panel">
                <div className="side-panel">
                    <EarthAirPressure pressure = {convertMBtoBar(currentDay.main.pressure)}/>
                    <CurrentDayStatus status = {status}/>
                </div>
                    <CurrentDayWind windSpeed = {convertWindSpeed(currentDay.wind.speed)} direction = {currentDay.wind.deg}/>
            </div>
        </div>
    )}
}