import { combineReducers } from "redux";
import userReducer  from './userReducers';
import productReducer from "./productReducer";

const myReducer = combineReducers({
   user : userReducer,
   product : productReducer
})

export default myReducer;