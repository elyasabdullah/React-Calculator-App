import { useContext } from "react";
import { AppContext } from "../App";
const InputData = function() {
const {
    firstInput,
    setFirstInput,
    secondInput,
    setSecondInput,
    operator,
    setOperator,
    finalResult,
    setFinalResult
} = useContext(AppContext);
function InputOne(number:any) {
    setFirstInput((prev:any) => {
    return (
        [...prev,
        number]
    );
    });
}
function InputTwo(number:any) {
    setSecondInput((prev:any) => {
    return (
        [...prev,
        number]
    );
    });
}
const pushNumber = function(number:any) {
    if(finalResult !== undefined){
    
    setFirstInput(() => {
        return [
        ...finalResult.toString().split(''),
        InputOne(number)
        ]
    });
    setSecondInput(() => []);
    setOperator(undefined);
    setFinalResult(undefined)
    if(firstInput.length >= 0 && operator == undefined) {
        InputOne(number);
    }
    else if(firstInput.length != 0 && operator != undefined && finalResult === undefined){
        InputTwo(number);
    }
    }else {
    if(firstInput.length >= 0 && operator == undefined) {
        InputOne(number);
    }
    else if(firstInput.length != 0 && operator != undefined && finalResult === undefined){
        InputTwo(number);
    }
    }
    
}
const handleOperator = (operator:any) => {
    if(finalResult !== undefined) {
    setFirstInput(() => {
        return [
        ...finalResult.toString().split('')
        ]
    });
    setSecondInput([]);
    setFinalResult(undefined)
    setOperator(operator);
    }else {
    if(firstInput.length != 0) {
        setOperator(operator);
    }
    }
}
function setTheFinalResult() {
    let result;
    if(operator === '+') {
    result = +firstInput.join("") + +secondInput.join("");
    }
    else if(operator === '-') {
    result = +firstInput.join("") - +secondInput.join("");
    }
    else if(operator === '*') {
    result = +firstInput.join("") * +secondInput.join("");
    }else if(operator === '÷') {
    result = +firstInput.join("") / +secondInput.join("");
    console.log(result.toString().length)
    }
    if(result) {
        if(result.toString().length >= 12) {
            result = "Number Out of Range"
        } 
    }
    setFinalResult(result);
}
/////////////////////////////////////////
let inputArray = [
    'AC', 'DEL', '÷', '7', '8', '9', '*', '4', '5', '6',
    '-', '1', '2', '3', '+', '0', '.', '='
]
const resetOutput = function() {
    setFirstInput([]);
    setSecondInput([]);
    setOperator(undefined);
    setFinalResult(undefined)
}
const deleteCharacter = (event:any) => {
    if(firstInput.length > 0 && operator == undefined && secondInput == 0) {
        setFirstInput((prev:any) => prev.slice(0, -1));
    }else if(firstInput.length > 0 && operator != undefined && secondInput.length == 0){
    setOperator(undefined);
    }
    else if(firstInput.length > 0 && operator != undefined && secondInput.length > 0){
        setSecondInput((prev:any) => prev.slice(0, -1));
    }else {
    event.preventDefault();
    }
}
const InputElements = inputArray.map((ele, index) => {
    return (
    <span
        key={index}
        onClick={(e) => {
        if(
            ele !== 'AC' && ele !== 'DEL' && 
            ele !== '*' && ele !== '+' && 
            ele !== '-' && ele !== '=' && ele !== '÷' 
        ) 
        {
            if(firstInput.length >= 12 && operator == undefined) {
                e.preventDefault();
                alert("Number Out of Range");
            }else {
                if(secondInput.length >= 12) {
                    e.preventDefault();
                    alert("Number Out of Range");
                }else {
                    pushNumber(ele);
                }
            }
        }
        else if(ele === '*'){
            handleOperator('*')
        }else if(ele === '+') {
            handleOperator('+')
        }else if(ele === '-') {
            handleOperator('-')
        }else if(ele === '÷') {
            handleOperator('÷')
        }else if(ele === '=') {
            setTheFinalResult();
        }else if(ele === 'AC') {
            resetOutput();
        }else if(ele === 'DEL') {
            deleteCharacter(e);
        }
        }}
    >{ele}</span>
    )
})
return (
    <div className="inputData">
    {InputElements}
    </div>
)
}
export default InputData;