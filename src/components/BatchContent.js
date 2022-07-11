import React from 'react'
import { Layout } from 'antd';
import { Breadcrumb } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import { Input } from 'antd';
import { Button } from 'antd';
import "./BatchContent.css";
import BatchListHeader from "./BatchListHeader";
import AddBatch from './AddBatch';
import { useState } from 'react';
import { useEffect } from 'react';

function BatchContent() {
  const [showModal, setshowModal] = useState(false)
  const [dataToLocal, setdataToLocal] = useState([])


  const handleClose=()=>{
    setshowModal(false)
  }
  // useEffect(() => {
  //   const getData=JSON.parse(localStorage.getItem("data"))
  //   console.log("getData",getData);
  //   // setdataToLocal(getData)
  // }, [])

  // to save data to local
useEffect(() => {
  if(dataToLocal.length>0){
  localStorage.setItem("data",JSON.stringify(dataToLocal))
  }
}, [dataToLocal])


//to get data from child and save it 
  const getDataFromAddBatch=(data)=>{
    console.log("Data From Child",data);
    const datacopy=[...dataToLocal]
    datacopy.push(data)
    setdataToLocal(datacopy)
  }
 

  return (
    <div >
      <Layout id='mainLayout'
        style={{
          // padding: "0 0 0 100px",
          marginTop:-600,
          marginLeft:100,
          
        }}
      >
        <Breadcrumb
          separator=""
          >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>
            &nbsp;
            <img src="./admin/Xnix-Line-Right Arrow.png" />
            &nbsp;Batch
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
            <p style={{ color: "#FAA81D", margin: 14 }}>Batch list</p>
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
                marginLeft: 10,
                marginTop: 10,
              }}
              onClick={()=>{setshowModal(true)}}
            >
              + New Batch
            </Button>
            {/* </div> */}
          </div>
          <div id="batchlist">
            <BatchListHeader
             dataToLocal={dataToLocal}/>
          </div>
        </Content>
      </Layout>
      <AddBatch
      showModal={showModal} 
      handleClose={handleClose}
      getDataFromAddBatch={getDataFromAddBatch}/>
    </div>
  )
}

export default BatchContent;