import styles from './Login.module.scss';
import classNames from 'classnames/bind';
import { Button, Form, Input, Modal } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';
import { useStateContext } from '../../contexts/ContextProvider';
import { request } from '../../utils/request';
import Loading from '../Register/Loading';
import { useDispatch } from 'react-redux';
import { usersSlice } from '../../redux/reducer/UserSlice';

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

function Login({ children }) {
    const [form] = Form.useForm();
    const [showModal, setShowModal] = useState(false);
    const { setUser, setToken } = useStateContext();
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    function onFinish(values) {
        setLoading(true);
        request
            .post('login', values)
            .then((res) => {
                if (res.data.token) {
                    setUser(res.data.user);
                    setToken(res.data.token);
                    dispatch(usersSlice.actions.getUser(res.data.user));
                    dispatch(usersSlice.actions.updateAvatar(res.data.user.avatar));
                    setLoading(false);
                } else {
                    form.setFields([
                        {
                            name: 'email',
                            errors: ['Email or password is wrong'],
                        },
                        {
                            name: 'password',
                            errors: ['Email or password is wrong'],
                        },
                    ]);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <>
            <div onClick={() => setShowModal(true)}>{children}</div>
            <div className={cx('wrapper')}>
                <Modal open={showModal} onCancel={() => setShowModal(false)} footer={null}>
                    {loading && <Loading />}
                    <h2 className={cx('title')}>Login</h2>
                    <Form form={form} name="register" layout="vertical" className={cx('form')} onFinish={onFinish}>
                        {Validate.map((item, index) => {
                            return (
                                <Form.Item name={item.name} label={item.label} rules={item.rules} key={index}>
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
                                    LogIn
                                </Button>
                                <Button
                                    danger
                                    type="primary"
                                    style={{ display: 'inline-block' }}
                                    onClick={() => setShowModal(false)}
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

export default Login;
