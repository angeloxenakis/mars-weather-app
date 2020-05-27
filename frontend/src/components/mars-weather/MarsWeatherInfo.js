import React from 'react'
import { MarsTemperature } from './MarsTemperature'
import { MarsWind } from './MarsWind'
import { MarsAirPressure } from './MarsAirPressure'
import { MarsSeason } from './MarsSeason'

export function MarsWeatherInfo(props) {
    // let currentSol = props.marsWeatherWeek.last

    let currentSol = props.marsWeatherWeek[props.marsWeatherWeek.length - 1];
    // console.log(currentSol)

    return(
        <div className="weather-info">
            <div className="main-panel">
                <MarsTemperature currentSol={currentSol}/>
            </div>
            <div className="main-panel">
                <div className="side-panel">
                    <MarsAirPressure currentSol={currentSol}/>
                    <MarsSeason/>
                </div>
                <MarsWind currentSol={currentSol}/>
            </div>
        </div>
    )
}