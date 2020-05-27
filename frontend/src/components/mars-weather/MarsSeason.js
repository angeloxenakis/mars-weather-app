import React from 'react'
import temp from "../../assets/red-temp.svg"

export function MarsSeason(props) {
    return (
        <div className="season-panel">
            <h4>Season</h4>
            <img width="48px" height="48px" src={temp}/>
            <p>Summer</p>
        </div>
    )
}