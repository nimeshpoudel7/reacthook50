import React,{useState,useMemo} from 'react';
import './App.css';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Memo from './components/Memo'
import Memo2 from './components/Memo2'

function App() {
 const [buttonCounter, SetButtonCounter] = useState(0)
 const btnFunction=()=>{
  SetButtonCounter(buttonCounter+1)
 }

 const [buttonCounter1, SetButtonCounter1] = useState(0)
 const btnFunction1=()=>{
  SetButtonCounter1(buttonCounter1+1)
 }

 const UsingMemo=useMemo(() =>{
  return(<Memo count={buttonCounter}/>)
 },[buttonCounter])
 console.log(UsingMemo)

  return (
    
    <div className="App">
      Appjs Counter={buttonCounter}

      <p></p>
       <Button color="secondary"onClick={btnFunction}>secondary</Button>
        {UsingMemo}

        <Button color="secondary"onClick={btnFunction1}>secondary</Button>
        <Memo2 counte={buttonCounter1}/>
    </div>
  );
}     

export default App;
