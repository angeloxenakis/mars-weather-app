import React, { useState } from 'react'
import {useHistory} from 'react-router'
import alien from "../../assets/red-alien.svg"

export function EditLocation(props) {
    const [editUser, changeEditUser] = useState({
        zipcode: '',
        city: '',

        // Really consider just asking for US, UK, JP types
        //country: ''
    })

    let history = useHistory()

    console.log(props)

    

    async function handleSubmit(e){
        e.preventDefault()
        console.log("I am submitting")
        let response = await fetch(`http://localhost:3000/users/${props.userId}`, {
            credentials: 'omit',
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                zipcode: editUser.zipcode,
                city: editUser.city

            })
        })
        let {success} = await response.json()
        if(success){
            console.log(success)
            props.updateLocation(editUser.zipcode,editUser.city)
            history.push('/earth-weather')
            //Should Redirect Back to Login Page?
        }
    }


    if (props.canView){
        return (
            <div className="login-panel">
                <form onSubmit={handleSubmit}>
                    <img width="128px" height="128px" src={alien}/>
                    <h2>Enter A New Location To Infiltrate</h2>
                    <h4></h4>
                    <div className="zipcode">
                        <label>Zipcode</label><br></br>
                        <input type="text" value={editUser.zipcode} onChange={ e => changeEditUser({ ...editUser, zipcode: e.target.value })} />
                    </div>
                    <div className="city">
                        <label>City</label><br></br>
                        <input type="city" value={editUser.city} onChange={ e => changeEditUser({ ...editUser, city: e.target.value })} />
                    </div>
                    <input type="submit" className="login-btn" value="Set Location"/>
                </form>
            </div>
        )
    } else {
        return (
            <div className="login-panel">Please login to set your weather location.</div>
        )
    }
}  