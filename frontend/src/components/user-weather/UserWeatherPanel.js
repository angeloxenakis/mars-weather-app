import React, { useEffect, useState } from 'react'
import { CurrentDayInfo } from './CurrentDayInfo'

let useComponentDidMount = (callback) => {
    useEffect(callback, [])
}

let currentDate = new Date().toDateString();

export function UserWeatherPanel(props) {

    let [ userWeatherData, setUserWeatherData ] = useState(null)

    //I need to get 2,10,18,26,34

    let [ day1Weather, setDay1Weather ] = useState(null)
    let [ day2Weather, setDay2Weather ] = useState(null)
    let [ day3Weather, setDay3Weather ] = useState(null)
    let [ day4Weather, setDay4Weather ] = useState(null)
    let [ day5Weather, setDay5Weather ] = useState(null)



    useComponentDidMount( () => {
        fetch('https://api.openweathermap.org/data/2.5/forecast?zip=77001,us&appid=b2155d7bcc9acd90bde0e1c32ab5d85e')
            .then( resp => resp.json() )
            .then( userWeatherData => {(
                setUserWeatherData(userWeatherData)
                )} ) 
    })

    if (userWeatherData === null) {
        return (   
            <h3>Loading User Weather Data</h3>
        )
    }
    if (day1Weather === null){
        setDay1Weather(userWeatherData.list[3])
        setDay2Weather(userWeatherData.list[11])
        setDay3Weather(userWeatherData.list[19])
        setDay4Weather(userWeatherData.list[27])
        setDay5Weather(userWeatherData.list[35])
        return (
            <h3>Loading Day Weather Data</h3>
        )
    }


        console.log(day1Weather,day2Weather,day3Weather,day4Weather,day5Weather)
        return (
        <div className="weather-div">
        <div className="weather-header">
            <h1>Local Weather</h1>
            <p className="day-info"><strong>Earth Date: </strong> {currentDate} </p>
        </div>
            <CurrentDayInfo currentDay = {day1Weather}/>
            <div className="bottom-info">
            <h1>hehe</h1>
            
        </div>
        </div>

    )
}
