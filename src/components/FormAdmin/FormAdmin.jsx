import classNames from 'classnames/bind';
import styles from './FormAdmin.module.scss';
import { Button, Flex, Form, Input, message, Row, Select, Upload } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faUpload } from '@fortawesome/free-solid-svg-icons';
import { Link, redirect } from 'react-router-dom';
import { request } from '../../utils/request';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function FormAdmin({ data, field }) {
    const [form] = Form.useForm();
    const naviagte = useNavigate();
    const props = {
        name: 'file',
        action: `${process.env.REACT_APP_BACKEND_API}products/upload`,
        onChange(info) {
            if (info.file.status === 'uploading') {
                console.log('Uploading:', info.fileList);
            }
            if (info.file.status === 'done') {
                message.success(`${info.file.name} file uploaded successfully`);
                form.setFieldsValue({ file: info.file.response.url });
            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
    };

    function onFinish(values) {
        request
            .post(`${field}`, values)
            .then((res) => {
                naviagte(`/admin/${field}`);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <div className={cx('wrap')}>
            <Form
                form={form}
                onFinish={onFinish}
                style={{
                    paddingBlock: 32,
                }}
                labelCol={{
                    span: 6,
                }}
                wrapperCol={{
                    span: 14,
                }}
            >
                {data.map((item, index) => {
                    if (item.type === 'select') {
                        return (
                            <Form.Item
                                key={index}
                                name={item.name}
                                label={item.label}
                                rules={[
                                    {
                                        required: true,
                                        message: 'Dont have any info!',
                                    },
                                ]}
                            >
                                <Select>
                                    {item.options.map((item, index) => {
                                        return (
                                            <Select.Option value={item.value} key={index}>
                                                {item.label}
                                            </Select.Option>
                                        );
                                    })}
                                </Select>
                            </Form.Item>
                        );
                    } else if (item.type === 'area') {
                        return (
                            <Form.Item
                                key={index}
                                name={item.name}
                                label={item.label}
                                rules={[
                                    {
                                        required: true,
                                        message: 'Dont have any info!',
                                    },
                                ]}
                            >
                                <Input.TextArea rows={6} />
                            </Form.Item>
                        );
                    } else if (item.type === 'upload') {
                        return (
                            <Form.Item label={item.label} key={index}>
                                <Upload {...props}>
                                    <Button icon={<FontAwesomeIcon icon={faUpload} />}>Click to Upload</Button>
                                </Upload>
                            </Form.Item>
                        );
                    } else {
                        return (
                            <Form.Item
                                key={index}
                                name={item.name}
                                label={item.label}
                                rules={[...(Array.isArray(item.rules) ? item.rules : [])]}
                            >
                                {item.type === 'password' ? <Input.Password /> : <Input />}
                            </Form.Item>
                        );
                    }
                })}

                <Form.Item
                    wrapperCol={{
                        offset: 6,
                    }}
                >
                    <Flex gap="small">
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                        <Button danger onClick={() => form.resetFields()}>
                            Reset
                        </Button>
                    </Flex>
                </Form.Item>
            </Form>
            <Link to={`${process.env.REACT_APP_ROOT}/admin/${field}`} className={cx('back')}>
                <span className={cx('icons')}>
                    <FontAwesomeIcon icon={faChevronLeft} className="fa-xl" />
                </span>
                <span className={cx('sub')}>{`Back to ${field} page`}</span>
            </Link>
        </div>
    );
}

export default FormAdmin;
