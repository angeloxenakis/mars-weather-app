import React from 'react'
import sun from "../../assets/red-sun.svg"

export function MarsSeason(props) {
    return (
        <div className="season-panel">
            <h4>Season</h4>
            <img width="48px" height="48px" src={sun}/>
            <p>Summer</p>
        </div>
    )
}