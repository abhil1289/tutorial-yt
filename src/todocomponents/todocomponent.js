import React ,{memo}from 'react'

const Todocomponent = ({addTodo,todo}) => {

    console.log("this is todolist component")
  return  <>
   {
       todo && todo.length > 0 && todo.map((item,index)=>{
           
           return <p key={index}>{item}</p>
           
        })
    }
    <button onClick={addTodo}>Addnew</button>
   </>
  
}

export default memo(Todocomponent);