import { Image, Row, Col } from "antd";
import React ,{useState}from "react";
import "./loginpage.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import {
    Button,
  // FormControl,
  // InputLabel,
  // OutlinedInput,
  // TextField,
} from "@mui/material";
// import LoginPage from './LoginPage';
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
// import { Input, Space } from "antd";
// import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { useNavigate } from 'react-router-dom';
// import { Form } from 'react-bootstrap/Form';

function LoginPage() {

  const [Auth, setAuth] = useState({
    userName:"",
    passWord:""
  })


  const handleSubmit = (e) => {
    e.preventDefault();
  };

  let UpdateUserData=(event)=>{
    
    setAuth({
        ...Auth,
        [event.target.name]:event.target.value
    })


}
  const navigate=useNavigate()

  const navigateToAdmin=()=>{
    if(Auth.userName==="admin"){
    navigate("/MainDisplay")
    }
     if(Auth.userName==="mentor"){
      navigate("/Mentor")
    }
    if(Auth.userName==="employee"){
      navigate("/EmployeeHome")
    }
   
    // setAuth({
    //   userName: "",
    //   password: ""
    // })
  }



  return (
    <div id="mainDiv">
      <div className="Container" id="imagecontainer">
      <div  className="logdiv">
         
          <div
            id="loginDetails"
            style={{ height: "100%", width: "40%" }}
          >
                <div className="col-12">
              <img
                id="img3"
                src="./login/Artboard – 2@2x.png"
                className="img-fluid"
                alt="..."
              />
              </div>
           
            <h4>Login</h4>
            <br />
          
            <form onSubmit={handleSubmit}>
            <label id="inputLabels">Employee ID</label><br/>
            <input
              id="password"
              aria-label="Employee ID"
              name="userName"
              value={Auth.userName}
              onChange={(event)=>{UpdateUserData(event)}}
              style={{ borderRadius: 5 }}
            />
            <br />
            <br />
            <label id="inputLabels">Password</label><br/>
            <input id="password" style={{ borderRadius: 5 }} 
             name="passWord"
             value={Auth.password}
             onChange={(event)=>{UpdateUserData(event)}}/>
            </form>
            <br/>
            <div id="buttonDiv">
          <Button id="loginButton" variant="solid" onClick={navigateToAdmin}>LOGIN</Button>
          <Button id="cancelButton" variant="plain">CANCEL</Button>
          </div>
          <div id="linediv"></div>
          <div id="textdiv">
          <p style={{marginLeft:40}} >Copyright &copy;2018 Aleercio.com</p>
          <p style={{marginLeft:20}}>Terms & Conditions | Privacy policy</p>
          </div>
          </div>
          <div id="textdiv1">
          
            <p>Good things on<br/> your way!</p>
         
          </div>

        </div>
      </div>
    </div>
  );
}

export default LoginPage;
