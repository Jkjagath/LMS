import React, {useState}from 'react'
import { Col, Row } from 'antd';
import './EditInfoPage.css';
import {Form,Input} from 'antd';


function EditExperienceDetails() {
    const [PrimaryInfo, setPrimaryInfo] = useState({})

    const style = {
        // background: '#0092ff',
        padding: '8px 0',
      };


  return (
    <div id='profileDiv'>
        <h3 id='formheading'>Experience</h3>
       <Row className='contentRow' gutter={[16, 24]}>
      <Col className="gutter-row" span={6}  >
      <Form.Item label="Date Of Joining">
        <Input style={{border:"none"}} />
      </Form.Item>
      </Col>
      <Col className="gutter-row" span={6}>
      <Form.Item label="Year Of Experience">
        <Input style={{border:"none"}} />
      </Form.Item>
      </Col>
      <Col className="gutter-row" span={6}>
      <Form.Item label="Company Name">
        <Input style={{border:"none"}} />
      </Form.Item>
      </Col>
      <Col className="gutter-row" span={6}>
      <Form.Item label="Designation">
        <Input style={{border:"none"}} />
      </Form.Item>
      </Col>
    </Row>
    </div>
  )
}

export default EditExperienceDetails