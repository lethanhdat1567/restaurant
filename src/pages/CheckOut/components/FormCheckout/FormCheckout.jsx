import classNames from 'classnames/bind';
import styles from './FormCheckout.module.scss';
import './Form.scss';
import { Button, Form, Input, message, Select } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { useForm } from 'antd/es/form/Form';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { request } from '../../../../utils/request';
import { confirmSlice } from '../../../../redux/reducer/ConfirmSlice';
import { useNavigate } from 'react-router-dom';
import { productsSlice } from '../../../../redux/reducer/ProductsSlice';
import Loading from '../../../../components/Loading/Loading';

const cx = classNames.bind(styles);

function FormCheckout() {
    const [form] = useForm();
    const navigate = useNavigate();
    // redux data
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.user);
    const total_money = useSelector((state) => state.products.totalMoney);
    const products = useSelector((state) => state.products.cart);
    const isDisabled = products.length === 0;
    // hooks
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        if (user) {
            form.setFieldsValue({
                fullname: user.fullname,
                email: user.email,
                phone_number: user.phone_number,
                address: user.address,
                note: '',
            });
        }
    }, [user]);
    const formInput = [
        {
            label: 'Fullname',
            name: 'fullname',
            rules: [
                {
                    required: true,
                    message: 'Please enter the input',
                },
            ],
        },
        {
            label: 'Email',
            name: 'email',
            rules: [
                {
                    type: 'email',
                    message: 'Please enter a valid email address',
                },
                {
                    required: true,
                    message: 'Please enter the input',
                },
            ],
        },
        {
            label: 'Phone Number',
            name: 'phone_number',
            rules: [
                {
                    pattern: /^[0-9]{10,11}$/,
                    message: 'Please enter a valid phone number (10 or 11 digits)',
                },
                {
                    required: true,
                    message: 'Please enter the input',
                },
            ],
        },
        {
            label: 'Address',
            name: 'address',
            rules: [
                {
                    required: true,
                    message: 'Please enter the input',
                },
            ],
        },
        {
            type: 'area',
            label: 'Note',
            name: 'note',
        },
    ];
    const handleFinish = (values) => {
        setLoading(true);
        const newValues = {
            user_id: user.id,
            fullname: values.fullname,
            email: values.email,
            phone_number: values.phone_number,
            address: values.address,
            note: values.note,
            total_money: total_money,
        };
        request
            .post('orders', newValues)
            .then((res) => {
                const data = {
                    order_details: { ...res.data.data },
                    products: products,
                };
                dispatch(confirmSlice.actions.setConfirm(res.data.data));
                request
                    .post('orderdetail', data)
                    .then((res) => {
                        dispatch(productsSlice.actions.destroyCart());
                        setLoading(false);
                        navigate('/confirm');
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className={cx('form-wrap', 'form-checkout')}>
            {loading && (
                <div className={cx('loading')}>
                    <Loading />
                </div>
            )}
            <h2 className={cx('form-label')}>Billing details</h2>
            <Form layout="vertical" form={form} onFinish={handleFinish} style={{ textAlign: 'right' }}>
                {formInput.map((item, index) => {
                    if (item.type === 'area') {
                        return (
                            <Form.Item
                                key={index}
                                name={item.name}
                                label={item.label}
                                rules={[...(Array.isArray(item.rules) ? item.rules : [])]}
                            >
                                <TextArea rows={10} style={{ background: 'transparent', color: '#fff' }} />
                            </Form.Item>
                        );
                    } else {
                        return (
                            <Form.Item
                                label={item.label}
                                labelCol={{ color: '#fff' }}
                                name={item.name}
                                key={index}
                                style={{ color: '#fff' }}
                                rules={[...(Array.isArray(item.rules) ? item.rules : [])]}
                            >
                                <Input style={{ background: 'transparent', color: '#fff' }} />
                            </Form.Item>
                        );
                    }
                })}
                {isDisabled ? (
                    <span className={cx('error')}>You don't have any carts</span>
                ) : (
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                )}
            </Form>
        </div>
    );
}

export default FormCheckout;
