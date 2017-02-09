import React from "react";
import { ReactDOM } from "react-dom";
import ReactSelect from "react-select";
import Result from "../Result";
import 'react-select/dist/react-select.css';
import { connect } from "react-redux";
import { store } from "../../store/store";
import { fetchCountriesApi, selectedCountry, fetchCountryApi } from "../../actions/actions";


class Select extends React.Component{

	constructor( props ){
		super( props );
	};

	componentDidMount(){
		store.dispatch(fetchCountriesApi())
	}

	render(){
		const { countries, selected, selectCountry, country } = this.props
		const countriesNames = [];
		countries.map( (option) => {
			countriesNames.push({"value": option.name, "label": option.name });
		});
		return(
			<div className="well container">
				<div className="form-group">
					<ReactSelect value={selected} onChange={ e => { selectCountry(e) }} options={countriesNames} />
				</div>
				<div className="form-group">
					<Result country={ country[0] } />
				</div>
			</div>
		)
	}
};


const mapStateToProps = ( state ) => ({
	countries: state.reduceAllCountries,
	selected: state.reduceSelectedCountry,
	country: state.reduceSingleCountryData
});

const mapDispatchToProps = ( dispatch ) => ({
	selectCountry: (e) => { dispatch(selectedCountry(e.value)); dispatch(fetchCountryApi(e.value)) }

});

Select = connect(mapStateToProps, mapDispatchToProps)(Select);

export default Select;