import { useState } from "react";
import { combineReducers } from "redux";


const pageSize=10;
const currentPage=1;

const pageSizeReducer = (state=pageSize,action) => {
console.log("state",state);
    if(action.type==="CHANGE"){
       return state=action.payload
    }
    return state;
}

const pageNumReducer=(state=currentPage,action)=>{
    switch(action.type){
        case "PAGECHANGE":
            return state=action.payload; 
        case "INCREASE":
            return state=state+1 ;
        case "DECREASE":
            return state=state+1 ;
        default:
            return state;    
    }
  
//  if(action.type==="PAGECHANGE"){
//         return state=action.payload
//     }
// if(action.type==="INCREASE"){
//          return state=state+1 
//     }
// if(action.type==="DECREASE"){
  
//         return state=state-1 
//     }
//  return state;
}
export const Reducers=combineReducers({pageSizeReducer,pageNumReducer})