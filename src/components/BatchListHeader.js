import React, { useState, useEffect } from "react";
import { Checkbox, Row } from "antd";
import { Col } from "antd";
import AddBatch from "./AddBatch";
import { padding } from "@mui/system";
// import type { CheckboxChangeEvent } from 'antd/es/checkbox';

let getData = () => {
  let data = JSON.parse(localStorage.getItem("data"));
  return data;
};

function BatchListHeader(props) {
  const [batchData, setbatchData] = useState([getData()]);
  const [tableData, settableData] = useState([]);
  console.log("props", props);
  // setbatchData(props)

  console.log(
    "props data",
    props.dataToLocal.map((val, id) => {
      return val.technologies.split(" ");
    })
  );

  // useEffect(() => {
  //   let dataFromLocal=[...batchData]
  //   dataFromLocal.push(JSON.parse(localStorage.getItem("data")))
  //   console.log("dataFromLocal",dataFromLocal);
  //   setbatchData(dataFromLocal)
  //   },[])

  useEffect(() => {
    let dataCopy = [...tableData];
    dataCopy.push(props);
    settableData(dataCopy);
  }, [batchData]);

  console.log("batchData", batchData);
  console.log("tableData", tableData);

  return (
    <div>
      <div
        id="listHeader"
        style={{
          height: 40,
          backgroundColor: "#E9EEF7",
          color: "#0D0D0D",
          font: "normal normal 600 18px/24px ",
        }}
      >
        <Row style={{ alignContent: "center", paddingTop: 10 }}>
          <Col span={2}>
            {" "}
            <Checkbox style={{ paddingLeft: 10 }}></Checkbox>
          </Col>
          <Col span={2}>No.</Col>
          <Col span={2}>Batch ID</Col>
          <Col span={3}>Batch Name</Col>
          <Col span={3}>Mentor Name</Col>
          <Col style={{alignItems:"center"}} span={3}>Technologies</Col>
          <Col span={2}>Start Date</Col>
          <Col span={2}>End Date</Col>
          <Col span={2}>Status</Col>
          <Col span={3}>Action</Col>
        </Row>
      </div>
      <div
        id="listHeader"
        style={{
          height: 40,
          color: "#0D0D0D",
          font: "normal normal 600 18px/24px ",
        }}
      >
        <Row style={{ alignContent: "center", paddingTop: 10 }}>
          
          {props.dataToLocal.map((val, id) => {
            return (
              <>
              <Col span={2}>
            {" "}
            <Checkbox style={{ paddingLeft: 10 }}></Checkbox>
          </Col>
                <Col span={2}>{id+1}</Col>
                <Col span={2}>{"TE"+Math.floor((Math.random()*1000)+1)}</Col>
                <Col span={3}>{val.batchName}</Col>
                <Col span={3}>{val.mentorName}</Col>
                <Col span={3}>{val.technologies.split(" ").map((val,id)=>{return <div key={id} style={{width:50, height:20, backgroundColor:"#086288",borderRadius:10, display:"flex", justifyContent:"center" ,margin:5 }}><p style={{fontSize:10,color:"#FFFFFF"}}>{val}</p></div>})}</Col>
                <Col span={2}>{val.startDate}</Col>
                <Col span={2}>{val.endDate}</Col>
                <Col span={2}>Status</Col>
                <Col span={2}>Action</Col>
              </>
            );
          })}
          {/* <Col span={3}>No.</Col>
      <Col span={3}>Batch ID</Col>
      <Col span={3}>Batch Name</Col>{val.technologies}
      <Col span={3}>Mentor Name</Col>
      <Col span={2}>Technologies</Col>
      <Col span={2}>Start Date</Col>
      <Col span={2}>End Date</Col>
      <Col span={2}>Status</Col>
      <Col span={2}>Action</Col> */}
        </Row>
      </div>
    </div>
  );
}

export default BatchListHeader;
