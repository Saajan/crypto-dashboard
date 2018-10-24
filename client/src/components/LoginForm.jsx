import React, { Component } from 'react';
import { Form, Icon, Input, Button, Row, Col, notification } from 'antd';
import { Link, } from 'react-router-dom';

import { FormWrapper, SmallFormContainer, Center, Logo } from '../styles/form';
import {getEncodedData} from '../utils/helpers';

const FormItem = Form.Item;

class LoginForm extends Component {
    constructor(props, context) {
        super(props, context);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.login.error) {
            notification['error']({
                message: 'Error',
                description: nextProps.login.error,
            });
        }
    }

    onSubmit = e => {

        const { requestLogin, history } = this.props;
        e.preventDefault();

        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);

                let formBody = getEncodedData(values);

                requestLogin({
                    fields: formBody,
                    callback: () => {
                        history.push('/dashboard/home');
                    },
                });
            };
        });
    }

    render() {
        console.log(this.props, this.state);
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
                        </Row>

                        <FormItem>
                            <Button type="primary" onClick={e => this.onSubmit(e)} className="login-form-button">
                                Log in
                            </Button>
                            <br></br>
                            <Link to={{ pathname: "/register" }}>Register Now!</Link>
                        </FormItem>
                    </Form>
                </SmallFormContainer>
            </FormWrapper>
        );
    }
}

const WrappedLogin = Form.create()(LoginForm);
export default WrappedLogin;