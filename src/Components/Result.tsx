import React from "react";
import { AppContext } from "../App";
const Result = function() {
	const {
					firstInput, secondInput, operator,
					finalResult, setFinalResult
				} = React.useContext(AppContext);
	
	return (
		<div className="result">
			<div className="one">{firstInput} {operator} {secondInput}</div>
			<div className="one">{finalResult}</div>
		</div>
	)
}
export default Result;