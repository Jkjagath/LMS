import React, { useEffect } from "react";
import { useState } from "react";
import Multiselect from "multiselect-react-dropdown";
import moment from "moment";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { Input } from "antd";




function AddBatch(props) {

  // to save input data 
  const [BatchDetails, setBatchDetails] = useState({
    batchName: "",
    mentorName: "",
    technologies: "",
    startDate: "",
    endDate: "",
  });


 

  const [MentorData, setMentorData] = useState([
    { name: "Trainer 1", id: 1 },
    { name: "Trainer 2", id: 1 },
    { name: "Trainer 3", id: 1 },
    { name: "Trainer 4", id: 1 },
  ]);

  const [TechnologyData, setTechnologyData] = useState([
    { name: "HTML", id: 1 },
    { name: "CSS", id: 2 },
    { name: "Bootstrap", id: 3 },
    { name: "Java Script", id: 4 },
    { name: "React js", id: 5 },
    { name: "Node jS", id: 6 },
    { name: "Mongo DB", id: 7 },
    { name: "JAVA", id: 8 },
    { name: "Springboot", id: 9 },
  ]);

  // to diable the previous dates from slecting
  var todayDate = new Date().toISOString().slice(0, 10);

  // to close the Modal
  const handleHide = () => {
    props.handleClose();
  };

 
  //to prevent form refresh
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  //  To Save Data from form input
  const saveDetails = (event) => {
    setBatchDetails({
      ...BatchDetails,
      [event.target.name]: event.target.value,
    });
  };

  //To take or Save the input from Calender
  const saveStartDate = (value) => {
    setBatchDetails({ ...BatchDetails, startDate: value.format("YYYY-MM-DD") });
  };
  const saveEndDate = (value) => {
    setBatchDetails({ ...BatchDetails, endDate: value.format("YYYY-MM-DD") });
  };


  //to select data from multiselect Drop Down Box
  const handleSelect = (e) => {
    let names = "";
    e.map((val) => {
      names = names + " " + val.name;
    });
    setBatchDetails({ ...BatchDetails, technologies: names });
  };

// to save nput data and send it to parent component
  const saveData = () => {
    let dataCopy=BatchDetails
    // console.log("dataCopy",dataCopy);
    props.getDataFromAddBatch(dataCopy)
    handleHide();

    setBatchDetails({
      batchName: "",
      mentorName: "",
      technologies: [],
      startDate: "",
      endDate: "",
    });
  };
  return (
    <div>
      <Modal centered show={props.showModal} onHide={handleHide}>
        <Modal.Header closeButton>
          <Modal.Title>Add new Batch</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="forBatchName">
              <Form.Label style={{ color: "#7E7E7E", marginLeft: 2 }}>
                Batch Name
              </Form.Label>
              <Form.Control
                type="text"
                name="batchName"
                target={BatchDetails.batchName}
                onChange={(event) => {
                  saveDetails(event);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ color: "#7E7E7E", marginLeft: 2 }}>
                Mentor Name
              </Form.Label>
              <Form.Select
                name="mentorName"
                target={BatchDetails.mentorName}
                onChange={(event) => {
                  saveDetails(event);
                }}
              >
                <option hidden></option>
                {MentorData.map((val, id) => {
                  return <option key={id}>{val.name}</option>;
                })}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ color: "#7E7E7E", marginLeft: 2 }}>
                Technologies
              </Form.Label>
              <Multiselect
                options={TechnologyData}
                displayValue="name"
                name="technologies"
                target={BatchDetails.technologies}
                onSelect={handleSelect}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="forEndDate">
              <Form.Label style={{ color: "#7E7E7E", marginLeft: 2 }}>
                Select Start Date
              </Form.Label>
              <Form.Control
                type="date"
                min={todayDate}
                name="startDate"
                target={BatchDetails.startDate}
                onChange={(event) => {
                  saveDetails(event);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="forEndDate">
              <Form.Label style={{ color: "#7E7E7E", marginLeft: 2 }}>
                Select End Date
              </Form.Label>
              <Form.Control
                type="date"
                min={todayDate}
                name="endDate"
                target={BatchDetails.endDate}
                onChange={(event) => {
                  saveDetails(event);
                }}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button> */}
          <Button variant="primary" onClick={saveData}>
            Create
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AddBatch;
