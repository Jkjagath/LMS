import { Space, Table, Tag, Button, Menu, message } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { WarningOutlined } from "@ant-design/icons";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
// import Button from 'react-bootstrap/Button';
import { Dropdown } from "antd";
import AttendanceModal from "./AttendanceModal";
import MentorEmployeeList from "./MentorEmployeeList";
import MockRatingModal from "./MockRartingModal";
import ChangeStatusModal from "./ChangeStatusModal";
// import Dropdown from 'react-dropdown';
// import 'react-dropdown/style.css';
//data to display on table
const { Column, ColumnGroup } = Table;
const data = [
  {
    key: "1",
    no: "01",
    employeeId: "Name1",
    employeeName: "New York No. 1 Lake Park",
    mocksTaken: "abc@gmail.com",
    attendance: "abc@gmail.com",
    
  },
  {
    key: "2",
    no: "01",
    batchId: "Name1",
    batchName: "New York No. 1 Lake Park",
    technologies: "abc@gmail.com",
    startDate: "abc@gmail.com",
    endDate: "abc@gmail.com",
    
  },
  {
    key: "3",
    no: "01",
    batchId: "Name1",
    batchName: "New York No. 1 Lake Park",
    technologies: "abc@gmail.com",
    startDate: "abc@gmail.com",
    endDate: "abc@gmail.com",
   
  }
    
];
const mockRatingMenu = (
  <Menu
    // onClick={handleMenuClick}
    items={[
      { 
        label: "Mock 1 Excelent" ,
        rating:"Excelent",
        key: "1",
      },
      {
        label: "Mock 2 Good",
        key: "2",
      },
      {
        label: "Mock 3 Above Average",
        key: "3",
      },
    ]}
  />
);

//data to display on dropdown
const onClick = ({ label }) => {
  message.info(`Click on item ${label}`);

  // return key
}
const menu = (
  <Menu
    // onClick={handleMenuClick}
    onClick={onClick}

    items={[
      {
        label: "Absconded",

        key: "1",
      },
      {
        label: "Terminated",
        key: "2",
      },
      {
        label: "Active",
        key: "3",
      },
    ]}
  />
);



const MentorEmployeeTable = () => {


  const options = [
    "Active","Terminated","Absconded"
  ];
  const defaultOption = options[0]



  const [ShowStatusModal, setShowStatusModal] = useState(false)

const handleChange=()=>{

}
  //function to execute checkbox
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
  const [showModal, setshowModal] = useState(false);

  const handleClose = () => {
    setshowModal(false);
    setShowStatusModal(false)
  };

  let navigate = useNavigate();
  let navigateToEmployeeList = () => {
    navigate("/MentorEmployeeList");
  };

  return (
    <div>
      <Table rowSelection={rowSelection} dataSource={data}>
        <Column title="No." dataIndex="no" key="no" />
        <Column title="Employee ID" dataIndex="employeeId" key="employeeId" />
        <Column title="Employee Name" dataIndex="employeeName" key="employeeName" />
        <Column title="Mocks Taken"dataIndex="mocksTaken" key="mocksTaken"/>
        <Column
        title="Mock Ratings"
        dataIndex="mockRating"
        key="mockRating"
        render={(_, record) => (
          <Space size="middle">
            {/* <WarningOutlined /> */}
            <Dropdown overlay={mockRatingMenu}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  <img style={{cursor:"pointer", height:"50px",width:"50px"}} src='./admin/caution.png'  />
                </Space>
              </a>
            </Dropdown>
            </Space>
        )}
      />
        <Column title="Attendance" dataIndex="attendance" key="attendance" />
        <Column title="Status" dataIndex="status" key="status" render={(_, record) => (
  <Space size="middle">
    {/* <WarningOutlined /> */}
    <Dropdown overlay={menu} trigger={['click']} placement="bottomRight" arrow >
      <a onClick={() =>setShowStatusModal(true)}>
        <Space>
         Active
        </Space>
      </a>
    </Dropdown>
    </Space>
)} />
        <Column
        title=""
        dataIndex="batchStrength"
        key="batchStrength"
        render={(_, record) => (
          <Space size="middle">
            {/* <Button type="link" style={{color:"black"}}><WarningTwoTone  /></Button> */}
            <Button variant="outline-info" onClick={()=>setshowModal(true)} style={{border:"none"}} >Give Rating</Button>{" "}
            {/* <Button type="link"  onClick={navigateToEmployeeList}> */}
              <img style={{cursor:"pointer"}} onClick={navigateToEmployeeList} src="./admin/Xnix-Line-Right Arrow.png" />
            {/* </Button> */}
          </Space>
        )}
      />
      </Table>
      <MockRatingModal showModal={showModal} handleClose={handleClose}  />
      <ChangeStatusModal ShowStatusModal={ShowStatusModal} handleClose={handleClose}/>
    </div>
  );
};

export default MentorEmployeeTable;
