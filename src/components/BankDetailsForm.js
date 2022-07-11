import React from 'react'
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";

function BankDetailsForm() {

    const [AccountType, setAccountType] = useState([
        { name: "Savings", id: 1 },
        { name: "Current", id: 2 },
        { name: "Joint Account", id: 3 },
       
      ]);
    
      const [Branch, setBranch] = useState([
        { name: "Chitradurga", id: 1 },
        { name: "Chikkamagalore", id: 2 },
        { name: "Bangalore", id: 3 },
        { name: "Mangalore", id: 4 },
        { name: "Thumkur", id: 5 },
        { name: "Hiriyur", id: 6 },
        { name: "Bellary", id: 7 },    
      ]);
      const [State, setState] = useState([
        { name: "Chitradurga", id: 1 },
        { name: "Chikkamagalore", id: 2 },
        { name: "Bangalore", id: 3 },
        { name: "Mangalore", id: 4 },
        { name: "Thumkur", id: 5 },
        { name: "Hiriyur", id: 6 },
        { name: "Bellary", id: 7 },    
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
                     Account No.
                    </Form.Label>
                    <Form.Control type="text" name="employeeId" />
                  </Col>
                  <Col>
                    <Form.Label style={{ color: "#7E7E7E", marginLeft: 2 }}>
                     Bank Name
                    </Form.Label>
                    <Form.Control type="text" name="employeeName" />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Label style={{ color: "#7E7E7E", marginLeft: 2 }}>
                      Account Type
                      </Form.Label>
                      <Form.Select name="accountType" >
                  <option hidden></option>
                  {AccountType.map((val, id) => {
                    return <option key={id}>{val.name}</option>;
                  })}
                </Form.Select>
                  </Col>
                  <Col>
                    <Form.Label style={{ color: "#7E7E7E", marginLeft: 2 }}>
                     IFSC Code
                    </Form.Label>
                    <Form.Control
                  type="text"
                  name="dateOfBirth"
                  />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Label style={{ color: "#7E7E7E", marginLeft: 2 }}>
                     Branch
                    </Form.Label>
                    <Form.Select name="branch" >
                  <option hidden></option>
                  {Branch.map((val, id) => {
                    return <option key={id}>{val.name}</option>;
                  })}
                </Form.Select>
                  </Col>
                  <Col>
                    <Form.Label style={{ color: "#7E7E7E", marginLeft: 2 }}>
                     State
                    </Form.Label>
                    <Form.Select name="state" >
                  <option hidden></option>
                  {State.map((val, id) => {
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

export default BankDetailsForm