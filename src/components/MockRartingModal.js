import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import Multiselect from "multiselect-react-dropdown";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function MockRatingModal(props) {
  const [MockType, setMockType] = useState([
    { name: "Mock", id: 1 },
    { name: "Remock", id: 2 },
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
  const [MockRating, setMockRating] = useState([
    { name: "Excellent(90 Above)", id: 1 },
    { name: "Good(80-89)", id: 2 },
    { name: "Above Average(70-79)", id: 3 },
    { name: "Average(60-69)", id: 4 },
    { name: "Below Average(50-59)", id: 5 },
  ]);
  const handleHide = () => {
    props.handleClose();
  };
  return (
    <Modal
      show={props.showModal}
      onHide={handleHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="mockratingmodal">Mock Rating</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Container fluid="md">
              <Row>
                <Col>
                  {" "}
                  <Form.Label style={{ color: "#7E7E7E", marginLeft: 2 }}>
                    Mock Type
                  </Form.Label>
                  <Form.Select>
                    <option hidden></option>
                    {MockType.map((val, id) => {
                      return <option key={id}>{val.name}</option>;
                    })}
                  </Form.Select>
                </Col>
                <Col>
                  <Form.Label style={{ color: "#7E7E7E", marginLeft: 2 }}>
                    Batch ID
                  </Form.Label>
                  <Form.Control type="text" name="batchId" />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Label style={{ color: "#7E7E7E", marginLeft: 2 }}>
                    Technologies
                  </Form.Label>
                  <Multiselect
                    options={TechnologyData}
                    displayValue="name"
                    name="technologies"
                  />
                </Col>
                <Col>
                  <Form.Label style={{ color: "#7E7E7E", marginLeft: 2 }}>
                    Pracctical Knowledge (out if 100)
                    <sup style={{ color: "red" }}>*</sup>
                  </Form.Label>
                  <Form.Control type="text" name="batchId" />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Label style={{ color: "#7E7E7E", marginLeft: 2 }}>
                    Pracctical Knowledge (out if 100)
                    <sup style={{ color: "red" }}>*</sup>
                  </Form.Label>
                  <Form.Control type="text" name="batchId" />
                </Col>
                <Col>
                  <Form.Label style={{ color: "#7E7E7E", marginLeft: 2 }}>
                    Overall Feedback((Practical+Theoretical)/2)
                    <sup style={{ color: "red" }}>*</sup>
                  </Form.Label>
                  <Form.Select>
                    <option hidden></option>
                    {MockRating.map((val, id) => {
                      return <option key={id}>{val.name}</option>;
                    })}
                  </Form.Select>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Label style={{ color: "#7E7E7E", marginLeft: 2 }}>
                    Detailed Feedback<sup style={{ color: "red" }}>*</sup>
                  </Form.Label>
                  <Form.Control as="textarea" aria-label="With textarea" />
                </Col>
              </Row>
            </Container>
          </Form.Group>
          </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.handleClose}>Submit</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MockRatingModal;
