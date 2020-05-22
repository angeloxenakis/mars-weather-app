import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MarsWeather } from './components/mars-weather/MarsWeather'
import { Header } from './components/nav/Header'

function App() {
	return (
		<div className="App">
			<Header/>
			<MarsWeather/>
		</div>
	);
}

export default App;