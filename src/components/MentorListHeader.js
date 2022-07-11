import { Space, Table, Tag, Button } from 'antd';
import { useState } from 'react';
import{EditTwoTone} from '@ant-design/icons';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
const { Column, ColumnGroup } = Table;
const data = [
  {
    key: '1',
    no: "01",
    mentorName: "Name1",
    employeeId: 'New York No. 1 Lake Park',
    emailId:"abc@gmail.com",
    skills: ['nice', 'developer'],

  },
  {
    key: '2',
    no: "01",
    mentorName: "Name1",
    employeeId: 'New York No. 1 Lake Park',
    emailId:"abc@gmail.com",
    skills: ['nice', 'developer'],

  },
  {
    key: '3',
    no: "01",
    mentorName: "Name1",
    employeeId: 'New York No. 1 Lake Park',
    emailId:"abc@gmail.com",
    skills: ['nice', 'developer'],

  },
];

const MentorListHeader = () => {

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
    <Column title="Mentor Name" dataIndex="mentorName" key="mentorName" />
    <Column title="Employee ID" dataIndex="employeeId" key="employeeId" />
    {/* <Column title="Skills" dataIndex="skills" key="skills" /> */}
    <Column
      title="Skills"
      dataIndex="skills"
      key="skills"
      render={(skills) => (
        <>
          {skills.map((val) => (
            <Tag color="blue" key={val}>
              {val}
            </Tag>
          ))}
        </>
      )}
    />
    <Column
      title="Action"
      key="action"
      render={(_, record) => (
        <Space size="middle">
        <Button type="link" style={{color:"black"}}>< EditOutlinedIcon fontSize="small"/></Button>
        <Button type="link"style={{color:"black"}}><DeleteIcon fontSize="small"/></Button>
        </Space>
      )}
    />
  </Table>
)
      };

export default MentorListHeader;