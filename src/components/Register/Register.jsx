import classNames from 'classnames/bind';
import styles from './Register.module.scss';
import axios from 'axios';
import { Button, Form, Input, Modal, Select } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLocation, faLock, faPhone, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { request } from '../../utils/request';
import { useStateContext } from '../../contexts/ContextProvider';
import { redirect } from 'react-router-dom';
import Loading from './Loading';

const cx = classNames.bind(styles);

const Validate = [
    {
        name: 'email',
        label: 'Email',
        icon: <FontAwesomeIcon icon={faEnvelope} />,
        rules: [
            {
                type: 'email',
                message: 'The input is not valid E-mail!',
            },
            {
                required: true,
                message: 'Please enter your E-mail!',
            },
        ],
    },
    {
        name: 'fullname',
        label: 'Fullname',
        icon: <FontAwesomeIcon icon={faUserAlt} />,
        rules: [
            {
                required: true,
                message: 'Please enter your full name!',
            },
        ],
    },
    {
        name: 'password',
        label: 'Password',
        icon: <FontAwesomeIcon icon={faLock} />,
        rules: [
            {
                required: true,
                message: 'Please enter your password!',
            },
            {
                min: 6,
                message: 'Password must be at least 6 characters long!',
            },
        ],
    },
];

function Register({ children }) {
    const [form] = Form.useForm();
    const [showRegister, setShowRegister] = useState(false);
    const { setUser, setToken } = useStateContext();
    const [loading, setLoading] = useState(false);

    // handle submid
    const onFinish = async (values) => {
        setLoading(true);
        try {
            request
                .post('register', values, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                .then(({ data }) => {
                    setLoading(false);
                    setUser(data.user);
                    setToken(data.token);
                    setShowRegister(false);
                });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <div style={{ width: 'auto' }} onClick={() => setShowRegister(true)}>
                {children}
            </div>
            <div className={cx('wrapper')}>
                <Modal open={showRegister} onCancel={() => setShowRegister(false)} footer={null}>
                    <h2 className={cx('title')}>Register</h2>
                    <Form form={form} name="register" layout="vertical" className={cx('form')} onFinish={onFinish}>
                        {loading && <Loading />}
                        {Validate.map((item, index) => {
                            return (
                                <Form.Item name={item.name} label={item.label} rules={[...item.rules]} key={index}>
                                    {item.name === 'password' ? (
                                        <Input.Password
                                            size="large"
                                            prefix={item.icon}
                                            placeholder={`Enter your ${item.name}`}
                                        />
                                    ) : (
                                        <Input
                                            size="large"
                                            prefix={item.icon}
                                            placeholder={`Enter your ${item.name}`}
                                        />
                                    )}
                                </Form.Item>
                            );
                        })}

                        <Form.Item>
                            <div className={cx('footer-btn')}>
                                <Button type="primary" htmlType="submit" style={{ display: 'inline-block' }}>
                                    Register
                                </Button>
                                <Button
                                    danger
                                    type="primary"
                                    style={{ display: 'inline-block' }}
                                    onClick={() => setShowRegister(false)}
                                >
                                    Cancel
                                </Button>
                            </div>
                        </Form.Item>
                    </Form>
                </Modal>
            </div>
        </>
    );
}

export default Register;
