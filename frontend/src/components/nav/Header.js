import React from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router'

export function Header(props) {
    let history = useHistory()
    return (
        <div className="nav-container">
            <div className="nav">
                <div className="nav-btns">
                    <a className="btn" onClick = {() => history.push('/mars-weather')}>Mars</a>
                    <a className="btn" onClick = {() => history.push('/insight')}>Insight</a>
                    <a className="btn" onClick = {() => history.push('/earth-weather')}>Earth</a>
                    <a className="btn" onClick = {() => history.push('/edit-location')}>Location</a>
                    <a className="btn" onClick = {() => history.push('/compare-weather')}>Compare</a>
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