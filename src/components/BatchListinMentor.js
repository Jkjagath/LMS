import { Space, Table, Tag, Button, Menu } from "antd";
import { useState} from "react";
import { useNavigate } from 'react-router-dom';
import { WarningOutlined } from "@ant-design/icons";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
// import Button from 'react-bootstrap/Button';
import { Dropdown } from "antd";
import AttendanceModal from './AttendanceModal';
import MentorEmployeeList from './MentorEmployeeList';



//data to display on table
const { Column, ColumnGroup } = Table;
const data = [
  {
    key: "1",
    no: "01",
    batchId: "Name1",
    batchName: "New York No. 1 Lake Park",
    technologies: "abc@gmail.com",
    startDate: "abc@gmail.com",
    endDate: "abc@gmail.com",
    status: "abc@gmail.com",

    batchStrength: "10",
  },
  {
    key: "2",
    no: "01",
    batchId: "Name1",
    batchName: "New York No. 1 Lake Park",
    technologies: "abc@gmail.com",
    startDate: "abc@gmail.com",
    endDate: "abc@gmail.com",
    status: "abc@gmail.com",

    batchStrength: "10",
  },
  {
    key: "3",
    no: "01",
    batchId: "Name1",
    batchName: "New York No. 1 Lake Park",
    technologies: "abc@gmail.com",
    startDate: "abc@gmail.com",
    endDate: "abc@gmail.com",
    status: "abc@gmail.com",
    batchStrength: "10",
  },
];


//data to display on dropdown
const menu = (
  <Menu
    // onClick={handleMenuClick}
    items={[
      {
        label: "Initial Strength  10",

        key: "1",
      },
      {
        label: "Initial Strength  10",
        key: "2",
      },
      {
        label: "Initial Strength  10",
        key: "3",
      },
    ]}
  />
);

const BatchListInMentor = () => {
  
  
  //funstion to execute checkbox
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };


//
const [showModal, setshowModal] = useState(false)


const handleClose =()=>{
  setshowModal(false)
}

let navigate=useNavigate()
let navigateToEmployeeList=()=>{
 navigate("/MentorEmployeeList")
 }

  return (
    <div>
    <Table rowSelection={rowSelection} dataSource={data}>
      <Column title="No." dataIndex="no" key="no" />
      <Column title="Batch ID" dataIndex="batchId" key="batchId" />
      <Column title="Batchn Name" dataIndex="batchName" key="batchName" />
      <Column title="Technologies" dataIndex="technologies" key="technologies"/>
      <Column title="Start Date" dataIndex="startDate" key="startDate" />
      <Column title="End Date" dataIndex="endDate" key="endDate" />
      <Column title="Status" dataIndex="status" key="status" />
      <Column
        title="Batch Strength"
        dataIndex="batchStrength"
        key="batchStrength"
        render={(_, record) => (
          <Space size="middle">
            {/* <WarningOutlined /> */}
            <Dropdown overlay={menu}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  <img style={{cursor:"pointer", height:"50px",width:"50px"}} src='./admin/caution.png'  />
                </Space>
              </a>
            </Dropdown>
            {/* <Button type="link" style={{color:"black"}}><WarningTwoTone  /></Button> */}
            <Button variant="outline-info" onClick={()=>setshowModal(true)} >Attendance</Button>{" "}
            {/* <Button type="link"  onClick={navigateToEmployeeList}> */}
              <img style={{cursor:"pointer"}} onClick={navigateToEmployeeList} src="./admin/Xnix-Line-Right Arrow.png" />
            {/* </Button> */}
          </Space>
        )}
      />
     
    </Table>
    <AttendanceModal
  showModal={showModal}
  handleClose={handleClose}/>
    </div>
  );
};

export default BatchListInMentor;
