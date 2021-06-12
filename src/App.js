import React,{useEffect,useReducer} from 'react';
import './App.css';
import axios from 'axios'
const initialState = {
  loading: true,
  error: "",
  todos: [],
};
const reducer=(state,action)=>{
  switch (action.type) {
    case 'SET_DATA':
      return{
        loading:false,
        error:"",
        todos:action.payload
      }
    case 'SET_ERROR':
      
      return{
        loading:false,
        error:'some errors',
        todos:[]
      }
    
    default:
      return state
  }
}


function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users/1/todos')
    // axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then (responseJson => {
      console.log(responseJson.data)
      dispatch({type:'SET_DATA',payload:responseJson.data})
      // setobjUserDetails(responseJson.data)
      // setobjUserDetail(responseJson.data)
    })
    .catch(responseJson => {
      dispatch({type:'SET_ERROR'})
    })
  },[])
 

  // let listmarkup=<div>sucess</div>
  console.log(state.loading)
  console.log(state.todos)
   const CHECKDATA = (
     <ul>
       {state.todos.map((todo)=>{
         return <li key={todo.id}>{todo.title}</li>
       }
       
       )
       }
     </ul>
   )
  //  const listmarkup = (
  //   <ul>
  //     {state.todos.map(todo => <li key={todo.id}>{todo.title}</li>)}
  //   </ul>
  // )


  return (
    
    <div className="App">
 {state.loading ? 'Loading' : (state.error ? state.error : CHECKDATA)}

    </div>
  );
}     

export default App;
