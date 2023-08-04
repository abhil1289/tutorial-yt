import React from 'react'
import { useState,useCallback,useMemo} from 'react'
import Todocomponent from '../todocomponents/todocomponent';

const Counter = () => {
    const [count,setCount] = useState(0);
    const [todo,setTodoList] = useState([]);
    const mul = useMemo(()=> squareCount (count),[count])
        // const mul = squareCount(count)
    const addCounter = () =>{
        console.log("this is increment method")
        setCount((prev)=>  prev+1 )
    }

    const addTodo = useCallback(() =>{
        console.log("this add todo item")
        setTodoList((prev) => [...prev,`new task ${todo.length + 1 }`])
    },[todo])
    
  return  <>
     <button onClick={addCounter}>Increment</button>
     <p> count :{count}</p>
     <h3>mul : {mul}</h3>
    
     <Todocomponent addTodo={addTodo} todo={todo} />
    </>

}

const squareCount =(num) =>{
    console.log(num*num)
    return num*num;

}
export default Counter