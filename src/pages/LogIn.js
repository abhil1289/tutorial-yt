import React from 'react'

const LogIn = () => {
 const LoginForm =[{
     id : "username",
    label : "user Nname",
    value : "",
    type  : "text"
 },{
    id : "password",
   label : "password",
   value : "",
   type  : "text"
}]

  return <div>
    {
      LoginForm && LoginForm.length > 0 
      && LoginForm.map ((item) =>{
        return <>
           <label >{item.label}</label>
           <input type={item.type} />
        </>

      })
    }

    <div>
      <button>Login</button>
    </div>
  </div>
  
}

export default LogIn