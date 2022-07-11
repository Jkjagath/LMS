import React from 'react'
import { Layout } from 'antd';
import { Breadcrumb } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import { Input } from 'antd';
import "./PageContent.css";
import RequestListHeader from './RequestListHeader';

function RequestContent() {
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
            margin: "16px ",
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>
            &nbsp;
            <img src="./admin/Xnix-Line-Right Arrow.png" />
            &nbsp;Request List
          </Breadcrumb.Item>
        
        </Breadcrumb>
        <Content
          className="site-layout-background"
          style={{
            padding: 0,
            margin: 0,
            minHeight: 280,
            height: 550,
            border:"none"
          }}
        >
          <div id="batchListHeader">
            <p style={{ color: "#FAA81D", margin: 14 }}>Request list</p>
            <div id="searchdiv1">
              <Input.Search placeholder="input here" />
            </div>
            {/* <div id="newbatchdiv"> */}
            {/* <Button
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
            </Button> */}
            {/* </div> */}
          </div>
          <div id="batchlist">
            <RequestListHeader/>
          </div>
        </Content>
      </Layout>
    </div>
  )
}

export default RequestContent