import React from "react";

const UserDetails = (props) => {
    return <>
    <h1>NAme {props.user} {props.id}</h1>
    <button onClick={() =>props.c2p("working hard")}>Update value</button>
    </>  
    
}
export default UserDetails;