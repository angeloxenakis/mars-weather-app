import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MarsWeatherPanel } from './components/mars-weather/MarsWeatherPanel'
import { Header } from './components/nav/Header'
import { Login } from './components/login/Login'

function App() {
	return (
		<div className="App">
			<Login/>
			{/* <Header/>
			<MarsWeatherPanel/> */}
		</div>
	);
}

export default App;