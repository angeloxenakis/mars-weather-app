import React ,{useState} from 'react'

export function CurrentDayStatus(props) {
    
    if(props.status === "Clouds")
        return (
            <div className="season-panel">
                <h4>Status</h4>
                <img src="https://img.icons8.com/ios/50/000000/clouds.png"/>
                <strong><p>Cloudy</p></strong>
            </div>
        )

    else if(props.status === "Rain")
        return (
            <div className="season-panel">
                <h4>Status</h4>
                <img src="https://img.icons8.com/ios/50/000000/clouds.png"/>
                <strong><p>Rainy</p></strong>
            </div>
        )
    
    else if(props.status === "Drizzle")
        return (
            <div className="season-panel">
                <h4>Status</h4>
                <img src="https://img.icons8.com/ios/50/000000/clouds.png"/>
                <strong><p>Rainy</p></strong>
            </div>
        )
    
    else if(props.status === "Thunderstorm")
        return (
            <div className="season-panel">
                <h4>Status</h4>
                <img src="https://img.icons8.com/ios/50/000000/clouds.png"/>
                <strong><p>Rainy</p></strong>
            </div>
        )

    else if(props.status === "Snow")
        return (
            <div className="season-panel">
                <h4>Status</h4>
                <img src="https://img.icons8.com/ios/50/000000/clouds.png"/>
                <strong><p>Rainy</p></strong>
            </div>
        )

    else{
        return(
            <div className="season-panel">
                <strong><h1>Loading Weather Status</h1></strong>    
            </div>
        )
    }
}