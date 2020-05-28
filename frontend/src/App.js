import React, {useState} from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router';
import './App.css';
import { MarsWeatherPanel } from './components/mars-weather/MarsWeatherPanel'
import { Header } from './components/nav/Header'
import { HeaderLoggedIn } from './components/nav/Header_LoggedIn'
import { Login } from './components/login/Login'
import { Signup } from './components/login/Signup'
import { UserWeatherPanel } from './components/user-weather/UserWeatherPanel'
import { Insight  } from './components/insight/InsightPanel'
import { CompareWeather } from './components/compare-weather/CompareWeather';
import { EditLocation } from './components/user-data/EditLocation'


function App(props) {
	let [currentUserId, setCurrentUserId] = useState(null)
	let [currentUserName, setCurrentUserName] = useState(null)
	let [currentUserZip, setCurrentUserZip] = useState(null)
	let [currentUserCity, setCurrentUserCity] = useState(null)
	const [isAuthenticated, setAuthentication] = useState(false)
	


	let getUserInfo = (id,username,zipcode,city) => {
		setCurrentUserId(id)
		setCurrentUserName(username)
		setCurrentUserZip(zipcode)
		setAuthentication(true)
	}



	let updateLocation = (zipcode, city) => {
		setCurrentUserZip(zipcode)
		setCurrentUserCity(city)
	}

	
	//While user is logged in, make /login and /signup redirect to already logged in page I guess
	console.log(isAuthenticated)
		return (
			<div className="App">
				<BrowserRouter>
				{isAuthenticated? <HeaderLoggedIn username = {currentUserName}/>:<Header/>}
				<div className="container">
					<Route exact path="/" component={MarsWeatherPanel}/>
					<Route exact path="/mars-weather" component={MarsWeatherPanel}/>
					<Route exact path="/earth-weather" render={(props) => <UserWeatherPanel {...props} canView = {isAuthenticated} currentUser = {currentUserName} zipcode = {currentUserZip} city = {currentUserCity}/>}/>
					<Route exact path="/login" render={(props) => <Login {...props} getUserInfo = {getUserInfo}/>}/>
					<Route exact path="/signup" component={Signup}/>
					<Route path="/compare-weather" render={(props) => <CompareWeather {...props} canView = {isAuthenticated} zipcode = {currentUserZip}/>}/>
					<Route path="/insight" component={Insight}/>
					<Route exact path="/edit-location" render={(props) => <EditLocation {...props} canView = {isAuthenticated} userId = {currentUserId} updateLocation = {updateLocation}/>}/>
					
				</div>

				</BrowserRouter>
				{/* <Footer/> */}
			</div>
		);
	}








	// Don't worry bout me this is some hot garbage

	// else{
	// 	return (
	// 		<div className="App">
	// 			<HeaderLoggedIn username = {currentUserName} id = {currentUserId} getUserInfo = {getUserInfo}/>
	// 			<div className="container">
	// 				<BrowserRouter>
	// 					<Route exact path="/mars-weather" component={MarsWeatherPanel}/>
	// 					<Route path="/earth-weather" render={(props) => <UserWeatherPanel {...props} authentication = {isAuthenticated} isLoggedIn = {isLoggedIn}/>} />
	// 					<Route path="/login" render={(props) => <Login {...props} getUserInfo = {getUserInfo}/>}/>
	// 					<Route path="/signup" component={Signup}/>
	// 				</BrowserRouter>
	// 			</div>
	// 			{/* <Footer/> */}
	// 		</div>
	// 	);
	// }



export default App;