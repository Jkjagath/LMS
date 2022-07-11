import React, {useState}from 'react'
import { Col, Row } from 'antd';
import './EditInfoPage.css';
import {Form,Input} from 'antd';


function EditEducationDetails() {
    const [PrimaryInfo, setPrimaryInfo] = useState({})

    const style = {
        // background: '#0092ff',
        padding: '8px 0',
      };


  return (
    <div id='profileDiv'>
        <h3 id='formheading'>Education details</h3>
       <Row className='contentRow' gutter={[16, 24]}>
      <Col className="gutter-row" span={6}  >
      <Form.Item label="Education Type">
        <Input style={{border:"none"}} />
      </Form.Item>
      </Col>
      <Col className="gutter-row" span={6}>
      <Form.Item label="Year Of Passing">
        <Input style={{border:"none"}} />
      </Form.Item>
      </Col>
      <Col className="gutter-row" span={6}>
      <Form.Item label="Percentage(%)">
        <Input style={{border:"none"}} />
      </Form.Item>
      </Col>
      <Col className="gutter-row" span={6}>
      <Form.Item label="University Name">
        <Input style={{border:"none"}} />
      </Form.Item>
      </Col>
      <Col className="gutter-row" span={6} >
      <Form.Item  label="Institute Name">
        <Input  style={{border:"none", background:"white"}} />
      </Form.Item>
      </Col>
      <Col className="gutter-row" span={6}>
      <Form.Item label="Specialization">
        <Input style={{border:"none"}} />
      </Form.Item>
      </Col>
      <Col className="gutter-row" span={6}>
      <Form.Item label="State">
        <Input style={{border:"none"}} />
      </Form.Item>
      </Col>
    </Row>
    </div>
  )
}

export default EditEducationDetails