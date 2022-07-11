import React from 'react'
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";



function SecondaryInfo() {

    const [MaritalStatus, setMaritalStatus] = useState([
        { name: "Single", id: 1 },
        { name: "Married", id: 2 },
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
                   PAN No.
                  </Form.Label>
                  <Form.Control type="text" name="employeeId" />
                </Col>
                <Col>
                  <Form.Label style={{ color: "#7E7E7E", marginLeft: 2 }}>
                    Adhar No.
                  </Form.Label>
                  <Form.Control type="text" name="employeeName" />
                </Col>
              </Row>
              <Row>
              <Col>
                  {" "}
                  <Form.Label style={{ color: "#7E7E7E", marginLeft: 2 }}>
                  Father Name
                  </Form.Label>
                  <Form.Control type="text" name="employeeId" />
                </Col>
                <Col>
                  <Form.Label style={{ color: "#7E7E7E", marginLeft: 2 }}>
                    Mother Name
                  </Form.Label>
                  <Form.Control type="text" name="employeeName" />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Label style={{ color: "#7E7E7E", marginLeft: 2 }}>
                    Spouse Name
                  </Form.Label>
                  <Form.Control type="text" name="emailId" />
                </Col>
                <Col>
                  <Form.Label style={{ color: "#7E7E7E", marginLeft: 2 }}>
                   Passport No.
                  </Form.Label>
                  <Form.Control type="text" name="bloodGroup" />
                </Col>
              </Row>
              <Row xs={1} md={2}>
              <Col >
                  <Form.Label style={{ color: "#7E7E7E", marginLeft: 2 }}>
                   Marital Status
                  </Form.Label>
                  <Form.Select name="maritalStatus" >
                  <option hidden></option>
                  {MaritalStatus.map((val, id) => {
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

export default SecondaryInfo