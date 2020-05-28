import React from 'react'
import { useHistory } from 'react-router'
// Should honestly have a log out button, but I'll manage to do that later into the day
// Bout to have that focus 

// THE ANCHOR TAGS REFRESH THE PAGE, HAD TO CHANGE TO BUTTONS AND TEST SOME STUFF OUT

export const HeaderLoggedIn = (props) => {
    let history = useHistory()

    console.log(history)
    return (
        <div className="nav-container">
            <div className="nav">
                <div className="nav-btns">
                    <a className="btn" onClick = {() => history.push('/mars-weather')}>Mars</a>
                    <a className="btn" onClick = {() => history.push('/earth-weather')}>Earth</a>
                    <a className="btn" onClick = {() => history.push('/insight')}>Mars Insight</a>
                    <a className="btn" onClick = {() => history.push('/compare-weather')}>Compare Weather</a>
                    <a className="btn" onClick = {() => history.push('/edit-location')}>Edit Profile</a>
                </div>
                <div className="nav-profile">
                    {props.username} Has Landed On Mars 
                </div>
            </div>
        </div>
    )
}