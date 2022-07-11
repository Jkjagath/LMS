
import "./App.css";
import LoginPage from "./components/LoginPage";
import Admin from './components/Admin';
// import PageHeader from './components/PageHeader'
// import PageSider from './components/PageSider';
import PageContent from "./components/PageContent";
import MentorContent from "./components/MentorContent";
import RequestContent from './components/RequestContent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Demo from './components/Demo';
// import Demo1 from './components/Demo1';
import MainDisplay from './components/MainDisplay';
import Mentor from "./components/Mentor";
// import MentorListHeader from "./components/MentorListHeader";
// import BatchContent from "./components/BatchContent";
import MentorBatch from './components/MentorBatch';
import AttendanceModal from "./components/AttendanceModal";
import MentorEmployeeList from "./components/MentorEmployeeList";
import Dashboard from './components/Dashboard';
import EmployeeStepperForm from "./components/EmployeeStepperForm";
import {Container,Box,CssBaseline,Paper} from '@material-ui/core';
import EducationForm from "./components/EducationForm";
import { useState } from "react";
import DataComponent from "./components/DataComponent";
import ComponentA from "./components/ComponentA";
import PrimaryInfo from "./components/PrimaryInfo";
import SecondaryInfo from "./components/SecondaryInfo";
import AdressForm from "./components/AdressForm";
import BankDetailsForm from "./components/BankDetailsForm";
import TechnicalSkillsForm from "./components/TechnicalSkillsForm";
import ExperienceForm from "./components/ExperienceForm";
import ContactForm from "./components/ContactForm";
import EmployeeHome from "./components/EmployeeHome";
import EditPrimaryInfoPage from './components/EditPrimaryInfoPage';
import EditSecondaryInfoPage from "./components/EditSecondaryInfo";
import EditEducationDetails from "./components/EditEducationDetails";
import EditAddressDetails from "./components/EditAddressDetails";
import EditBankDetails from "./components/EditBankDetails";
import EditTechnicalDetails from "./components/EditTechnicalDetails";
import EditExperienceDetails from "./components/EditExperienceDetails";
import EditContactDetails from "./components/EditContactDetails";
import EditEmployeeProfile from "./components/EditEmployeeProfile";
import Chartfile from "./components/Chartfile";
import BatchContent from "./components/BatchContent";






function App() {
  const [State, setState] = useState('')


  return(
    <div>
    
      {/* <BrowserRouter>
     
      <Routes>
      <Route path='/' element={ <LoginPage/>}/>


      <Route path='/Mentor' element={ <Mentor/>}>
      <Route path='Dashboard' element={<Dashboard/>}/>
      <Route path='MentorBatch' element={<MentorBatch/>}/>
      </Route>

      <Route path='/MainDisplay' element={<MainDisplay/>}>
        <Route path='BatchContent' element={<BatchContent/>}/>
        <Route path='MentorContent' element={<MentorContent/>}/>
        <Route path='RequestContent' element={<RequestContent/>}/>
      </Route>


      <Route path='/MentorEmployeeList' element={<MentorEmployeeList/>}/>
      <Route path='/EmployeeHome' element={<EmployeeHome/>}/>
      <Route path='/PageContent' element={<PageContent/>}/>
      
      
     
     
      </Routes>
    </BrowserRouter> */}


<BrowserRouter>
<Mentor/>
<Routes>
<Route path='Dashboard' element={<Dashboard/>}/>
<Route path='MentorBatch' element={<MentorBatch/>}/>
<Route path='/MentorEmployeeList' element={<MentorEmployeeList/>}/>
</Routes>



</BrowserRouter>


{/* <Route path='/MainDisplay' element={<MainDisplay/>}/> */}
            {/* <Route path='/' element={<PageContent/>}/>
            <Route path='/MentorContent' element={<MentorContent/>}/>
            <Route path='/RequestContent' element={<RequestContent/>}/>
            <Route path='/' element={<Dashboard/>}/>
            <Route path='/MentorBatch' element={<MentorBatch/>}/>
            <Route path='/MentorEmployeeList' element={<MentorEmployeeList/>}/> */}

    {/* <BrowserRouter>
    <Mentor/>
    <Routes>
    <Route path='/' element={<Dashboard/>}/>
    <Route path='/MentorBatch' element={<MentorBatch/>}/>
    <Route path='/MentorEmployeeList' element={<MentorEmployeeList/>}/>
    </Routes>
    </BrowserRouter> */}


    {/* <CssBaseline/> */}
     {/* <Container component={Box} p={5} > */}
     {/* <Paper component={Box} p={3}> */}
    {/* <EmployeeStepperForm/> */}
    {/* </Paper> */}
    {/* </Container> */}
    {/*  */}
{/*  
    <BrowserRouter>
    <EmployeeHome/>
    <Routes>
    <Route path='/' element={<Dashboard/>}/> */}
    {/* <Route path="/EditEmployeeProfile" element={<EditEmployeeProfile/>}/> */}
    {/* </Routes>
    </BrowserRouter>  */}




    {/* <EmployeeHome/> */}
   

   </div>
  )
}

export default App;
