import React, { useEffect, useState } from 'react'
import { CurrentDayInfo } from './CurrentDayInfo'
import { FiveDayForcast } from './FiveDayForcast'
import {useHistory} from 'react-router'




// TO DO: ADD MORE STATUSES, MORE FUNCTIONALITY, MORE ELEMENTS, ... JUST MORE PIZZAZ
// OTHER THAN THAT: WE'RE JUST PARSING AND MAKING SURE WHEN USER SIGNS UP WE CAN SEE THEIR STUFF


// CLEAN SOME STUFF UP
// GET USER INFO RIGHT NOW
// ADD MORE STUFF

let useComponentDidMount = (callback) => {
    useEffect(callback, [])
}

let currentDate = new Date().toDateString();

export function UserWeatherPanel(props) {

    let history = useHistory()
    let [ day1Weather, setDay1Weather ] = useState(null)
    let [ day2Weather, setDay2Weather ] = useState(null)
    let [ day3Weather, setDay3Weather ] = useState(null)
    let [ day4Weather, setDay4Weather ] = useState(null)
    let [ day5Weather, setDay5Weather ] = useState(null)


    let [ userWeatherData, setUserWeatherData ] = useState(null)
    let [ currentWeather, setCurrentWeather ] = useState(null)

    useComponentDidMount( () => {
        fetch(`https://api.openweathermap.org/data/2.5/forecast?zip=${props.zipcode},us&appid=b2155d7bcc9acd90bde0e1c32ab5d85e`)
            .then( resp => resp.json() )
            .then( userWeatherData => {(
                setUserWeatherData(userWeatherData)
                )} 
            ) 
    })


    if(props.zipcode){  
        //I need to get 2,10,18,26,34

        console.log(props)

        // props.isLoggedIn(props.authentication)




        if (userWeatherData === null) {
            return (   
                <h3>Loading User Weather Data</h3>
            )
        }

        if (day1Weather === null){

            if(userWeatherData.list === undefined)
                return<h1>Please enter a valid US city and zipcode</h1>
            else
                setDay1Weather(userWeatherData.list[2])
                setDay2Weather(userWeatherData.list[10])
                setDay3Weather(userWeatherData.list[18])
                setDay4Weather(userWeatherData.list[26])
                setDay5Weather(userWeatherData.list[35])
                return (
                    <h3>Loading Day Weather Data</h3>
                )
        }
        
        if (currentWeather === null){
            console.log("I got the currentWeather")
        }

            console.log(day1Weather,day2Weather,day3Weather,day4Weather,day5Weather)
            
            console.log(userWeatherData)
        if (props.canView){
            return (
                <div className="weather-div">
                <div className="weather-header">
                    <h1>{userWeatherData.city.name} Weather</h1>
                    <p className="day-info"><strong>Earth Date: </strong> {currentDate} </p>
                </div>
                    <CurrentDayInfo 
                        zipcode = {props.zipcode}
                        country = {props.country}
                    />
                    <div className="bottom-info">
                    <FiveDayForcast
                        day1 = {day1Weather}
                        day2 = {day2Weather}
                        day3 = {day3Weather}
                        day4 = {day4Weather}
                        day5 = {day5Weather}
                    />
                    
                </div>
                </div>
        
                )
        }
    }
    else{
        return(<h1>Please Login To View This Page</h1>)
    }
}
