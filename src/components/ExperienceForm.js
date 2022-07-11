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


function ExperienceForm() {

   const UserTemplate={skillType:"",skillRating:"",yearOfExperience:""}
   const [FormArry, setFormArry] = useState([UserTemplate])


   const [Yop, setYop] = useState([
    { name: "Trainee", id: 1 },
    { name: "Associate Engineer", id: 2 },
    { name: "Senior Engineer", id: 3 },
    { name: "Team Lead", id: 4 },
    { name: "Manager", id: 5 },
    
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
                <Typography>Company Name</Typography>
              </AccordionSummary>
              <AccordionDetails>
              <Container fluid="md">
              <Row>
                <Col>
                  {" "}
                  <Form.Label style={{ color: "#7E7E7E", marginLeft: 2 }}>
                  Company Name
                  </Form.Label>
                  <Form.Control type="text" name="skillType" />
                </Col>
                <Col>
                  <Form.Label style={{ color: "#7E7E7E", marginLeft: 2 }}>
                   Years Of Experience
                  </Form.Label>
                  <Form.Control type="text" name="skillRating" />
                </Col>
              </Row>
              <Row>
                <Col>
                  {" "}
                  <Form.Label style={{ color: "#7E7E7E", marginLeft: 2 }}>
                   Date Of Joining
                  </Form.Label>
                  <Form.Control type="text" name="skillType" />
                </Col>
                <Col>
                  <Form.Label style={{ color: "#7E7E7E", marginLeft: 2 }}>
                    DAte Of Releiving
                  </Form.Label>
                  <Form.Control type="text" name="skillRating" />
                </Col>
              </Row>
              <Row>
                <Col>
                  {" "}
                  <Form.Label style={{ color: "#7E7E7E", marginLeft: 2 }}>
                  Designation
                  </Form.Label>
                  <Form.Select name="Yop" >
                  <option hidden></option>
                  {Yop.map((val, id) => {
                    return <option key={id}>{val.name}</option>;
                  })}
                </Form.Select>
                </Col>
                <Col>
                  <Form.Label style={{ color: "#7E7E7E", marginLeft: 2 }}>
                    Location
                  </Form.Label>
                  <Form.Control type="text" name="skillRating" />
                </Col>
              </Row>
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

export default ExperienceForm