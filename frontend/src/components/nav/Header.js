import React from 'react'
import { Link } from 'react-router-dom'

export function Header(props) {
    return (
        <div className="nav-container">
            <div className="nav">
                <div className="nav-btns">
                    <a className="btn" href="/mars-weather">Mars</a>
                    <a className="btn" href="earth-weather">Earth</a>
                    <a className="btn" href="compare-weather">Compare Weather</a>
                    <a className="btn" href="/insight">Mars Insight</a>
                    <a className="btn" href="#">My Locations</a>
                </div>
                <div className="nav-profile">
                    <a href="/login">Login</a>
                    <br></br>
                    <a href="/signup">Sign Up</a>
                </div>
            </div>
        </div>
    )
}