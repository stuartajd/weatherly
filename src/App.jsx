import React, {useState, useEffect} from 'react';

import WeatherAlerts from './components/WeatherAlerts';
import CurrentWeather from './components/CurrentWeather';
import FiveDayForecast from './components/FiveDayForecast';
import Loading from './components/Loading';
import LocationErrorMessage from './components/LocationErrorMessage';

import {getWeatherForecast} from './services/weather';

import './App.css';

function App() {
	const [locationError, setlocationError] = useState(null);
	const [weather, setWeather] = useState(null);
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition((location) => {
				getWeatherForecast(location.coords.latitude, location.coords.longitude)
				.then(setWeather)
				.then(() => setLoaded(true));
			}, (locationError) => {
				setlocationError(locationError);
			});
		} else {
			alert("Could not find the current location for the user");
		}
	}, []);

  return (
    <main className="max-w-md my-8 mx-auto">
		{locationError !== null && <LocationErrorMessage locationError={locationError} />}
		{(!loaded && locationError === null) && <Loading />}
		
		<WeatherAlerts loaded={loaded} weather={weather} />
		<CurrentWeather loaded={loaded} weather={weather} />
		<FiveDayForecast loaded={loaded} weather={weather} />

		<div className="mt-4 text-xs text-center">
			weatherly. 
			created by <a href="https://www.stuartd.co.uk/" target="blank">stuart</a>.
			powered by <a href="https://www.weatherapi.com" target="blank">weatherapi</a>.
			icons by <a href="https://www.amcharts.com/free-animated-svg-weather-icons/" target="blank">amchart</a>.<br />
			{loaded && <>last updated {weather.location.localtime}.</>}
		</div>
    </main>
  );
}

export default App;