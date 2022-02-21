import React, { useEffect, useState } from 'react';

import { getTodaysDate, formatDate} from '../services/date';
import { getWeatherIcon } from '../services/weather';

export default function WeatherAlerts(props) {
	const {weather, loaded} = props; 

	if(!loaded) return null;

	return (<>
		{weather.alerts.alert.map(alert => {
			return (
				<div className="rounded-lg bg-rose-800 p-3 mb-4">
					<div key={alert.effective} className="py-3 text-white">
						{alert.headline}
					</div>
				</div>
			);
		})}
	</>)
}