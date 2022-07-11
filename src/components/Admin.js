// import React, {useState} from "react";
// import "./Admin.css";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu } from "antd";
import "antd/dist/antd.css";
import { Input } from "antd";
import { Button } from "antd";
import { Icon, IconButton } from "@mui/material";
import React from "react";
// import BatchListHeader from "./BatchListHeader";
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import { Button } from 'antd';

const { Header, Content, Sider } = Layout;
// const items1 = ['1', '2', '3'].map((key) => ({
//   key,
//   label: `nav ${key}`,
// }));

const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
  (icon, index) => {
    const key = String(index + 1);
    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,
      children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
        };
      }),
    };
  }
);

// const changeView=()=>{
//   setView(false)
// }

const Admin = () => {
  const [view, setview] = useState(true)

    const changeView=()=>{
      setview(false)
      console.log(view);
    }
return(
  <div>
  <Layout>
    <Header className="header bg-white" style={{ height: 50 }}>
      <div className="logo" />

      <div id="logoutdiv">
        <Button id="logoutbutton">Logout</Button>
      </div>
      <div id="technoimg">
        <img className="img-fluid" src="./admin/logo1.jpg" alt="no Img" />
      </div>

      <div id="searchdiv">
        <Input.Search placeholder="input here" />
      </div>

      {/* <Menu  mode="horizontal"  /> */}
    </Header>
    <Layout>
      <Sider width={70} className="site-layout-background bg-white ">
        {/* <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{
            height: '100%',
            borderRight: 0,
          }}
          items={itms2}
        /> */}
        <>
          <Button id="batchimg"  >
            <p  style={{ marginTop: 37,marginLeft:-5, color: " #075575" }}>
              {/* <Link to={"/"}> */}
              Batch
              {/* </Link> */}
            </p>
          </Button>
          <Button id="mentorimg">
          <p style={{ marginTop: 37,marginLeft:-10, color: " #075575" }}>
             Mentor
            </p>
          </Button>

          <Button id="adduserimg">
          <p style={{ marginTop: 37,marginLeft:-12, color: " #075575" }}>
              Request
            </p>
          </Button>
        </>
      </Sider>
      <Layout
        style={{
          padding: "0 24px 24px",
        }}
      >
        {/* <Breadcrumb
          separator=""
          style={{
            margin: "16px 0",
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>
            &nbsp;
            <img src="./admin/Xnix-Line-Right Arrow.png" />
            &nbsp;List
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            &nbsp;
            <img src="./admin/Xnix-Line-Right Arrow.png" />
            &nbsp;App
          </Breadcrumb.Item>
        </Breadcrumb> */}
        <Content
          className="site-layout-background"
          style={{
            padding:0,
            margin: 0,
            minHeight: 280,
            height: 583,
          }}
        >
          {/* <div id="batchListHeader">
            <p style={{ color: "#FAA81D", margin: 14 }}>Batch list</p>
            <div id="searchdiv1">
              <Input.Search placeholder="input here" />
            </div>
           
            <Button
              id="newbatchbutton"
              style={{
                backgroundColor: "#FAA81D",
                color: "#FFFFFF",
                borderRadius: 5,
                marginLeft: 10,
                marginTop: 10,
              }}
            >
              + New Batch
            </Button>
          
          </div> */}
        </Content>
      </Layout>
    </Layout>
  </Layout>
  </div>
);
            }
export default Admin;