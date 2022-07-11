import React, {useState}from 'react'
import { Col, Row } from 'antd';
import './EditInfoPage.css';
import {Form,Input} from 'antd';


function EditBankDetails() {
    const [PrimaryInfo, setPrimaryInfo] = useState({})

    const style = {
        // background: '#0092ff',
        padding: '8px 0',
      };


  return (
    <div id='profileDiv'>
        <h3 id='formheading'>Bank details</h3>
       <Row className='contentRow' gutter={[16, 24]}>
      <Col className="gutter-row" span={6}  >
      <Form.Item label="Account No.">
        <Input style={{border:"none"}} />
      </Form.Item>
      </Col>
      <Col className="gutter-row" span={6}>
      <Form.Item label="Bank Name">
        <Input style={{border:"none"}} />
      </Form.Item>
      </Col>
      <Col className="gutter-row" span={6}>
      <Form.Item label="Bank Type">
        <Input style={{border:"none"}} />
      </Form.Item>
      </Col>
      <Col className="gutter-row" span={6}>
      <Form.Item label="IFSC Code">
        <Input style={{border:"none"}} />
      </Form.Item>
      </Col>
      <Col className="gutter-row" span={6} >
      <Form.Item  label="Branch">
        <Input  style={{border:"none", background:"white"}} />
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

export default EditBankDetails