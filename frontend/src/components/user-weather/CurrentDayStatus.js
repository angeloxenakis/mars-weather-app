import React ,{useState} from 'react'
import sun from "../../assets/green-sun.svg"

export function CurrentDayStatus(props) {
    
    if(props.status === "Clouds")
        return (
            <div className="earth-season-panel">
                <h4>Status</h4>
                <img width="48px" height="48px" src={sun}/>
                <p>Cloudy</p>
            </div>
        )

    else if(props.status === "Rain")
        return (
            <div className="earth-season-panel">
                <h4>Status</h4>
                <img width="48px" height="48px" src={sun}/>
                <p>Rainy</p>
            </div>
        )
    
    else if(props.status === "Drizzle")
        return (
            <div className="earth-season-panel">
                <h4>Status</h4>
                <img width="48px" height="48px" src={sun}/>
                <strong><p>Rainy</p></strong>
            </div>
        )
    
    else if(props.status === "Thunderstorm")
        return (
            <div className="earth-season-panel">
                <h4>Status</h4>
                <img width="48px" height="48px" src={sun}/>
                <p>Rainy</p>
            </div>
        )

    else if(props.status === "Snow")
        return (
            <div className="earth-season-panel">
                <h4>Status</h4>
                <img width="48px" height="48px" src={sun}/>
                <p>Rainy</p>
            </div>
        )
    else if(props.status === "Clear")
        return (
            <div className="earth-season-panel">
                <h4>Status</h4>
                <img width="48px" height="48px" src={sun}/>
                <p>Clear</p>
            </div>
        )

    else{
        return(
            <div className="searth-eason-panel">
                <strong><h1>Loading Weather Status</h1></strong>    
            </div>
        )
    }
}