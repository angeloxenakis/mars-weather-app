import React, { useState } from 'react'
import {useHistory, useParams} from 'react-router'
import astronaut from "../../assets/red-astronaut.svg"

export function Login(props) {
    const [user, changeUser] = useState({
            username: '',
            password: ''
    })

    const [error, setError] = useState(false)


    let history = useHistory()
    let params = useParams()

    let signUp = () => {
        history.push('/signup')
    }

    console.log(props)

    async function handleSubmit(e){
        e.preventDefault()
        console.log("I am submitting")
        let response = await fetch('http://localhost:3000/login', {
            credentials: 'omit',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: user.username,
                password: user.password
            })
        })
        let { success, id, username, zipcode } = await response.json()
        if(success){
            console.log("Login Successful")
            props.getUserInfo(id,username, zipcode)

            //HONESTLY CAN JUST RERENDER TO ANY OTHER PAGE THIS JUST MAKES MORE SENSE
            //UNTIL USER PAGE IS CREATED
            history.push('/earth-weather')
        }
        else{
            setError(true)
            console.log("Login Failed")
        }
    }

    if(error){
        return (
            <div className="login-panel">
                <form onSubmit={handleSubmit}>
                    <img width="128px" height="128px" src={astronaut}/>
                    <h2>Error Detected...</h2>
                    <h4>Please reverify your credentials, Human:</h4>
                    <div className="username">
                        <label>Username</label><br></br>
                        <input type="text" value={user.username} onChange={ e => changeUser({ ...user, username: e.target.value })} />
                    </div>
                    <div className="password">
                        <label>Password</label><br></br>
                        <input type="password" value={user.password} onChange={ e => changeUser({ ...user, password: e.target.value })} />
                    </div>
                    <div className="login-btns">
                        <input type="submit" value="Login" className="login-btn"/>
                        <div className="signup-btn">Sign Up</div>
                    </div>
                </form>
            </div>
        )
    }


    else{
        return (
        <div className="login-panel">
            <form onSubmit={handleSubmit}>
                <img width="128px" height="128px" src={astronaut}/>
                <h2>Human Identified...</h2>
                <h4>Please verify your credentials, Human:</h4>
                <div className="username">
                    <label>Username</label><br></br>
                    <input type="text" value={user.username} onChange={ e => changeUser({ ...user, username: e.target.value })} />
                </div>
                <div className="password">
                    <label>Password</label><br></br>
                    <input type="password" value={user.password} onChange={ e => changeUser({ ...user, password: e.target.value })} />
                </div>
                <div className="login-btns">
                    <input type="submit" value="Login" className="login-btn"/>
                    <div className="signup-btn" onClick={signUp}>Sign Up</div>
                </div>
            </form>
        </div>
    )}
}  


