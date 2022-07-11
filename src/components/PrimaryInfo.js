import React from 'react'
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";

function PrimaryInfo() {

    const [Designation, setDesignation] = useState([
        { name: "Trainee", id: 1 },
        { name: "Employee", id: 2 },
        { name: "Manager", id: 3 },
        { name: "Trainer", id: 4 },
      ]);
      const [Gender, setGender] = useState([
        { name: "Male", id: 1 },
        { name: "Female", id: 2 },
        { name: "Others", id: 3 },
        
      ]);
      const [Nationality, setNationality] = useState([
        { name: "Indian", id: 1 },
        { name: "Ameriacan", id: 2 },
        { name: "African", id: 3 },
        { name: "South African", id: 4 },
        { name: "Uganda", id: 5 },
        { name: "Srilanka", id: 6 },
        { name: "Japan", id: 7 },
        { name: "Indonesia", id: 8 },
        
      ]);
      const [EmployeeStatus, setEmployeeStatus] = useState([
        { name: "Working", id: 1 },
        { name: "Bench", id: 2 },
        { name: "PIP", id: 3 },
        
      ]);
  return (
    <div>
             <>
        <Form id="formdiv">
            <Form.Group className="mb-3">
              <Container fluid="md">
                <Row>
                  <Col>
                    {" "}
                    <Form.Label style={{ color: "#7E7E7E", marginLeft: 2 }}>
                     Employee ID
                    </Form.Label>
                    <Form.Control type="text" name="employeeId" />
                  </Col>
                  <Col>
                    <Form.Label style={{ color: "#7E7E7E", marginLeft: 2 }}>
                      Employee Name
                    </Form.Label>
                    <Form.Control type="text" name="employeeName" />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Label style={{ color: "#7E7E7E", marginLeft: 2 }}>
                      Date of Joining
                      </Form.Label>
                      <Form.Control
                  type="date"
                  name="joiningDate"
                  />
                  </Col>
                  <Col>
                    <Form.Label style={{ color: "#7E7E7E", marginLeft: 2 }}>
                      Date Of Birth
                    </Form.Label>
                    <Form.Control
                  type="date"
                  name="dateOfBirth"
                  />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Label style={{ color: "#7E7E7E", marginLeft: 2 }}>
                      Email ID
                    </Form.Label>
                    <Form.Control type="text" name="emailId" />
                  </Col>
                  <Col>
                    <Form.Label style={{ color: "#7E7E7E", marginLeft: 2 }}>
                     Blood Group
                    </Form.Label>
                    <Form.Control type="text" name="bloodGroup" />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Label style={{ color: "#7E7E7E", marginLeft: 2 }}>
                     Designation
                    </Form.Label>
                    <Form.Select name="designation" >
                  <option hidden></option>
                  {Designation.map((val, id) => {
                    return <option key={id}>{val.name}</option>;
                  })}
                </Form.Select>
                  </Col>
                  <Col>
                    <Form.Label style={{ color: "#7E7E7E", marginLeft: 2 }}>
                      Gender
                    </Form.Label>
                    <Form.Select name="gender" >
                  <option hidden></option>
                  {Gender.map((val, id) => {
                    return <option key={id}>{val.name}</option>;
                  })}
                </Form.Select>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Label style={{ color: "#7E7E7E", marginLeft: 2 }}>
                     Nationality
                    </Form.Label>
                    <Form.Select name="nationality" >
                  <option hidden></option>
                  {Nationality.map((val, id) => {
                    return <option key={id}>{val.name}</option>;
                  })}
                </Form.Select>
                  </Col>
                  <Col>
                    <Form.Label style={{ color: "#7E7E7E", marginLeft: 2 }}>
                      Employee Status
                    </Form.Label>
                    <Form.Select name="employeeStatus" >
                  <option hidden></option>
                  {EmployeeStatus.map((val, id) => {
                    return <option key={id}>{val.name}</option>;
                  })}
                </Form.Select>
                  </Col>
                </Row>
              </Container>
            </Form.Group>
            </Form>
        </>

    </div>
  )
}

export default PrimaryInfo