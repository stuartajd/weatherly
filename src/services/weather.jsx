import {config} from '../config';

async function getWeatherForecast(latitude, longitude) {
	const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${config.api_key}&q=${latitude},${longitude}&aqi=yes&alerts=yes&days=3`);
	return response.json();
}  

function getWeatherIcon(weatherCode) {
	const weatherCodeMap = {
		1000: './weather-icons/day.svg',
		1003: './weather-icons/cloudy.svg',
		1006: './weather-icons/cloudy.svg',
		1009: './weather-icons/cloudy.svg',
		1030: './weather-icons/cloudy-day-2.svg',
		1063: './weather-icons/rainy-2.svg',
		1066: './weather-icons/snowy-3.svg',
		1069: './weather-icons/rainy-7.svg',
		1072: './weather-icons/rainy-7.svg',
		1087: './weather-icons/thunder.svg',
		1114: './weather-icons/snowy-6.svg',
		1117: './weather-icons/snowy-6.svg',
		1135: './weather-icons/cloudy-6.svg',
		1147: './weather-icons/cloudy-6.svg',
		1150: './weather-icons/rainy-1.svg',
		1153: './weather-icons/rainy-4.svg',
		1168: './weather-icons/rainy-7.svg',
		1171: './weather-icons/rainy-7.svg',
		1180: './weather-icons/rainy-1.svg',
		1183: './weather-icons/rainy-1.svg',
		1186: './weather-icons/rainy-1.svg',
		1189: './weather-icons/rainy-1.svg',
		1192: './weather-icons/rainy-1.svg',
		1195: './weather-icons/rainy-6.svg',
		1198: './weather-icons/rainy-7.svg',
		1201: './weather-icons/rainy-7.svg',
		1204: './weather-icons/snowy-4.svg',
		1207: './weather-icons/snowy-2.svg',
		1210: './weather-icons/snowy-3.svg',
		1213: './weather-icons/snowy-4.svg',
		1216: './weather-icons/snowy-4.svg',
		1219: './weather-icons/snowy-5.svg',
		1222: './weather-icons/snowy-6.svg',
		1225: './weather-icons/snowy-6.svg',
		1237: './weather-icons/snowy-6.svg',
		1240: './weather-icons/rainy-4.svg',
		1243: './weather-icons/rainy-5.svg',
		1246: './weather-icons/rainy-6.svg',
		1249: './weather-icons/rainy-7.svg',
		1252: './weather-icons/snowy-2.svg',
		1255: './weather-icons/snowy-4.svg',
		1258: './weather-icons/snowy-5.svg',
		1261: './weather-icons/snowy-4.svg',
		1264: './weather-icons/snowy-6.svg',
		1273: './weather-icons/thunder.svg',
		1276: './weather-icons/thunder.svg',
		1279: './weather-icons/thunder.svg',
		1282: './weather-icons/thunder.svg',
	};

	return weatherCodeMap[weatherCode] || '';
}

export {
	getWeatherForecast,
	getWeatherIcon
}