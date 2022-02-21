function formatDate(inputDate) {
	const date = new Date(inputDate);

	const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	const monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

	const getOrdinal = (date) => {
		if (date > 3 && date < 21) return 'th';
		switch (date % 10) {
			case 1:  return "st";
			case 2:  return "nd";
			case 3:  return "rd";
			default: return "th";
		};
	}

	return `${daysOfWeek[date.getDay()]} ${date.getDate()}${getOrdinal(date.getDate())} ${monthsOfYear[date.getMonth()]}`; 
}

function getTodaysDate() {
	return formatDate(new Date().toString());
}

export {
	getTodaysDate,
	formatDate
}