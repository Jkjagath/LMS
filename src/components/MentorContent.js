import React from 'react'
import { Layout } from 'antd';
import { Breadcrumb } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import { Input } from 'antd';
import { Button } from 'antd';
import "./MentorContent.css";
import MentorListHeader from './MentorListHeader';

function MentorContent() {
  return (
    <div>
         <Layout id='mainLayout'
        style={{
          // padding: "0 0 0 100px",
          marginTop:-610,
          marginLeft:100,
          
        }}
      >
        <Breadcrumb
          separator=""
          style={{
            margin:"10px",
           
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>
            &nbsp;
            <img src="./admin/Xnix-Line-Right Arrow.png" />
            &nbsp;Mentors
          </Breadcrumb.Item>
        
        </Breadcrumb>
        <Content
          className="site-layout-background"
          style={{
            padding: 0,
            margin: 0,
            minHeight: 280,
            height: 560,
            border:"none"
          }}
        >
          <div id="batchListHeader">
            <p style={{ color: "#FAA81D", margin: 14 }}>Mentors list</p>
            <div id="searchdiv1">
              <Input.Search placeholder="input here" />
            </div>
            {/* <div id="newbatchdiv"> */}
            <Button
              id="newbatchbutton"
              style={{
                backgroundColor: "#FAA81D",
                color: "#FFFFFF",
                borderRadius: 5,
                marginLeft: 15,
                marginTop: 10,
                paddingLeft:5,
                width:100
              }}
            >
              +New Mentor
            </Button>
            {/* </div> */}
          </div>
          {/* <div id="batchlist"> */}
            <MentorListHeader/>
          {/* </div> */}
        </Content>
      </Layout>
    </div>
  )
}

export default MentorContent