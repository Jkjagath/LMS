import React from "react";
import { Layout } from "antd";
import { Breadcrumb } from "antd";
import { Content } from "antd/lib/layout/layout";
import { Input } from "antd";
import { Button } from "antd";
import {useState} from "react"
// import "./MentorEmployeeList.css";
import MentorListHeader from "./MentorListHeader";
import BatchListInMentor from "./BatchListinMentor";
import MentorEmployeeTable from "./MentorEmployeeTable";
import AddMock from "./AddMock";

function MentorEmployeeList() {
const [ShowModal, setShowModal] = useState(false)
const handleClose=()=>{
  setShowModal(false)
}
  return (
    <div>
      <Layout
        style={{
          // padding: "0 0 0 100px",
          marginTop: -600,
          marginLeft: 100,
        }}
      >
        <Breadcrumb
          separator=""
          style={{
            margin: "10px",
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>
            &nbsp;
            <img src="./admin/Xnix-Line-Right Arrow.png" />
            &nbsp;Batch Name
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            &nbsp;
            <img src="./admin/Xnix-Line-Right Arrow.png" />
            &nbsp;Employee List
          </Breadcrumb.Item>
        </Breadcrumb>
        <Content
          className="site-layout-background"
          style={{
            padding: 0,
            margin: 0,
            minHeight: 280,
            height: 560,
            border: "none",
          }}
        >
          <div style={{ display: "flex"}}>
            <p style={{ color: "#FAA81D", paddingTop:12}}>
              Employee List (Batch ID)
            </p>
            <div>
              <Input.Search
                placeholder="input here"
                style={{
                  width: 400,
                  marginLeft:400,
                  marginTop:8,
                  // borderRadius: 8,
                }}
              />
            </div>
               <div class="dropdown" style={{marginLeft:20, marginTop:8}} >
                <button
                  class="btn btn-sm btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Download
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li>
                    <a class="dropdown-item" href="#">
                      Employees data
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Attendance data
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Mock data
                    </a>
                  </li>
                </ul>
              </div>
            <Button
              id="createmock"
              style={{
                backgroundColor: "#FAA81D",
                color: "#FFFFFF",
                borderRadius: 5,
                marginLeft:20,
                marginTop:8,
                paddingLeft: 5,
                width: 100,
              }}
              onClick={()=>{setShowModal(true)}}
            >
              Create Mock
            </Button>
            {/* <div id="newbatchdiv"> */}.{/* </div> */}
          </div>

          {/* <div id="batchlist"> */}
          <MentorEmployeeTable />
          <AddMock
          ShowModal={ShowModal}
          handleClose={handleClose}/>
          {/* </div> */}
        </Content>
      </Layout>
    </div>
  );
}

export default MentorEmployeeList;
