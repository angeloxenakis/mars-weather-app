import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MarsWeatherPanel } from './components/mars-weather/MarsWeatherPanel'
import { Header } from './components/nav/Header'
import { Login } from './components/login/Login'
import { Signup } from './components/login/Signup'
import { UserWeatherPanel } from './components/user-weather/UserWeatherPanel'

function App() {
	return (
		<div className="App">
			{/* <Signup/> */}
			{/* <Login/> */}
			{/* <Header/> */}
			{/* <MarsWeatherPanel/> */}
			<UserWeatherPanel/>
		</div>
	);
}

export default App;