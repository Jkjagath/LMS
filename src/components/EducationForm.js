import React, {useState,useEffect} from 'react'
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from '@material-ui/core';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


function EducationForm() {

   const UserTemplate={educationType:"",yearOfPassing:"",percentage:"",universityName:"",instituteName:"",specialization:"",state:""}
   const [FormArry, setFormArry] = useState([UserTemplate])


   const [State, setState] = useState([
    { name: "Karnatak", id: 1 },
    { name: "AndhraPradesh", id: 2 },
    { name: "Telangana", id: 2 },
    { name: "Tamilnad", id: 2 },
    { name: "Kerala", id: 2 },
    { name: "Maharashtra", id: 2 },
    { name: "Delhi", id: 2 },
  ]);
  const [EducationType, setEducationType] = useState([
    { name: "10Th", id: 1 },
    { name: "PUC", id: 2 },
    { name: "Diploma", id: 2 },
    { name: "Degree", id: 2 },
    { name: "Post Graduation", id: 2 },
    { name: "Masters", id: 2 },
   
  ]);
  const [UniversityName, setUniversityName] = useState([
    { name: "VTU", id: 1 },
    { name: "PES", id: 2 },
    { name: "IIT", id: 2 },
    { name: "Reva", id: 2 },
    { name: "BMS", id: 2 },
   
   
  ]);

const handleSubmit=(e)=>{
  e.preventDefault();
}
const addForms=()=>{
  setFormArry([...FormArry,UserTemplate])
}
 
function deleteForms(id){
const dataCopy=[...FormArry]
console.log("dataCopy.id",dataCopy[id]);
// const updatedArray=[...FormArry].filter((dataCopy)=>dataCopy.id===id)
 dataCopy.splice(id,1)
setFormArry(dataCopy)
}

  return (
    <div>
         <Form id="formsdiv" onSubmit={handleSubmit}>

          <Form.Group className="mb-3">
           {
            FormArry.map((val,id)=>(
              <Accordion style={{width:"50%", marginLeft:"25%"}}  key={id}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon/>}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Education Type</Typography>
              </AccordionSummary>
              <AccordionDetails>
              <Container fluid="md">
              <Row>
                <Col>
                  {" "}
                  <Form.Label style={{ color: "#7E7E7E", marginLeft: 2 }}>
                   Education Type
                  </Form.Label>
                  <Form.Select name="UniversityName" >
                  <option hidden></option>
                  {UniversityName.map((val, id) => {
                    return <option key={id}>{val.name}</option>;
                  })}
                </Form.Select>
                </Col>
                <Col>
                  <Form.Label style={{ color: "#7E7E7E", marginLeft: 2 }}>
                    Year Of Passing
                  </Form.Label>
                  <Form.Control type="text" name="AdharNo" />
                </Col>
              </Row>
              <Row>
              <Col>
                  {" "}
                  <Form.Label style={{ color: "#7E7E7E", marginLeft: 2 }}>
                  Percentage(%)
                  </Form.Label>
                  <Form.Control type="text" name="fatherName" />
                </Col>
                <Col>
                  <Form.Label style={{ color: "#7E7E7E", marginLeft: 2 }}>
                   University Name
                  </Form.Label>
                  <Form.Select name="EducationType" >
                  <option hidden></option>
                  {EducationType.map((val, id) => {
                    return <option key={id}>{val.name}</option>;
                  })}
                </Form.Select>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Label style={{ color: "#7E7E7E", marginLeft: 2 }}>
                    Institute Name
                  </Form.Label>
                  <Form.Control type="text" name="spouseName" />
                </Col>
                <Col>
                  <Form.Label style={{ color: "#7E7E7E", marginLeft: 2 }}>
                   Specialization
                  </Form.Label>
                  <Form.Control type="text" name="passportNo" />
                </Col>
              </Row>
              <Row xs={1} md={2}>
              <Col >
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
              
             {/* {idx===(FormArry.length-1)?(<Button onClick={addForms}>Add</Button>):(<Button onClick={()=>deleteForms(idx)}>Delete</Button>)} */}
             
           
            </Container>
            <Button onClick={addForms}>Add</Button>
             <Button onClick={()=>deleteForms(id)}>Delete{id}</Button>
            </AccordionDetails>
            </Accordion>
            ))
           }
          </Form.Group>
          </Form>
    </div>
  )
}

export default EducationForm