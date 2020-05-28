import React from 'react'
import speed from "../../assets/green-wind-speed.svg"
import direction from "../../assets/green-wind-direction.svg"

export function CurrentDayWind(props) {
    return (
        <div className="side-panel">
            <div className="green-wind-panel">
                <div>
                    <h4>Wind</h4>
                </div>
                <div className="wind-contents">
                    <div className="wind-speed">
                        <div>
                            <img width="48px" height="48px" src={speed}/>
                            <p><strong>Speed: </strong>{props.windSpeed} mph</p>
                        </div>
                    </div>
                    <div className="wind-direction">
                        <div>
                            <img width="48px" height="48px" src={direction}/>
                            <p><strong>Direction: </strong>{props.direction}°</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}