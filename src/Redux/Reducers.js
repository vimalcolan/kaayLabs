
import { combineReducers } from "redux";

const pageSize=10;
const currentPage=1;

// Page size
const pageSizeReducer = (state=pageSize,action) => {
console.log("state",state);
    if(action.type==="CHANGE"){
       return state=action.payload
    }
    return state;
}

// Page number
const pageNumReducer=(state=currentPage,action)=>{
 if(action.type==="PAGECHANGE"){
        return state=action.payload
    }
if(action.type==="INCREASE"){
         return state=state+1 
    }
if(action.type==="DECREASE"){
  
        return state=state-1 
    }
 return state;
}
export const Reducers=combineReducers({pageSizeReducer,pageNumReducer})