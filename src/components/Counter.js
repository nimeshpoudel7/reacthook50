import React,{useReducer} from 'react'
import { Button, ButtonGroup } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const initialState=0
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            console.log(state)
            console.log(action)
            return state + 1
            
        case 'decrement':
            return state - 1
        case 'reset':

            return initialState

        default:
            return state;
    }
}
const Counter = () => {
    const [Count, dispatch] = useReducer(reducer, initialState)
    
    return (
        <div>
            <div>{Count}</div>
             <ButtonGroup>
                 <Button color="dark" onClick={() => dispatch('increment')}>increment</Button>
                 <Button color="dark" onClick={() => dispatch('decrement')}>decrement</Button>
                 <Button color="danger" onClick={() => dispatch('reset')}>reset</Button>
            </ButtonGroup>
        </div>
    )
}

export default Counter
