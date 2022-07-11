import React, {useState}from 'react'
import { Col, Row } from 'antd';
import './EditInfoPage.css';
import {Form,Input} from 'antd';


function EditTechnicalDetails() {
    const [PrimaryInfo, setPrimaryInfo] = useState({})

    const style = {
        // background: '#0092ff',
        padding: '8px 0',
      };


  return (
    <div id='profileDiv'>
        <h3 id='formheading'>Technical Skills</h3>
       <Row className='contentRow' gutter={[16, 24]}>
      <Col className="gutter-row" span={8}  >
      <Form.Item label="Skill Type">
        <Input style={{border:"none"}} />
      </Form.Item>
      </Col>
      <Col className="gutter-row" span={8}>
      <Form.Item label="Skill rating">
        <Input style={{border:"none"}} />
      </Form.Item>
      </Col>
      <Col className="gutter-row" span={8}>
      <Form.Item label="Year Of Experience(over Skills)">
        <Input style={{border:"none"}} />
      </Form.Item>
      </Col>
      
    </Row>
    </div>
  )
}

export default EditTechnicalDetails