import React, {useState}from 'react'
import { Col, Row } from 'antd';
import './EditInfoPage.css';
import {Form,Input} from 'antd';


function EditContactDetails() {
    const [PrimaryInfo, setPrimaryInfo] = useState({})

    const style = {
        // background: '#0092ff',
        padding: '8px 0',
      };


  return (
    <div id='profileDiv'>
        <h3 id='formheading'>Contact</h3>
       <Row className='contentRow' gutter={[16, 24]}>
      <Col className="gutter-row" span={6}  >
      <Form.Item label="Contact Type">
        <Input style={{border:"none"}} />
      </Form.Item>
      </Col>
      <Col className="gutter-row" span={6}>
      <Form.Item label="Contact Number">
        <Input style={{border:"none"}} />
      </Form.Item>
      </Col>
    </Row>
    </div>
  )
}

export default EditContactDetails