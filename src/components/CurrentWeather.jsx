import React, { useEffect, useState } from 'react';

import { getTodaysDate } from '../services/date';
import {getWeatherIcon} from '../services/weather';

export default function CurrentWeather(props) {
	const {weather, loaded} = props;

	const [hourlyForecast, setHourlyForecast] = useState([]);

	useEffect(() => {
		if(!loaded) return;

		// Run each time weather changes.
		// Get all the forecasts for today excluding times that have passed.

		const remainingHours = [...weather.forecast.forecastday[0].hour, ...weather.forecast.forecastday[1].hour]
			.filter((forecast) => {
				const dateRightNow = new Date();
				const forecastDate = new Date(forecast.time);
				
				const isSameDate = dateRightNow.getDate() === forecastDate.getDate();
				return !isSameDate || (isSameDate && forecastDate.getHours() >= dateRightNow.getHours())
			}).splice(0, 12);
		setHourlyForecast(remainingHours);
	}, [loaded, weather]);

	if(!loaded) return null;

	return (
		<div className="rounded-lg bg-indigo-800 p-3 mb-4">
			<div className="flex items-center justify-between">
				<div className="">
					<div className="text-gray-200 font-bold">{weather.location.name}, {weather.location.region}</div>
					<div className="text-gray-200 mb-4">{getTodaysDate()}</div>
					<div className="font-bold text-xl mb-4 text-white">{weather.current.condition.text}</div>
					<div className="text-7xl font-bold mb-4 text-white">{weather.current.temp_c}<span className="text-gray-100 text-2xl">&deg;c</span></div>
				</div> 
				<div>
					<img src={getWeatherIcon(weather.current.condition.code)} className="w-52 h-auto" /> 
				</div>
			</div>

			<div className="flex items-center justify-start text-white text-center mb-3 overflow-x-auto">
				{hourlyForecast.map(hourly => {
					const isNow = new Date(hourly.time).getHours() === new Date().getHours();
					return (
						<div key={hourly.time_epoch} className="shrink-0 w-18">
							{isNow ? 'NOW' : `${new Date(hourly.time).getHours()}:00`}
							<img src={getWeatherIcon(hourly.condition.code)} className="w-18 h-18 block" />
							{hourly.temp_c}&deg;c
						</div>
					)
				})}
			</div>
			
			<div className="border-t border-white py-3 text-white flex items-center justify-between">
				<span>Precipitation</span>
				<span className="font-bold">{weather.current.precip_mm} mm</span>
			</div>
			<div className="border-t border-white py-3 text-white flex items-center justify-between">
				<span>Humidity</span>
				<span className="font-bold">{weather.current.humidity}%</span>
			</div>
			<div className="border-t border-white pt-3 text-white flex items-center justify-between">
				<span>Wind Speed</span>
				<span className="font-bold">{weather.current.gust_mph} mph</span>
			</div>
		</div>
	)
}