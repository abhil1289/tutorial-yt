import React from 'react'
import { connect } from 'react-redux'
import { plus,decrement } from '../redux/action/counter_action'

const Basic = (props) => {
  return (
    <div>
        <button onClick={props.plus}>Running</button>
        <button onClick={props.decrement}>Walking</button>
        <h1>{props.count}</h1>
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


export default  connect(mapDispatchToProps,mapStateToProps) (Basic)