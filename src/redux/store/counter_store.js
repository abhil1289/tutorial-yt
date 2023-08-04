  
import { createStore } from "redux";
import CounterReducer from "../reducers/counter_reducer";


  const counterstore =  createStore(CounterReducer) 

  export default counterstore;