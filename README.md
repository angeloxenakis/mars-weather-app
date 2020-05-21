# Mars Weather App

The Mars Weather App will show a user the most recent weather data on Mars sent from Nasa's open API on Mars weather. The user can also enter in their current location, or search locations on Earth to view their weather conditions. Once the user has specified the local weather conditions they want to vciew, they can compare them side by side with Mars' weather.

## Models
* User
* Location
* Mars

## Model Relationships
### Mars
### User -< Locations

## API's
* Internal Rails API
* Nasa Mars Weather API
* Weather Channel API

## User Stories
* Login: User can login
    * Session Auth
    * Username & Password for login
    * Additional Info: Email & location

* User can view Mars Temperature
    * Accessed through Nasa API

* User can enter their own location and view local weather
    * Accessed through Weather Channel API

## Stretch Goals:
* User can view additional Mars weather details (pressure, wind speed, etc..)
    * Accessed through Nasa API
* Estimated countdown to when earthlings can actually visit Mars




----------------------------------------------

* Maybe make given address default location