import { Layout, Button, Dropdown } from "antd";
import "./Mentor.css";
import { Link } from "react-router-dom";
import { AudioOutlined } from "@ant-design/icons";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import { Menu, message, Space, Tooltip } from "antd";
import { Avatar, Image } from "antd";
import { Divider } from "antd";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import ResetPassword from "./ResetPassword";
import Dashboard from './Dashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EditEmployeeProfile from "./EditEmployeeProfile";
const { Header, Footer, Sider, Content } = Layout;

const EmployeeHome = () => {

// const navigate=useNavigate()
// let navigateToEditEmployeeProfile = () => {
//   navigate("/EditEmployeeProfile");
// };

const [showEdit, setshowEdit] = useState(false)

const showEditLayout=()=>{
  setshowEdit(true)
}

const [ShowResetPassowrd, setShowResetPassowrd] = useState(false)
  const onClick = ({ key }) => {
    if(key==="2"){
    setShowResetPassowrd(true)
    }
    
  }
  const handleHideResetPassowrd=()=>{
    setShowResetPassowrd(false)
  }


  const menu = (
    <Menu
    onClick={onClick}
      items={[
        {
          label:<p onClick={showEditLayout} >Profile</p>,
          key: "1",
        },
        {
          label: "Change Password",
          key: "2",

        },
        {
          label: "Logout",
          key: "3",
        },
      ]}
    />
  );

  return (
    <>
      <Layout breakpoint="lg">
        <Header style={{ height: 50}} className="header bg-white">
          <div id="logoutdiv" >
            <Divider style={{ height: 30 }} type="vertical" />
            <Avatar
              src={<img src="./mentor/images (1).jpg" style={{ width: 32 }} />}
            />
            <Dropdown overlay={menu} trigger={['click']}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  <a style={{color:"black"}}>Mr. DeadPool</a>
                  <DownOutlined style={{color:"black"}} />
                </Space>
              </a>
            </Dropdown>
          </div>

          <div id="technoimg">
            <img className="img-fluid" src="./admin/logo1.jpg" alt="no Img" />
          </div>

          <div id="searchdiv">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              style={{
                backgroundColor: "#0000000A",
              }}
            />
          </div>
        </Header>
      </Layout>
      <Layout>
        <Sider
          className="site-layout-background"
          width={80}
          breakpoint="lg"
          collapsedWidth="0"
          style={{ height: 600, border: "none", marginTop: 1,position:"fixed"}}
        >
          <div id="mentorbuttonsDiv">  
            {/* <Link to={"./DashBoard"}> */}
            <Button id="dashBoard">
              <p style={{ marginTop: 37, marginLeft: -10, color: " #075575", fontSize:12 }}>
                Dashboard
              </p>
            </Button>
            {/* </Link> */}
          </div>
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>

        {/* <BrowserRouter> */}
        {/* <Routes> */}
        {/* <Route path='/' element={<Dashboard/>}/> */}
        {/* <Route path="/EditEmployeeProfile" element={<EditEmployeeProfile/>}/> */}
        {/* </Routes> */}
        {/* </BrowserRouter> */}
        {showEdit? <EditEmployeeProfile/>:<Dashboard/>}
        </Layout>
              <ResetPassword
             ShowResetPassowrd={ShowResetPassowrd}
             handleHideResetPassowrd={handleHideResetPassowrd} />
      </Layout>
    </>
  );
};

export default EmployeeHome;
