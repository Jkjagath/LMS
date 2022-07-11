import React, {useState}from 'react'
import { Col, Row } from 'antd';
import './EditInfoPage.css';
import {Form,Input} from 'antd';


function EditPrimaryInfoPage() {
    const [PrimaryInfo, setPrimaryInfo] = useState({})

    const style = {
        // background: '#0092ff',
        padding: '8px 0',
      };


  return (
    <div id='profileDiv'>
        <h3 id='formheading'>Primary info</h3>
       <Row className='contentRow' gutter={[16, 24]}>
      <Col className="gutter-row" span={6} >
      <Form.Item label="Employee ID">
        <Input style={{border:"none"}} />
      </Form.Item>
      </Col>
      <Col className="gutter-row" span={6}>
      <Form.Item label="Employee Name">
        <Input style={{border:"none"}} />
      </Form.Item>
      </Col>
      <Col className="gutter-row" span={6}>
      <Form.Item label="Date Of Joining">
        <Input style={{border:"none"}} />
      </Form.Item>
      </Col>
      <Col className="gutter-row" span={6}>
      <Form.Item label="Date of Birth">
        <Input style={{border:"none"}} />
      </Form.Item>
      </Col>
      <Col className="gutter-row" span={6} >
      <Form.Item  label="Salary">
        <Input disabled={true} style={{border:"none", background:"white"}} value={"--"}/>
      </Form.Item>
      </Col>
      <Col className="gutter-row" span={6}>
      <Form.Item label="Blood Group">
        <Input style={{border:"none"}} />
      </Form.Item>
      </Col>
      <Col className="gutter-row" span={6}>
      <Form.Item label="Designation">
        <Input style={{border:"none"}} />
      </Form.Item>
      </Col>
      <Col className="gutter-row" span={6}>
      <Form.Item label="Gender">
        <Input style={{border:"none"}} />
      </Form.Item>
      </Col>
      <Col className="gutter-row" span={6} >
      <Form.Item label="Nationality">
        <Input style={{border:"none"}} />
      </Form.Item>
      </Col>
      <Col className="gutter-row" span={6}>
      <Form.Item label="Employee Status">
        <Input disabled={true} style={{border:"none", background:"white"}} value={"--"} />
      </Form.Item>
      </Col>
    </Row>
    </div>
  )
}

export default EditPrimaryInfoPage