import { Space, Table, Tag } from 'antd';
import { useState } from 'react';
const { Column, ColumnGroup } = Table;
const data = [
  {
    key: '1',
    no: "01",
    employeeId:"123",
    employeeName: "Name1",
    yop: '2022',
    percentage:"35%",
    experience:"2 years",
    contactNo:"0987654321",

  },
  {
    key: '2',
    no: "01",
    employeeId:"123",
    employeeName: "Name1",
    yop: '2022',
    percentage:"35%",
    experience:"2 years",
    contactNo:"0987654321",
  },
  {
    key: '3',
    no: "01",
    employeeId:"123",
    employeeName: "Name1",
    yop: '2022',
    percentage:"35%",
    experience:"2 years",
    contactNo:"0987654321",
  },
];

const RequestListHeader = () => {

  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const onSelectChange = (newSelectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return(
  <Table   rowSelection={rowSelection}  dataSource={data}>
    <Column title="No." dataIndex="no" key="no"/>
    <Column title="Employee ID" dataIndex="employeeId" key="employeeId" />
    <Column title="Employee Name" dataIndex="employeeName" key="employeeName" />
    <Column title="YOP" dataIndex="yop" key="yop" />
    <Column title="Percentage" dataIndex="percentage" key="percentage" />
    <Column title="Experience" dataIndex="experience" key="experience" />
    <Column title="Contact No." dataIndex="contactNo" key="contactNo" />
    
    <Column
      title="Action"
      key="action"
      render={(_, record) => (
        <Space size="middle">
         <button type="button" class="btn btn-outline-success btn-sm">Approve</button>
         <button type="button" class="btn btn-outline-danger btn-sm">Reject</button>
        </Space>
      )}
    />
  </Table>
)
      };

export default RequestListHeader;