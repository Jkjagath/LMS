import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { EyeTwoTone, EyeInvisibleOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";

function ResetPassword(props) {
  const handleClose = () => props.handleHideResetPassowrd();

  return (
    <>
      <Modal
        show={props.ShowResetPassowrd}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
       centered
  
      >
        <Modal.Body style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ margin:"25px"}} >
            <p style={{marginLeft:140, fontSize:25, color:"#086288", fontFamily:"Open Sans"}}>Reste your password<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;to Continue</p>

            <Space direction="vertical" >
              <Input.Password placeholder="Enter existing password" style={{width:450, height:40,margin:10}} />
              <Input.Password style={{width:450,height:40,margin:10}}
                placeholder="Enter New Password (Must be atleast 6 characters)"
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
              <Input.Password placeholder="Re-Enter password" style={{width:450,height:40,margin:10}} />
            </Space>
            <p style={{color:"#F30F1E", marginLeft:22}}>Note:Previous 5 time passwords cammot be used as anew password</p>
            <div style={{marginTop:20,marginLeft:200}}>
          <Button variant="primary" onClick={handleClose}>Change</Button>
        </div>
          </div>
          
        </Modal.Body >
        
      </Modal>
    </>
  );
}

export default ResetPassword;
