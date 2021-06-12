import React,{useContext} from 'react'
import { Button, ButtonGroup } from 'reactstrap';
import { Badge } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {CounterContex} from '../App';
import ComponentC from './ComponentC'
const ComponentB = () => {
    const counterContex = useContext(CounterContex)
    console.log(counterContex)
    const{counter,dispatch}=counterContex
    console.log(counter)
    return (
        <div>
            <ButtonGroup>
             <Button color="primary" type="button">
             Counter2 <Badge color="secondary">{counter}</Badge>
             </Button>
            </ButtonGroup>
            <p></p>
          
             <ButtonGroup>
                 <Button color="dark" onClick={() => dispatch({type:'increment',payload:1})}>increment</Button>
                 <Button color="dark" onClick={() => dispatch({type:'decrement',payload:1})}>decrement</Button>
                 <Button color="danger" onClick={() => dispatch({type:'reset'})}>reset</Button>
            </ButtonGroup>
            <p></p>
            <ComponentC/>
        </div>
    )
}

export default ComponentB
