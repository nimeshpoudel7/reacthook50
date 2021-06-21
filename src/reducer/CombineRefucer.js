import LoginReducer from "./LoginReducer";
import CounterReducer from './CounterReducer'
import {combineReducers} from 'redux'
const allreducer= combineReducers({
    counter:CounterReducer,
    Login: LoginReducer
})
export default allreducer