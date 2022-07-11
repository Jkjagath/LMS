import React, {useState}from 'react'
import { Col, Row } from 'antd';
import './EditInfoPage.css';
import {Form,Input} from 'antd';


function EditSecondaryInfoPage() {
    const [PrimaryInfo, setPrimaryInfo] = useState({})

    const style = {
        // background: '#0092ff',
        padding: '8px 0',
      };


  return (
    <div id='profileDiv'>
        <h3 id='formheading'>Secondary info</h3>
       <Row className='contentRow' gutter={[16, 24]}>
      <Col className="gutter-row" span={6}  >
      <Form.Item label="PAN No.">
        <Input style={{border:"none"}} />
      </Form.Item>
      </Col>
      <Col className="gutter-row" span={6}>
      <Form.Item label="Adhaar No.">
        <Input style={{border:"none"}} />
      </Form.Item>
      </Col>
      <Col className="gutter-row" span={6}>
      <Form.Item label="Father Name">
        <Input style={{border:"none"}} />
      </Form.Item>
      </Col>
      <Col className="gutter-row" span={6}>
      <Form.Item label="Mother Name">
        <Input style={{border:"none"}} />
      </Form.Item>
      </Col>
      <Col className="gutter-row" span={6} >
      <Form.Item  label="Spouse Name">
        <Input  style={{border:"none", background:"white"}} />
      </Form.Item>
      </Col>
      <Col className="gutter-row" span={6}>
      <Form.Item label="Passport No.">
        <Input style={{border:"none"}} />
      </Form.Item>
      </Col>
      <Col className="gutter-row" span={6}>
      <Form.Item label="Marital Status">
        <Input style={{border:"none"}} />
      </Form.Item>
      </Col>
    </Row>
    </div>
  )
}

export default EditSecondaryInfoPage