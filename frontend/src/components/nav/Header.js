import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router'

export function Header(props) {

    console.log(props)
    let history = useHistory()
    let [ btnStatus, setBtnStatus ] = useState({
        marsBtn: "active-btn",
        insightBtn: "btn",
        earthBtn: "btn",
        locationBtn: "btn",
        compareBtn: "btn"
    })

    let marsClick = () => {
        setBtnStatus({
            marsBtn: "active-btn",
            insightBtn: "btn",
            earthBtn: "btn",
            locationBtn: "btn",
            compareBtn: "btn"
        })
        history.push('/mars-weather')
    }

    let insightClick = () => {
        setBtnStatus({
            marsBtn: "btn",
            insightBtn: "active-btn",
            earthBtn: "btn",
            locationBtn: "btn",
            compareBtn: "btn"
        })
        history.push('/insight')
    }

    let earthClick = () => {
        setBtnStatus({
            marsBtn: "btn",
            insightBtn: "btn",
            earthBtn: "active-btn",
            locationBtn: "btn",
            compareBtn: "btn"
        })
        history.push('/earth-weather')
    }

    let locationClick = () => {
        setBtnStatus({
            marsBtn: "btn",
            insightBtn: "btn",
            earthBtn: "btn",
            locationBtn: "active-btn",
            compareBtn: "btn"
        })
        history.push('/edit-location')
    }

    let compareClick = () => {
        setBtnStatus({
            marsBtn: "btn",
            insightBtn: "btn",
            earthBtn: "btn",
            locationBtn: "btn",
            compareBtn: "active-btn"
        })
        history.push('/compare-weather')
    }

    if (props.view === false) return (
        <div className="nav-container">
            <div className="nav">
                <div className="nav-btns">
                    <a className={btnStatus.marsBtn} onClick = {marsClick}>Mars</a>
                    <a className={btnStatus.insightBtn} onClick = {insightClick}>Insight</a>
                    <a className={btnStatus.earthBtn} onClick = {earthClick}>Earth</a>
                    <a className={btnStatus.locationBtn} onClick = {locationClick}>Location</a>
                    <a className={btnStatus.compareBtn} onClick = {compareClick}>Compare</a>
                </div>
                <div className="nav-profile">
                    <a href="/login">Login</a>
                    <br></br>
                    <a href="/signup">Sign Up</a>
                </div>
            </div>
        </div>
    )

    return (
        <div className="nav-container">
            <div className="nav">
                <div className="nav-btns">
                    <a className={btnStatus.marsBtn} onClick = {marsClick}>Mars</a>
                    <a className={btnStatus.insightBtn} onClick = {insightClick}>Insight</a>
                    <a className={btnStatus.earthBtn} onClick = {earthClick}>Earth</a>
                    <a className={btnStatus.locationBtn} onClick = {locationClick}>Location</a>
                    <a className={btnStatus.compareBtn} onClick = {compareClick}>Compare</a>
                </div>
                <div className="nav-profile">
                    {props.userName} Has Landed On Mars 
                </div>
            </div>
        </div>
    )


}