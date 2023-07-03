import React, { useState, createContext } from 'react'
import Result from './Components/Result';
import InputData from './Components/InputData';
interface contextInterface { 
  firstInput: undefined; 
  setFirstInput: React.Dispatch<React.SetStateAction<undefined>>;
  secondInput: undefined; 
  setSecondInput: React.Dispatch<React.SetStateAction<undefined>>;
  operator: undefined; 
  setOperator: React.Dispatch<React.SetStateAction<undefined>>;
}
export const AppContext = createContext<any>(null);
function App() {
  const [firstInput, setFirstInput] = useState<any>([]);
  const [secondInput, setSecondInput] = useState<any>([]);
  const [operator, setOperator] = useState<any>();
  const [finalResult, setFinalResult] = useState();
  return ( 
    <div className="App">
      <AppContext.Provider
        value={
          {
            firstInput,
            setFirstInput,
            secondInput,
            setSecondInput,
            operator,
            setOperator,
            finalResult,
            setFinalResult
          }
        }
      >
        <Result/>
        <InputData/>
      </AppContext.Provider>
      
    </div>
  )
}




export default App



