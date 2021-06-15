import React,{useRef,useState} from 'react';
import './App.css';
import { Button  } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import UseRefSetTime from './components/UseRefSetTime';


function App() {
  const [show, setShow] = useState(true)
 const inputRef = useRef()
  return (
    
    <div className="App">
    <input ref={inputRef}type="text"></input>
    <input type="text"></input>
    <input type="text"></input>
    <Button onClick={()=>{
      inputRef.current.focus()
    }}> Use OF ref</Button>
    <p></p>
    <Button onClick={()=>{setShow(!show)}}>hide and show</Button>

    {show && <UseRefSetTime/>}
    </div>
    
  );
}     

export default App;
