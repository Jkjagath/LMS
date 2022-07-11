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


function AdressForm() {

   const UserTemplate={adressType:"",doorNo:"",street:"",locality:"",city:"",state:"",pinCode:"",landmark:""}
   const [FormArry, setFormArry] = useState([UserTemplate])
   const [State, setState] = useState([
    { name: "Karnatak", id: 1 },
    { name: "AndhraPradesh", id: 2 },
    { name: "Telangana", id: 3 },
    { name: "Tamilnad", id: 4 },
    { name: "Kerala", id: 5 },
    { name: "Maharashtra", id: 6 },
    { name: "Delhi", id: 7 },
  ]);
  const [City, setCity] = useState([
    { name: "Chitradurga", id: 1 },
    { name: "Chikkamagaluru", id: 2 },
    { name: "Bengaluru", id: 3 },
    { name: "Hiriyur", id: 4 },
    { name: "Thumkur", id: 5 },
    { name: "Manglore", id: 6 },
    { name: "Bellary", id: 7 },
  ]);



    
    // console.log("FormArry",FormArry);
  
    // const formArr=new Array(forms)
// console.log(FormArry.length);
// console.log(FormArry);
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
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Address Details</Typography>
              </AccordionSummary>
              <AccordionDetails>
              <Container fluid="md">
              <Row>
                <Col>
                  {" "}
                  <Form.Label style={{ color: "#7E7E7E", marginLeft: 2 }}>
                 Address Type
                  </Form.Label>
                  <Form.Control type="text" name="panNo" />
                </Col>
                <Col>
                  <Form.Label style={{ color: "#7E7E7E", marginLeft: 2 }}>
                  Door No.
                  </Form.Label>
                  <Form.Control type="text" name="AdharNo" />
                </Col>
              </Row>
              <Row>
              <Col>
                  {" "}
                  <Form.Label style={{ color: "#7E7E7E", marginLeft: 2 }}>
                 Street
                  </Form.Label>
                  <Form.Control type="text" name="fatherName" />
                </Col>
                <Col>
                  <Form.Label style={{ color: "#7E7E7E", marginLeft: 2 }}>
                   Locality
                  </Form.Label>
                  <Form.Control type="text" name="motherName" />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Label style={{ color: "#7E7E7E", marginLeft: 2 }}>
                   City
                  </Form.Label>
                  <Form.Select name="city" >
                  <option hidden></option>
                  {City.map((val, id) => {
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
              <Row xs={1} md={2}>
              <Col >
                  <Form.Label style={{ color: "#7E7E7E", marginLeft: 2 }}>
                   Pincode
                  </Form.Label>
                  <Form.Control type="text" name="maritalStatus" />
                </Col>
                <Col >
                  <Form.Label style={{ color: "#7E7E7E", marginLeft: 2 }}>
                   Landmark
                  </Form.Label>
                  <Form.Control type="text" name="maritalStatus" />
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

export default AdressForm