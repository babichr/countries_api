const GET_ALL_COUNTRIES = "GET_ALL_COUNTRIES";
const COUNTRY_CHANGE = "COUNTRY_CHANGE";
const GET_SINGLE_COUNTRY_DATA = "GET_SINGLE_COUNTRY_DATA";
let allCountrisUrl = "https://restcountries.eu/rest/v1/all";
let singlCountyUrl = "https://restcountries.eu/rest/v1/name/";

export const fetchAllCountries = ( json ) => {
	return {
		type: GET_ALL_COUNTRIES,
		payload: json
	}
};

export const selectedCountry = (value) => {
	return {
		type: COUNTRY_CHANGE,
		payload: value,
	}
};


export const getSingleCountryData = (json) => {
	return {
		type: GET_SINGLE_COUNTRY_DATA,
		payload: json,
	}
};

export const fetchCountriesApi = () => {
	return dispatch => {
		return fetch(allCountrisUrl)
		.then( response => response.json() )
		.then( json => dispatch( fetchAllCountries(json)) )
		.catch( error => console.log(error) );
	}
};

export const fetchCountryApi = (name) => {
	return dispatch => {
		return fetch(singlCountyUrl + name)
		.then( response => response.json() )
		.then( json => dispatch( getSingleCountryData(json)) )
		.catch( error => console.log(error) );
	}
};