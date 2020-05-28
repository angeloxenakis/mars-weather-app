import React from 'react'
import { InsightInfo } from "./InsightInfo"
import { MarsCountdown } from '../mars-weather/MarsCountdown'
import insight from "../../assets/red-insight.svg"


export function Insight(props) {   
    return (
        <div>
            <div className="insight-div">
                <div className="weather-header">
                    <div className="weather-title"><img width="56px" height="56px" src={insight}/><h1>Mars Station: Insight</h1></div>
                    <p className="day-info"><strong>Location: </strong> Elysium Planitia | <strong>Mars SOL: </strong>527</p>
                </div>
                <InsightInfo />
            </div>
            <MarsCountdown/>
        </div>
    )
}