import React from 'react'

export function Header() {
    return (
        <div className="nav">
            <div className="nav-btns">
                <button>Mars</button>
                <button>Earth</button>
                <button>Mars Insight</button>
                <button>My Locations</button>
            </div>
            <div className="nav-profile">
                <a href="#">My Profile</a>
                <br></br>
                <a href="#">Log Out</a>
            </div>
        </div>
    )
}