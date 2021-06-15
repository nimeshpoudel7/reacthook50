import React,{useCallback,useState} from 'react';
import './App.css';
import { Button  } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const functioncountr= new Set()
  const [Counter1, setCounter1] = useState(0)
  const [Counter2, setCounter2] = useState(0)

  const increment1 =()=>{
    console.log(increment1)
    setCounter1(Counter1+1)
  }

  const increment2=useCallback(
    () => {
      setCounter2(Counter2+1)
    },
    [Counter2],
  )
  functioncountr.add(Counter1)
  functioncountr.add(Counter2)
  console.log(functioncountr)
  return (
    
    <div className="App">
    <h1>Counter 1 value: {Counter1}</h1>
    <h1>Counter 1 value: {Counter2}</h1>
    <Button onClick={increment1}>Counter 1 Btn</Button>
    <p></p>
    <Button onClick={increment2}>Counter 2 btn</Button>
    </div>
    
  );
}     

export default App;
