import React from 'react'
import insightHero from '../../assets/insight-full.jpg'

export function InsightInfo() {
    return (
        <div className="weather-info">
            <div className="main-panel">
                <div className="hero-panel">
                    <img className="insight-hero" src={insightHero}/>
                </div>
            </div>
            <div className="main-panel">
                <div className="insight-bio">
                    <h3>Insight:</h3>
                    <p className="bio">
                        Short for Interior Exploration using Seismic Investigations, Geodesy and Heat Transport, is a Mars lander 
                        designed to give the Red Planet its first thorough checkup since it formed 4.5 billion years ago. It is the first 
                        outer space robotic explorer to study in-depth the "inner space" of Mars: its crust, mantle, and core.
                    </p>
                </div>
                <div className="insight-bio">
                    <h3>Elysium Planitia:</h3>
                    <p className="bio">
                        Located in the Elysium and Aeolis quadrangles, a broad plain that straddles the equator of 
                        Mars. It lies to the south of the volcanic province of Elysium, the second largest 
                        volcanic region on the planet. Elysium contains the major volcanoes Elysium Mons, Albor Tholus and 
                        Hecates Tholus.
                    </p>
                </div>
            </div>
        </div>
    )
}