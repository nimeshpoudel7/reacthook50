import React,{useState,useEffect,useRef} from 'react'
import { Button  } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const UseRefSetTime = () => {
    const [count, SetCount] = useState(0)
    const useref = useRef(true)
useEffect(() => {
    return () => {
        useref.current=false;
    }
}, [])
    // const TimerFunction=()=>{
    //     if (useref===true) {
    //         console.log('execude')
    //     setTimeout(() => {
            
    //         SetCount(count+1)
    //     }, 2000);
    // }
    // }
    console.log(useref)
    const fakefetch = () => {
        console.log('fakefetch executed')
        setTimeout(() => {
            if (useref.current===true)
            SetCount(count + 1)
        }, 2000);
    }
    console.log(count)
    return (
        <div>
            <h1>unmount time out component: {count}</h1>
            <Button onClick={fakefetch}>hey</Button>
        </div>
    )
}

export default UseRefSetTime
