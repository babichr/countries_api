import React from "react";
import ReactDOM from "react-dom";

class Result extends React.Component{

	constructor( props ){
		super( props );
	};


	render(){
		const { country } = this.props;
		console.log(country);
		if ( country ){
			return(
				<table className="table">
					<tbody>
						<tr>
							<td>Name</td>
							<td> { country.name } </td>
						</tr>
						<tr>
							<td>Native Name</td>
							<td> { country.nativeName } </td>
						</tr>
						<tr>
							<td>Capital</td>
							<td> { country.capital } </td>
						</tr>
						<tr>
							<td>Region</td>
							<td> { country.region } </td>
						</tr>
						<tr>
							<td>Subregion</td>
							<td> { country.subregion } </td>
						</tr>
						<tr>
							<td>Сurrencies</td>
							<td> { country.currencies[0] } </td>
						</tr>
					</tbody>
				</table>
			)
		}else{
			return( 
				<div className="alert alert-info">To get info, please, select country</div>
			)
		}
	}
}

export default Result;