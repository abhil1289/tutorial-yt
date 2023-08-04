import React from 'react'
import { connect } from 'react-redux'
import { plus,decrement } from '../redux/action/counter_action'


const Maximum = (props) => {
 console.log(props)
  return (
    //working 
    <div>
        <button onClick={props.plus} >Increment</button>
        <button onClick={props.decrement} >decrement</button>
        <div>count : {props.count}</div>
    </div>
  )
}
const mapStateToProps = state =>{
    return {
        count: state.count
    }
}

const mapDispatchToProps = dispatch => {

    return {
        plus : () => dispatch(plus()), 
        decrement : () => dispatch(decrement())
    }
      
}



export default  connect(mapStateToProps,mapDispatchToProps) (Maximum);