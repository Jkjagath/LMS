import React from 'react'
import ButtonComponent from './../atom/ButtonComponent';

const ComponentA = () => {
 const   handleSubmit=()=>{
        console.log("this is from component A");
    }
  return (
    <div>
        <ButtonComponent lable="Create" onSubmit={()=>{handleSubmit()}}/>
    </div>
  )
}

export default ComponentA;