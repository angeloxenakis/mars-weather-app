import React ,{useState} from 'react'
import sun from "../../assets/green-sun.svg"

export function CurrentDayStatus(props) {
    
    if(props.status === "Clouds")
        return (
            <div className="earth-season-panel">
                <h4>Status</h4>
                <img src={sun}/>
                <strong><p>Cloudy</p></strong>
            </div>
        )

    else if(props.status === "Rain")
        return (
            <div className="earth-season-panel">
                <h4>Status</h4>
                <img src={sun}/>
                <strong><p>Rainy</p></strong>
            </div>
        )
    
    else if(props.status === "Drizzle")
        return (
            <div className="earth-season-panel">
                <h4>Status</h4>
                <img src={sun}/>
                <strong><p>Rainy</p></strong>
            </div>
        )
    
    else if(props.status === "Thunderstorm")
        return (
            <div className="earth-season-panel">
                <h4>Status</h4>
                <img src={sun}/>
                <strong><p>Rainy</p></strong>
            </div>
        )

    else if(props.status === "Snow")
        return (
            <div className="earth-season-panel">
                <h4>Status</h4>
                <img src={sun}/>
                <strong><p>Rainy</p></strong>
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