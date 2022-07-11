import React from 'react'
import ButtonComponent from '../atom/ButtonComponent'

const DataComponent = (props) => {
    const handleSubmit=()=>{
        console.log("hello");
        props.setState(false)
    }
  return (
    <div>
        <ButtonComponent lable="Submit" onSubmit={()=>{handleSubmit()}}/>
    </div>
  )
}

export default DataComponent