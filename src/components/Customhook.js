import React from 'react'
import { Button, ButtonGroup } from 'reactstrap';
import { Badge } from 'reactstrap';
import useCounter from '../Customhook/useCounter';
import 'bootstrap/dist/css/bootstrap.min.css';
const Customhook = () => {
    const [Count,increment,decrement,reset] =useCounter(2,3)
    // same for this
    // bracket vitra ko value hai hook garda ko hunca esma yoa intiavalue h0
    // const [Count,increment,decrement,reset] =useCounter(10)
    // const [Count, setCount] = useState(0)
    // const increment =()=>{
    //     setCount(Count+1)
    // }
    // const decrement =()=>{
    //     setCount(Count-1)
    // }
    // const reset =()=>{
    //     setCount(0)
    // }
    return (
        <div>
             <ButtonGroup>
             <Button color="primary" type="button">
             Component1 <Badge color="secondary">{Count}</Badge>
             </Button>
            </ButtonGroup>
            <p></p>
          
             <ButtonGroup>
                 <Button color="dark" onClick={increment}>increment</Button>
                 <Button color="dark" onClick={decrement}>decrement</Button>
                 <Button color="danger"onClick={reset}>reset</Button>
            </ButtonGroup>

        </div>
    )
}

export default Customhook
