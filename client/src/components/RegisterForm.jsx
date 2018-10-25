import React, { Component } from 'react';
import { Form, Icon, Input, Button, Row, Col, notification } from 'antd';
import { Link, } from 'react-router-dom';

import { FormWrapper, SmallFormContainer, Center, Logo } from '../styles/form';
import {getEncodedData} from '../utils/helpers';

const FormItem = Form.Item;

class RegisterForm extends Component {

    constructor(props, context) {
        super(props, context);
    }

    componentWillMount() {
        const { history } = this.props;
        const token = localStorage.getItem('token');
        if (token) {
            history.push('/');
        } 
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.register.error) {
            notification['error']({
                message: 'Error',
                description: nextProps.register.error,
            });
        }
    }

    onSubmit = e => {
        const { requestRegister, history } = this.props;
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                let formBody = getEncodedData(values);

                requestRegister({
                    fields: formBody,
                    callback: () => {
                        console.log(this.props)
                        history.push('/');
                    },
                })
            };
        });
    }


    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <FormWrapper>
                <SmallFormContainer>
                    <Form className="login-form">
                        <Row gutter={16}>
                            <Center>
                                <Logo src="./logo.png"></Logo>
                            </Center>
                            <Col md={24} sm={24}>
                                <FormItem>
                                    {getFieldDecorator('username', {
                                        rules: [{
                                            required: true, message: 'Please input your User Name!'
                                        }, {
                                            pattern: '^[a-zA-Z0-9@._]{3,50}$', message: 'User Name you entered is not valid.'
                                        }],
                                    })(
                                        <Input name="username" prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="User Name" />
                                    )}
                                </FormItem>
                            </Col>

                            <Col md={24} sm={24}>
                                <FormItem>
                                    {getFieldDecorator('password', {
                                        rules: [{
                                            required: true, message: 'Please enter your Password!'
                                        }],
                                    })(
                                        <Input name="password" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                                    )}
                                </FormItem>
                            </Col>

                            <Col md={24} sm={24}>

                                <FormItem>
                                    {getFieldDecorator('email', {
                                        rules: [{
                                            required: true, message: 'Please input your E-mail!'
                                        }, {
                                            type: 'email', message: 'The input is not valid E-mail!',
                                        }],
                                    })(
                                        <Input name="email" prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" />
                                    )}
                                </FormItem>
                            </Col>
                        </Row>

                        <FormItem>
                            <Button type="primary" onClick={e => this.onSubmit(e)} className="login-form-button">
                                Register
                                    </Button>
                            <br></br>
                            <Link to={{ pathname: "/login" }}>Login Now!</Link>
                        </FormItem>
                    </Form>
                </SmallFormContainer>
            </FormWrapper>
        );
    }
}

const WrappedRegister = Form.create()(RegisterForm);
export default WrappedRegister;