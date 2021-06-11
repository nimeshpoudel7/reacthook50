import React,{useReducer} from 'react'
import { Button, ButtonGroup } from 'reactstrap';
import { Badge } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const initialState={
    counter:0
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            console.log("stare: "+state.counter)
            console.log(action)
            return {...state,counter:state.counter+action.payload}
            
        case 'decrement':
            console.log("stare: "+state.counter)
            return {...state,counter:state.counter-action.payload}
        case 'reset':
            console.log("stare: "+state.counter)
            return initialState

        default:
            return state;
    }
}
const Counter = () => {
    const [state1, dispatch1] = useReducer(reducer, initialState)
    const [state2, dispatch2] = useReducer(reducer, initialState)
    
    return (
        <div>
           <ButtonGroup>
             <Button color="primary" type="button">
             Counter2 <Badge color="secondary">{state1.counter}</Badge>
             </Button>
            <Button color="primary" type="button">
                Counter2 <Badge color="secondary">{state2.counter}</Badge>
            </Button>
            </ButtonGroup>
            <p></p>
          
             <ButtonGroup>
                 <Button color="dark" onClick={() => dispatch1({type:'increment',payload:1})}>increment</Button>
                 <Button color="dark" onClick={() => dispatch1({type:'decrement',payload:1})}>decrement</Button>
                 <Button color="danger" onClick={() => dispatch1({type:'reset'})}>reset</Button>
            </ButtonGroup>
            <p></p>
            <ButtonGroup>
                 <Button color="dark" onClick={() => dispatch2({type:'increment',payload:2})}>increment</Button>
                 <Button color="dark" onClick={() => dispatch2({type:'decrement',payload:2})}>decrement</Button>
                 <Button color="danger" onClick={() => dispatch2({type:'reset'})}>reset</Button>
            </ButtonGroup>
      

            <p></p>
          
        </div>
    )
}

export default Counter
