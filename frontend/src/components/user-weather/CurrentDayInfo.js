import React from 'react'
import {CurrentDayTemperature} from './CurrentDayTemperature.js'
import {CurrentDayStatus} from './CurrentDayStatus.js'

export function CurrentDayInfo(props) {
   

    let currentDay = props.currentDay
    let currentDate = new Date(props.currentDay.dt_txt)

    let status = currentDay.weather[0].main

    console.log(currentDay)
    console.log(currentDate)
    console.log(status)
    

    let kelvinTemp = props.currentDay.main.temp
    let farenTemp = null

    let weatherInfo = props.currentDay.weather.main
    let weatherDescription = props.currentDay.weather.description

    let convertKtoF = (k) => {
        farenTemp = Math.round(((k - 273.15)*(9/5)+32))
    }

    convertKtoF(kelvinTemp)

    return(
        <div className="weather-info">
            <div className="main-info">
                
                <CurrentDayTemperature temperature = {farenTemp}/>
            </div>
            <div className="side-info">
                <CurrentDayStatus status = {status}/>
            </div>
        </div>
    )
}