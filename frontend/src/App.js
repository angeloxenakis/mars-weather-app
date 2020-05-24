import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MarsWeatherPanel } from './components/mars-weather/MarsWeatherPanel'
import { Header } from './components/nav/Header'
import { Login } from './components/login/Login'
import { Signup } from './components/login/Signup'

function App() {
	return (
		<div className="App">
			<Signup/>
			{/* <Login/> */}
			{/* <Header/>
			<MarsWeatherPanel/> */}
		</div>
	);
}

export default App;