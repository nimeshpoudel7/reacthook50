import React,{useReducer} from 'react'
import { Button, ButtonGroup } from 'reactstrap';
import { Badge } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const initialState={
    counter1:0,
    counter2:10
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            console.log("stare: "+state.counter1)
            console.log(action)
            return {...state,counter1:state.counter1+action.payload}
            
        case 'decrement':
            return {...state,counter1:state.counter1-action.payload}
            case 'increment2':
                console.log("stare: "+state.counter2)
                console.log(action)
                return {...state,counter2:state.counter2+1}
                
            case 'decrement2':
                return {...state,counter2:state.counter2-1}
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
           <ButtonGroup>
             <Button color="primary" type="button">
             Counter2 <Badge color="secondary">{Count.counter1}</Badge>
             </Button>
            <Button color="primary" type="button">
                Counter2 <Badge color="secondary">{Count.counter2}</Badge>
            </Button>
            </ButtonGroup>
            <p></p>
          
             <ButtonGroup>
                 <Button color="dark" onClick={() => dispatch({type:'increment',payload:1})}>increment</Button>
                 <Button color="dark" onClick={() => dispatch({type:'decrement',payload:1})}>decrement</Button>
            </ButtonGroup>
            <p></p>
            <ButtonGroup>
                 <Button color="dark" onClick={() => dispatch({type:'increment',payload:5})}>increment</Button>
                 <Button color="dark" onClick={() => dispatch({type:'decrement',payload:5})}>decrement</Button>
            </ButtonGroup>
            <p></p>
            <ButtonGroup>
                 <Button color="dark" onClick={() => dispatch({type:'increment2'})}>increment</Button>
                 <Button color="dark" onClick={() => dispatch({type:'decrement2'})}>decrement</Button>
            </ButtonGroup>
            <Button color="danger" onClick={() => dispatch({type:'reset'})}>reset</Button>

            <p></p>
          
        </div>
    )
}

export default Counter
