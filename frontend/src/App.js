import React from 'react';
import logo from './logo.svg';
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
			<BrowserRouter>
				<Route path="/mars-weather" component={MarsWeatherPanel}/>
				<Route path="/login" component={Login}/>
				<Route path="/earth-weather" components={UserWeatherPanel}/>
			</BrowserRouter>
		</div>
	);
}

export default App;