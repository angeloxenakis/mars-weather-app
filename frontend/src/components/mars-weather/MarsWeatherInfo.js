import React from 'react'
import { MarsTemperature } from './MarsTemperature'
import { MarsWindSpeed} from './MarsWindSpeed'
import { MarsAirPressure } from './MarsAirPressure'

export function MarsWeatherInfo(props) {
    // let currentSol = props.marsWeatherWeek.last

    let currentSol = props.marsWeatherWeek[props.marsWeatherWeek.length - 1];
    // console.log(currentSol)

    return(
        <div className="weather-info">
            <div className="main-info">
                <MarsTemperature currentSol={currentSol}/>
            </div>
            <div className="side-info">
                <MarsAirPressure currentSol={currentSol}/>
                <MarsWindSpeed currentSol={currentSol}/>
            </div>
        </div>
    )
}