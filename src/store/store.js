import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import createLogger from "redux-logger";
import thunk from "redux-thunk";
import { reduceAllCountries, reduceSelectedCountry, reduceSingleCountryData } from "./reducers"

const logger = createLogger();
const initialState = {};

const makeRootReduces = ( asyncReducers ) => {
	return combineReducers({
		reduceAllCountries,
		reduceSelectedCountry,
		reduceSingleCountryData
	})
}

export const store = createStore(
	makeRootReduces(),
	initialState,
	applyMiddleware(
		thunk,
		logger
	)
)