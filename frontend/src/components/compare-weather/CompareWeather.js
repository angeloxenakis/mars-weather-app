import React from 'react'
import { CompareMars } from './CompareMars'
import { CompareEarth } from './CompareEarth'
import { MarsCountdown } from '../mars-weather/MarsCountdown'
import insight from "../../assets/blue-insight.svg"

export function CompareWeather() {

    let currentDate = new Date().toDateString();

    return (
        <div>
            <div className="compare-container">
                <div className="compare-title"><img width="56px" height="56px" src={insight}/><h1>Compare Weather</h1></div>
                <p className="day-info"><strong>Earth Date: </strong> {currentDate} | <strong>Mars SOL: </strong>527</p>
                <div className="compare-panels">
                    <div>
                        <CompareMars/>
                    </div>
                    <div>
                        <CompareEarth/>
                    </div>
                </div>
            </div>
            <MarsCountdown/>
        </div>

    )
}