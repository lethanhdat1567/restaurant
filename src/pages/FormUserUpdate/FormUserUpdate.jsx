import classNames from 'classnames/bind';
import styles from './FormUserUpdate.module.scss';
import { useForm } from 'antd/es/form/Form';
import { Button, Flex, Form, Input, message, Select, Upload } from 'antd';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faUpload } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useStateContext } from '../../contexts/ContextProvider';
import { request } from '../../utils/request';
import { useDispatch, useSelector } from 'react-redux';
import { usersSlice } from '../../redux/reducer/UserSlice';
import ImgAvatar from '../../components/ImgAvatar/ImgAvatar';

const cx = classNames.bind(styles);

function FormUserUpdate() {
    // redux
    const user = useSelector((state) => state.user.user);
    const avatar = useSelector((state) => state.user.avatar);

    const dispatch = useDispatch();

    // ant
    const [form] = useForm();
    const { slug } = useParams();
    const naviagte = useNavigate();

    const initialValues = user;
    const props = {
        name: 'file',
        action: `${process.env.REACT_APP_BACKEND_API}users/upload`,

        onChange(info) {
            if (info.file.status === 'uploading') {
                console.log('Uploading:', info.fileList);
            }
            if (info.file.status === 'done') {
                message.success(`Your img file uploaded successfully`);
                form.setFieldsValue({ file: info.file.response.url });
                dispatch(usersSlice.actions.updateAvatar(info.file.response.url));
            } else if (info.file.status === 'error') {
                message.error(`Your img file upload failed.`);
            }
        },
    };
    const inputForm = [
        {
            type: 'input',
            name: 'fullname',
            label: 'Name',
            placehoder: 'Please enter your name',
            rules: [
                {
                    required: true,
                    message: 'Please enter your input!',
                },
            ],
        },
        {
            type: 'input',
            name: 'email',
            label: 'Email',
            placehoder: 'Please enter your email',
            rules: [
                {
                    type: 'email',
                    message: 'email is not correct!',
                },
                {
                    required: true,
                    message: 'Please enter your input!',
                },
            ],
        },
        {
            type: 'input',
            name: 'phone_number',
            label: 'Phone Number',
            placehoder: 'Please enter your phone number',
            rules: [
                {
                    required: true,
                    message: 'Please enter your input!',
                },
                {
                    pattern: /^\d+$/,
                    message: 'The input is not a valid number!',
                },
            ],
        },
        {
            type: 'input',
            name: 'address',
            label: 'Address',
            placehoder: 'Please enter your address',
            rules: [
                {
                    required: true,
                    message: 'Please enter your input!',
                },
            ],
        },
        {
            type: 'upload',
            name: 'avatar',
            label: 'Your avatar',
        },
    ];
    const formInput = {
        select(item, key) {
            return (
                <Select key={key}>
                    {item.options.map((item, index) => {
                        return (
                            <Select.Option value={item.value} key={index}>
                                {item.label}
                            </Select.Option>
                        );
                    })}
                </Select>
            );
        },
        input(item, index) {
            return <Input placeholder={item.placehoder ? item.placehoder : ''} name={item.name} />;
        },
        upload(item, index) {
            return (
                <div className="row">
                    <div className="col-3">
                        <Upload {...props}>
                            <Button icon={<FontAwesomeIcon icon={faUpload} />}>Click to Upload</Button>
                        </Upload>
                        {avatar && (
                            <Button
                                style={{ marginTop: '20px' }}
                                danger
                                onClick={() => dispatch(usersSlice.actions.updateAvatar())}
                            >
                                Delete avatar
                            </Button>
                        )}
                    </div>
                    <div className="col-9">
                        <div className={cx('upload')}>
                            <span className={cx('upload-thumbnail')}>Your avatar</span>
                            <div className={cx('img')}>
                                <ImgAvatar src={avatar} />
                            </div>
                        </div>
                    </div>
                </div>
            );
        },
    };
    function onFinish(values) {
        const newValue = values;

        if (avatar) {
            newValue.avatar = avatar;
        }

        request
            .put(`users/${slug}`, newValue)
            .then((res) => {
                dispatch(usersSlice.actions.updateUser(res.data.data));
                naviagte(`/profile`);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <div className={cx('wrap')}>
            <Link className={cx('back-wrap')} to={`${process.env.REACT_APP_ROOT}/profile`}>
                <span className={cx('icon')}>
                    <FontAwesomeIcon icon={faChevronLeft} className="fa-xl" style={{ color: '#000' }} />
                </span>
                <p style={{ color: '#000', fontSize: '1.8rem' }}>Back to your profile</p>
            </Link>
            <Form
                form={form}
                layout="vertical"
                className={cx('form')}
                onFinish={onFinish}
                initialValues={initialValues}
            >
                {inputForm.map((item, index) => {
                    return (
                        <Form.Item
                            className={cx('form-group')}
                            label={item.label}
                            key={index}
                            name={item.name}
                            rules={[...(item.rules ? item.rules : [])]}
                        >
                            {formInput[item.type](item, index)}
                        </Form.Item>
                    );
                })}
                <Form.Item
                    wrapperCol={{
                        offset: 20,
                    }}
                >
                    <Flex gap="small">
                        <Button type="primary" htmlType="submit">
                            Update
                        </Button>
                        <Button danger onClick={() => form.resetFields()}>
                            Reset
                        </Button>
                    </Flex>
                </Form.Item>
            </Form>
        </div>
    );
}

export default FormUserUpdate;
