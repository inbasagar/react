import React from 'react'
import{Row,Col,Form,Input} from 'antd'
import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { userRegister } from '../redux/actions/userActions'

//handleSubmit=this.handleSubmit.bind(this);
/*
handleSubmit(e)
{
    e.PreventDefault();
    const{username,password}=this.state;
    console.log(username,password);
}
*/
function Register()
{
    const dispatch=useDispatch()
    function onFinish(values)
    {
        dispatch(userRegister(values))
        console.log(values)
    }

    return(
       // <form onSubmit={this.handleSubmit}>
        <div className='login'>
            <Row gutter={16} className='d-flex align-items-center'>

                <Col lg={16} style={{position:'relative'}}>
                    <img src="https://images.unsplash.com/photo-1485291571150-772bcfc10da5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"/>
                    <h1 className='login-logo'>Smart Cars</h1>
                </Col>
                <Col lg={8} className='text-left p-5'>
                    <Form layout='vertical' className='login-form p-5' onFinish={onFinish}>
                        <h1>Register</h1>
                        <hr/>
                        <Form.Item name='username' label='Username' rules={[{required:true}]}>
                            <Input/>
                        </Form.Item>
                        <Form.Item name='password' label='Password' rules={[{required:true}]}>
                            <Input/>
                            </Form.Item>
                        <Form.Item name='cpassword' label='Confirm Password' rules={[{required:true}]}>
                            <Input/>
                            </Form.Item>
                        
                        <button className='btn1 mt-2 mb-3'>Register</button>
                        <br/>
                        <Link to="/login">Already a user?</Link>
                    </Form>
                </Col>

            </Row>
            
        </div>
        //</form>
)}

export default Register