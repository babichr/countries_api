import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Select from "./components/Select"
import { store } from "./store/store.js"



class Main extends React.Component{

	render(){
		return (
			<Provider store={ store } >
				<main className="main">
					<Select />
				</main>
			</Provider>
		)
	}

};

ReactDOM.render( <Main />, document.getElementById("root") );