import {useState} from 'react'
import { Button, ButtonGroup } from 'reactstrap';
import { Badge } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const Customhook2 = () => {
    const [Count, setCount] = useState(0)
    const increment =()=>{
        setCount(Count+1)
    }
    const decrement =()=>{
        setCount(Count-1)
    }
    const reset =()=>{
        setCount(0)
    }
    return (
        <div>
             <ButtonGroup>
             <Button color="primary" type="button">
             Component2 <Badge color="secondary">{Count}</Badge>
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

export default Customhook2
