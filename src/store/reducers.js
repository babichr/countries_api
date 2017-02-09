export const reduceAllCountries = ( counties=[], action ) => {
	switch( action.type ){
		case "GET_ALL_COUNTRIES":
			return action.payload;
		default:
			return counties;
	}
};

export const reduceSelectedCountry = ( val="" , action ) => {
	switch(action.type){
		case "COUNTRY_CHANGE":
			return action.payload;
		default:
			return val;
	}
};

export const reduceSingleCountryData = ( county=[], action ) => {
	switch(action.type){
		case "GET_SINGLE_COUNTRY_DATA":
			return action.payload;
		default:
			return county;
	}
};