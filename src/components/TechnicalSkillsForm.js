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


function TechnicalSkillsForm() {

   const UserTemplate={skillType:"",skillRating:"",yearOfExperience:""}
   const [FormArry, setFormArry] = useState([UserTemplate])


   const [Yop, setYop] = useState([
    { name: "0 - 1 Years", id: 1 },
    { name: "2 - 3 Years", id: 2 },
    { name: "3 - 4 Years ", id: 3 },
    { name: "More Than 4 Years", id: 4 },
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
                <Typography>Skill Type</Typography>
              </AccordionSummary>
              <AccordionDetails>
              <Container fluid="md">
              <Row>
                <Col>
                  {" "}
                  <Form.Label style={{ color: "#7E7E7E", marginLeft: 2 }}>
                   Skill Type
                  </Form.Label>
                  <Form.Control type="text" name="skillType" />
                </Col>
                <Col>
                  <Form.Label style={{ color: "#7E7E7E", marginLeft: 2 }}>
                    Skill Rating
                  </Form.Label>
                  <Form.Control type="text" name="skillRating" />
                </Col>
              </Row>
              <Row xs={1} md={2}>
              <Col>
                  {" "}
                  <Form.Label style={{ color: "#7E7E7E", marginLeft: 2 }}>
                  Year Of Experience (Over Skill)
                  </Form.Label>
                  <Form.Select name="Yop" >
                  <option hidden></option>
                  {Yop.map((val, id) => {
                    return <option key={id}>{val.name}</option>;
                  })}
                </Form.Select>
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

export default TechnicalSkillsForm