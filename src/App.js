import React,{useEffect,useReducer} from 'react';
import './App.css';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ListGroup, ListGroupItem,Badge } from 'reactstrap';
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
     <ListGroup>
         {state.todos.map(todo => <ListGroupItem key={todo.id}>{todo.title} {todo.completed ?(<span class="badge alert-success">True</span>) : (<span class="badge alert-danger">False</span>)}</ListGroupItem>)}

     </ListGroup>
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
