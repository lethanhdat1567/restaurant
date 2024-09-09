import { Button, Form, Input } from 'antd';
import classNames from 'classnames/bind';
import './Form.scss';
import styles from './Form.module.scss';
import TextArea from 'antd/es/input/TextArea';
import { useForm } from 'antd/es/form/Form';
import { useSelector } from 'react-redux';
import { request } from '../../utils/request';
import { useState } from 'react';
import Loading from '../Loading/Loading';
import { ToastContainer } from 'react-toastify';
import { useStateContext } from '../../contexts/ContextProvider';

const cx = classNames.bind(styles);

function Forms({ data }) {
    const [form] = useForm();
    const user = useSelector((state) => state.user.user);
    const { toastify } = useStateContext();
    const [loading, setLoading] = useState(false);

    function handleFinish(values) {
        setLoading(true);
        request
            .post('feedback', values)
            .then((res) => {
                form.resetFields();
                setLoading(false);
                setTimeout(() => {
                    toastify(`Thank you for feedback <3`, 'success');
                }, 1000);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <>
            {loading ? (
                <div className={cx('loading')}>
                    <Loading />
                </div>
            ) : (
                <Form
                    form={form}
                    className="form-contact"
                    layout="vertical"
                    onFinish={handleFinish}
                    initialValues={user}
                >
                    <ToastContainer />
                    {data.map((item, index) => {
                        if (item.type === 'input') {
                            return (
                                <Form.Item label={item.label} key={index} rules={item.rules} name={item.name}>
                                    <Input suffix={item.icon} />
                                </Form.Item>
                            );
                        } else if (item.type === 'area') {
                            return (
                                <Form.Item label={item.label} key={index} rules={item.rules} name={item.name}>
                                    <TextArea rows={10} className="area" />
                                </Form.Item>
                            );
                        }
                    })}
                    <Form.Item style={{ textAlign: 'right' }}>
                        <Button type="primary" htmlType="submit">
                            Send
                        </Button>
                    </Form.Item>
                </Form>
            )}
        </>
    );
}

export default Forms;
