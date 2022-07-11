import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function StepperSubmitModal(props) {
const handlehide=()=>{
    props.handleClose();
}

  return (
    <div>
        <Modal
      show={props.Show}
      centered
      
    >
      
      
      <Modal.Body>
      
        <h4 className='text-center' style={{marginLeft:"5px", color:"#086288"}}>Your request will be approved in sometime, please wait</h4>
        
      </Modal.Body>
      <div  style={{width:"20px", marginBottom:"10px", marginLeft:"45%"}}>
        <Button style={{background:"#086288"}} onClick={handlehide} size="sm" >Return</Button>
        </div>
    </Modal>
    </div>
  )
}

export default StepperSubmitModal