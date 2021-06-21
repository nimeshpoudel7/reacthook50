import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import createstore
import {createStore} from 'redux';
import allreducer from './reducer/CombineRefucer';
import {Provider} from 'react-redux';
//action
// const increment =(value)=>{
//   return {type:'INCREMENT',payload:value}
// }
// const decrement =()=>{
//   return {type:'DECREMENT'}
// }

//redux
// const countReducer=(state=5,action)=>{
//   switch (action.type) {
//     case 'INCREMENT':
      
//       return state+action.payload;
//       case 'DECREMENT':
      
//       return state-1
  
//     default:
//       return state;
//   }
// }
//create store
let store = createStore(allreducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

// store.subscribe(()=>{
//   console.log(store.getState())
// })
// //dispatch increment action
// store.dispatch(increment(5))

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
