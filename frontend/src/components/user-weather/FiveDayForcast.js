import React from 'react'

export function FiveDayForcast(props) {

    let convertKtoF = (k) => {
        return Math.round(((k - 273.15)*(9/5)+32))
    }

    let earthWeek = [props.day1 , props.day2 , props.day3 , props.day4 , props.day5]

    let convertToDate = (date) => {
        let newDate = new Date(date)
        let currentDay = null

        switch(newDate.getDay()){
            case 0:
                currentDay = "Sunday"
                break
            case 1:
                currentDay = "Monday"
                break
            case 2:
                currentDay = "Tuesday"
                break
            case 3:
                currentDay = "Wednesday"
                break
            case 4:
                currentDay = "Thursday"
                break
            case 5:
                currentDay = "Friday"
                break
            case 6:
                currentDay = "Saturday"
                break
        }
    
        return currentDay

        
    }





    return (
        <div className="small-card-container">
            {earthWeek.map(day => 
                
                <div className="small-card">
                    <h4>{convertToDate(day.dt_txt)}</h4>
                    <img src="https://img.icons8.com/ios/30/000000/thermometer.png"/>
                    <p className="small-text">{convertKtoF(day.main.temp)}°F</p>
                </div>
            )}
        </div>
    )
}