import React from 'react'
import { Layout } from 'antd';
import { Breadcrumb } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import { Input } from 'antd';
import { Button } from 'antd';
import "./MentorContent.css";
import MentorListHeader from './MentorListHeader';
import BatchListInMentor from './BatchListinMentor';
import { useNavigate } from 'react-router-dom';
function MentorBatch() {

 
  return (
    <div>
         <Layout
        style={{
          // padding: "0 0 0 100px",
          marginTop:-600,
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
            &nbsp;Batch List
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
          <div style={{display:"flex"}} >
            <p style={{ color: "#FAA81D", margin: 14 }}>Batch list</p>
            <div >
              <Input.Search placeholder="input here" style={{width:400, marginLeft:750, marginTop:10, borderRadius:3}} />
            </div>
            {/* <div id="newbatchdiv"> */}
           
            {/* </div> */}
          </div>
          {/* <div id="batchlist"> */}
            <BatchListInMentor/>
          {/* </div> */}
        </Content>
      </Layout>
    </div>
  )
}

export default MentorBatch;