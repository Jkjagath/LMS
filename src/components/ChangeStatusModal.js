import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import Multiselect from "multiselect-react-dropdown";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ChangeStatusModal(props) {
    
  const handleHide=()=>{
    props.handleClose();
  }
 
  return (
    <Modal
      show={props.ShowStatusModal}
      onHide={handleHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="mockratingmodal">Reason to change the Status</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form.Label style={{ color: "#7E7E7E", marginLeft: 2 }}>
                    Detailed Feedback<sup style={{ color: "red" }}>*</sup>
                  </Form.Label>
                  <Form.Control as="textarea" aria-label="With textarea" />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.handleClose}>Submit</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ChangeStatusModal;
