import React from 'react'

export function MarsWindSpeed(props) {
    return (
        <div className="side-panel">
            <div className="wind-panel">
                <div>
                    <h4>Wind</h4>
                </div>
                <div className="wind-contents">
                    <div className="wind-speed">
                        <div>
                            <img src="https://img.icons8.com/ios/48/000000/wind.png"/>
                            <p><strong>Speed: </strong>{(Math.round(props.currentSol.wind_speed * 2.3))} mph</p>
                        </div>
                    </div>
                    <div className="wind-direction">
                        <div>
                            <img src="https://img.icons8.com/ios/48/000000/barometer-gauge.png"/>
                            <p><strong>Direction: </strong>{props.currentSol.wind_direction}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}