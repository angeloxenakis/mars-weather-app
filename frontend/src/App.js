import React from 'react';
import './App.css';
import { MarsWeatherPanel } from './components/mars-weather/MarsWeatherPanel'
import { Header } from './components/nav/Header'
import { Login } from './components/login/Login'
import { Signup } from './components/login/Signup'
import { UserWeatherPanel } from './components/user-weather/UserWeatherPanel'
import { BrowserRouter } from 'react-router-dom'
import { Route } from 'react-router'

function App() {
	return (
		<div className="App">
			<Header/>
			<BrowserRouter>
				<Route exact path="/mars-weather" component={MarsWeatherPanel}/>
				<Route path="/earth-weather" components={UserWeatherPanel}/>
				<Route path="/login" component={Login}/>
				<Route path="/signup" component={Signup}/>
			</BrowserRouter>
		</div>
	);
}

export default App;