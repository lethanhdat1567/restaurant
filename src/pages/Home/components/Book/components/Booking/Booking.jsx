import classNames from 'classnames/bind';
import styles from './Booking.module.scss';
import './BookingForm.scss';
import { Button, DatePicker, Form, Input, message, Select } from 'antd';
import moment from 'moment';
import { useStateContext } from '../../../../../../contexts/ContextProvider';
import Login from '../../../../../../components/Login/Login';
import Register from '../../../../../../components/Register/Register';
import { useForm } from 'antd/es/form/Form';
import { useEffect, useRef, useState } from 'react';
import useDebounce from '../../../../../../hooks/useDebounce';
import axios from 'axios';
import { request } from '../../../../../../utils/request';

const cx = classNames.bind(styles);

function Booking() {
    const [form] = Form.useForm();
    const { user } = useStateContext();
    const [error, isError] = useState(false);
    const [fieldError, setFieldError] = useState({
        phone_number: { error: false, message: 'Phone number is not correct!' },
        email: { error: false, message: 'Email is not correct!' },
    });
    const [valueSubmit, setValueSubmit] = useState({});
    const submitRef = useRef(false);

    const data = [
        {
            name: 'Your name',
            field: 'fullname',
            default: user?.fullname ?? '',
        },
        {
            name: 'Phone number',
            field: 'phone_number',
            default: user?.phone_number ?? '',
        },
        {
            name: 'Email address',
            field: 'email',
            default: user?.email ?? '',
        },
        {
            type: 'select',
            field: 'quantity',
            default: '1 Person',
            children: [
                {
                    lable: '1 Person',
                    value: '1 Person',
                },
                {
                    lable: '2 Person',
                    value: '2 Person',
                },
                {
                    lable: '3 Person',
                    value: '3 Person',
                },
                {
                    lable: 'More than 3 person',
                    value: 'More than 3 person',
                },
            ],
        },
        {
            field: 'date',
            type: 'date',
            default: moment(),
        },
        {
            name: '07:00 pm',
            field: 'time',
            default: '',
        },
        {
            type: 'select',
            field: 'address',
            default: 'Worp Wrap-1',
            children: [
                {
                    lable: 'Worp Wrap-1',
                    value: 'Worp Wrap-1',
                },
                {
                    lable: 'Worp Wrap-2',
                    value: 'Worp Wrap-2',
                },
                {
                    lable: 'Worp Wrap-3',
                    value: 'Worp Wrap-3',
                },
            ],
        },
    ];

    //set default value
    const initialValues = data.reduce((values, item) => {
        values[item.field] = item.default || '';
        return values;
    }, {});

    // handle check input
    function handleChecInput(values) {
        const phoneRegex = /^[+]?[0-9]{1,4}[ -]?[0-9]{1,15}$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!phoneRegex.test(values.phone_number)) {
            setFieldError((prev) => {
                return { ...prev, phone_number: { error: true, message: 'Phone number is not correct!' } };
            });
            return false;
        } else if (!emailRegex.test(values.email)) {
            setFieldError((prev) => {
                return { ...prev, email: { error: true, message: 'Email is not correct!' } };
            });
            return false;
        }

        return true;
    }

    //handle finish
    function handleFinish(values) {
        let hasError = false;
        submitRef.current = true;
        data.forEach((item) => {
            if (!values[item.field]) {
                hasError = true;
            }
        });

        if (hasError) {
            isError(true);
        } else {
            if (handleChecInput(values)) {
                setFieldError((prev) => ({
                    phone_number: { error: false, message: 'Phone number is not correct!' },
                    email: { error: false, message: 'Email is not correct!' },
                }));
                if (values.date) {
                    const formatDate = values.date.format('YYYY-MM-DD');
                    setValueSubmit({ ...values, date: formatDate, user_id: user.id });
                }
                isError(false);
            }
        }
    }
    useEffect(() => {
        if (submitRef.current && !error) {
            request
                .post('booking', valueSubmit)
                .then((res) => {
                    console.log(res);
                })
                .catch((error) => {
                    console.log(`error: ${error}`);
                });
        }
    }, [valueSubmit, error]);
    return (
        <div className={cx('wrap', { active: !user })}>
            <Form className={cx('form')} onFinish={handleFinish} form={form} initialValues={initialValues}>
                <div className="row row-cols-1 row-cols-md-2 g-5">
                    {data.map((item, index) => {
                        return (
                            <div className="col" key={index}>
                                <Form.Item className={cx('form-group')} name={item.field}>
                                    {item.type === 'date' && (
                                        <DatePicker
                                            format={'DD/MM/YYYY'}
                                            suffixIcon={item.icon}
                                            className={cx('date-picker')}
                                        />
                                    )}
                                    {item.type === 'select' && (
                                        <Select placement="bottomLeft" options={item.children} />
                                    )}
                                    {item.type !== 'select' && item.type !== 'date' && (
                                        <Input placeholder={item.name} suffix={item.icon} className={cx('input')} />
                                    )}
                                </Form.Item>
                                {fieldError[item.field]?.error === true ? (
                                    <span className={cx('error')}>{fieldError[item.field].message}</span>
                                ) : (
                                    ''
                                )}
                            </div>
                        );
                    })}
                </div>
                {error ? <span className={cx('error')}>Please enter all field !</span> : ''}
                <Form.Item className={cx('btn-wrap')}>
                    <Button type="primary" htmlType="submit" className={cx('submit-btn')}>
                        Booking
                    </Button>
                </Form.Item>
            </Form>
            <div className={cx('modal')}></div>
            <div className={cx('content-modal')}>
                Please
                <Login>
                    <mark className={cx('mark')}>login</mark>
                </Login>
                or
                <Register>
                    <mark className={cx('mark')}>register</mark>
                </Register>
                to booking table
            </div>
        </div>
    );
}

export default Booking;
