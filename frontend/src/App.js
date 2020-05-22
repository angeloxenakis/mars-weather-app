import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MarsWeatherPanel } from './components/mars-weather/MarsWeatherPanel'
import { Header } from './components/nav/Header'

function App() {
	return (
		<div className="App">
			<Header/>
			<MarsWeatherPanel/>
		</div>
	);
}

export default App;