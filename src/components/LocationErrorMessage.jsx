import React from 'react';

export default function LocationErrorMessage(props) {
	const {locationError} = props;
	
	const errorsMap = {
		[locationError.PERMISSION_DENIED]: 'User denied the request',
		[locationError.POSITION_UNAVAILABLE]: 'Location information is unavialable',
		[locationError.TIMEOUT]: 'Request timeed out',
		[locationError.UNKNOWN_ERROR]: 'An unknown error occured'
	}

	return (
		<div className="container bg-red-800 text-center text-white rounded-lg text-sm font-bold px-4 py-3" role="alert">
			Could not get location: {errorsMap[locationError.code]}
		</div>
	)
} 