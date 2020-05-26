import React, { useState } from 'react'

export function Login(props) {
    const [user, changeUser] = useState({
            username: '',
            password: ''
    })

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
        let { success, id } = await response.json()
        if(success){
            console.log("Login Successful")
            //Should Redirect Back to User Page maybe but we gotta set that up
        }
        else{
            console.log("Login Failed")
        }
    }

    return (
        <div className="login-panel">
            <form onSubmit={handleSubmit}>
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
                <input type="submit" value="Login" className="login-btn"/>
            </form>
        </div>
    )
}  


