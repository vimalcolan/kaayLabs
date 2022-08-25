import {Reducers} from "./Reducers";
import { createStore } from "redux";

const Store=createStore(Reducers);
console.log(Store.getState());
export default Store;