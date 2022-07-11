import { RetweetOutlined } from "@ant-design/icons";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  makeStyles,
} from "@material-ui/core";
// import{ MuiStepIcon-active as MuiStepIconActive} from "@material-ui/core";
import React from "react";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./EmployeeStepperForm.css";
import { Collapse, Layout } from "antd";
import PrimaryInfo from "./PrimaryInfo";
import SecondaryInfo from "./SecondaryInfo";
import EducationForm from "./EducationForm";
import AdressForm from "./AdressForm";
import BankDetailsForm from "./BankDetailsForm";
import TechnicalSkillsForm from "./TechnicalSkillsForm";
import ExperienceForm from "./ExperienceForm";
import ContactForm from "./ContactForm";
import { Footer } from "antd/lib/layout/layout";
import StepperSubmitModal from "./StepperSubmitModal";
const { Panel } = Collapse;

//to make steps dynamic we take alla steps in an array
function getSteps() {
  return [
    "Primary Info",
    "Secondary Info",
    "Education Details",
    "Address Details",
    "Bank Details",
    "Technical Skills",
    "Experience",
    "Contact",
  ];
}

function EmployeeStepperForm() {
  //to make deafult step dynamic
  const [activeStep, setactiveStep] = useState(0);
  //store the function which contains array of steps into an variable
  const steps = getSteps();

  //to move to next step
  const handleNext = () => {
    setactiveStep(activeStep + 1);
  };
  //to move to previous step
  const handleBack = () => {
    setactiveStep(activeStep - 1);
  };

  function getStepsContent(Step) {
    switch (Step) {
      case 0:
        return <PrimaryInfo />;
      case 1:
        return <SecondaryInfo />;
      case 2:
        return <EducationForm />;
      case 3:
        return <AdressForm />;
      case 4:
        return <BankDetailsForm />;
      case 5:
        return <TechnicalSkillsForm />;
      case 6:
        return <ExperienceForm />;
      case 7:
        return <ContactForm />;
      default:
        return "Unknown Case";
    }
  }

  const [Show, setShow] = useState(false)

  const handleClose=()=>{
    setShow(false)
  }

  return (
    <div>
      <div id="stepperDiv">
        <Stepper activeStep={activeStep} connector={null}>
          {steps.map((val, index) => {
            return (
              <Step key={index}>
                <StepLabel>
                  {val}
                  <br />
                  {activeStep === index ? <div className="dummyDiv" /> : ""}
                </StepLabel>
              </Step>
            );
          })}
        </Stepper>
      </div>

      {activeStep === 8 ? (
        <Typography variant="h3">Thank You</Typography>
      ) : (
        <>
          {getStepsContent(activeStep)}
          <div id="btnMainDiv">
            <Button
              id="navBtn"
              variant="contained"
              disabled={activeStep === 0}
              size="medium"
              onClick={handleBack}
              style={{ marginLeft: "8px" }}
            >
              Previous
            </Button>
            {activeStep === 7 ?  <Button
              id="navBtn"
              variant="contained"
              size="medium"
              style={{ marginLeft: "290px" }}
              onClick={()=>setShow(true)}>
             Submit
            </Button>:<Button
              id="navBtn"
              variant="contained"
              size="medium"
              onClick={handleNext}
              style={{ marginLeft: "290px" }}>
              Next
            </Button>}
            
          </div>
        </>
      )}
      <StepperSubmitModal
      Show={Show}
      handleClose={handleClose}/>
    </div>
  );
}

export default EmployeeStepperForm;
