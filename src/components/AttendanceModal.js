import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Table, Space } from 'antd';
import Column from 'antd/lib/table/Column';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';

function AttendanceModal(props) {
  
 const handleHide=()=>{
props.handleClose()
 }

 const data = [
    {
      key: '1',
      no: "01",
      emplyoeeId: "Name1",
      employeeName: 'New York No. 1 Lake Park',
     
      
  
    },
    {
      key: '2',
      no: "01",
      emplyoeeId: "Name1",
      employeeName: 'New York No. 1 Lake Park',
      
    },
    {
      key: '3',
      no: "01",
      emplyoeeId: "Name1",
      employeeName: 'New York No. 1 Lake Park',
      
  
    },
  ];

 const [selectedRowKeys, setSelectedRowKeys] = useState([]);
 const onSelectChange = (newSelectedRowKeys) => {
   console.log('selectedRowKeys changed: ', selectedRowKeys);
   setSelectedRowKeys(newSelectedRowKeys);
 };
 const rowSelection = {
   selectedRowKeys,
   onChange: onSelectChange,
 };



 const IOSSwitch = styled((props) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
  ))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    '& .MuiSwitch-switchBase': {
      padding: 0,
      margin: 2,
      transitionDuration: '300ms',
      '&.Mui-checked': {
        transform: 'translateX(16px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
          opacity: 1,
          border: 0,
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: 0.5,
        },
      },
      '&.Mui-focusVisible .MuiSwitch-thumb': {
        color: '#33cf4d',
        border: '6px solid #fff',
      },
      '&.Mui-disabled .MuiSwitch-thumb': {
        color:
          theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[600],
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
      },
    },
    '& .MuiSwitch-thumb': {
      boxSizing: 'border-box',
      width: 22,
      height: 22,
    },
    '& .MuiSwitch-track': {
      borderRadius: 26 / 2,
      backgroundColor: theme.palette.mode === 'light' ? '#c41d1d' : '#c41d1d',
      opacity: 1,
      transition: theme.transitions.create(['background-color'], {
        duration: 500,
      }),
    },
  }));

 
  return (
    <>
      <Modal
        size="lg"
        show={props.showModal}
        onHide={handleHide}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
           Attendance for 
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Table    dataSource={data}>
    <Column title="No." dataIndex="no" key="no"/>
    <Column title="Employee ID" dataIndex="mentorName" key="mentorName" />
    <Column title="Employee Name" dataIndex="employeeId" key="employeeId" />
    <Column
      title="Attendance"
      key="action"
      render={(_, record) => (
        <Space size="middle">
           <FormControlLabel
            label="M"
        control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
        
      />
       <FormControlLabel
        label="N"
        control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
        
      />
        </Space>
      )}
    />
  </Table>
        </Modal.Body>
        <Modal.Footer>
          
          <Button variant="primary" onClick={handleHide}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AttendanceModal;