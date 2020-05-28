import React from 'react'
import speed from "../../assets/red-wind-speed.svg"
import direction from "../../assets/red-direction.svg"

export function MarsWind(props) {
    return (
        <div className="side-panel">
            <div className="wind-panel">
                <div>
                    <h4>Wind</h4>
                </div>
                <div className="wind-contents">
                    <div className="wind-speed">
                        <div>
                            <img width="48px" height="48px" src={speed}/>
                            <p><strong>Speed: </strong>{(Math.round(props.currentSol.wind_speed * 2.3))} mph</p>
                        </div>
                    </div>
                    <div className="wind-direction">
                        <div>
                            <img width="48px" height="48px" src={direction}/>
                            <p><strong>Direction: </strong>{props.currentSol.wind_direction}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}