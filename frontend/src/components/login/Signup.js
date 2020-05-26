import React, { useState } from 'react'

export function Signup(props) {
    const [newUser, changeNewUser] = useState({
        username: '',
        password: '',
        email: ''
    })

    let [errorList, addToErrorList] = useState([])

    async function handleSubmit(e){
        e.preventDefault()
        console.log("I am submitting")
        let response = await fetch('http://localhost:3000/users', {
            credentials: 'omit',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: newUser.username,
                password: newUser.password,
                email: newUser.email
            })
        })
        let { success, id, errors } = await response.json()
        if(success){
            console.log(success)
            console.log("New User Created Successful")
            //Should Redirect Back to Login Page?
        }
        else{
            
            console.log(errors)
            console.log("New User Failed")

        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Sign Up</h1>
            <div>
                <label>Username</label>
                <input type="text" value={newUser.username} onChange={ e => changeNewUser({ ...newUser, username: e.target.value })} />
            </div>
            <div>
                <label>Password</label>
                <input type="password" value={newUser.password} onChange={ e => changeNewUser({ ...newUser, password: e.target.value })} />
            </div>
            <div>
                <label>Email</label>
                <input type="email" value={newUser.email} onChange={ e => changeNewUser({ ...newUser, email: e.target.value })} />
            </div>
            <input type="submit" />
        </form>
    )
}  