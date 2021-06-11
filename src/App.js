import React,{useReducer} from 'react';
import './App.css';
// import Counter from './components/Counter'
import ComponentA from './components/ComponentA'
export const CounterContex = React.createContext()
const initialState={
  counter:0
}
const reducer = (state, action) => {
  switch (action.type) {
      case 'increment':
          console.log("stare: "+state.counter)
          // console.log(action)
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
function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <CounterContex.Provider value={{counter:state.counter,dispatch:dispatch}}>
    <div className="App">
     
      App js counter {state.counter}
      <ComponentA/>
  
    </div>
    </CounterContex.Provider>
  );
}

export default App;
