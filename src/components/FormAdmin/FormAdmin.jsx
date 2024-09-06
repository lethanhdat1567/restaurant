import classNames from 'classnames/bind';
import styles from './FormAdmin.module.scss';
import { Button, Flex, Form, Input, message, Row, Select, Upload } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, fas, faUpload } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { request } from '../../utils/request';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import { useStateContext } from '../../contexts/ContextProvider';
import { toast, ToastContainer } from 'react-toastify';
import TextEditor from '../TextEditor/TextEditor';

const cx = classNames.bind(styles);

function FormAdmin({ data, field, slug, updated }) {
    // Context
    const { toastify } = useStateContext();
    // Libraries
    const [form] = Form.useForm();
    const naviagte = useNavigate();
    // hooks
    const [thumbnail, setThumbnail] = useState();
    const [loading, setLoading] = useState(false);
    const [initialValues, setInitialValues] = useState();
    const [editorContent, setEditorContent] = useState('');

    // Rich text editor
    const handleEditorChange = (content) => {
        setEditorContent(content);
    };
    // props upload
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
                setThumbnail(info.file.response.url);
            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
    };
    // submit form
    function onFinish(values) {
        const newValue = values;

        if (thumbnail) {
            newValue.thumbnail = thumbnail;
        }
        if (updated) {
            request
                .put(`${field}/${slug}`, newValue)
                .then((res) => {
                    setTimeout(() => {
                        toastify(`Update ${field} success`, 'success');
                    }, 1000);
                    naviagte(`/admin/${field}`);
                })
                .catch((error) => {
                    console.log(error);
                    setTimeout(() => {
                        toastify(`Update ${field} success`, 'success');
                    }, 1000);
                    naviagte(`/admin/${field}`);
                });
        } else {
            request
                .post(`${field}`, newValue)
                .then((res) => {
                    setTimeout(() => {
                        toastify(`Add ${field} success`, 'success');
                    }, 1000);
                    naviagte(`/admin/${field}`);
                })
                .catch((error) => {
                    setTimeout(() => {
                        toastify(`Add ${field} error`, 'error');
                    }, 1000);
                    naviagte(`/admin/${field}`);
                });
        }
    }

    useEffect(() => {
        if (slug) {
            setLoading(true);
            request
                .get(`${field}/${slug}`)
                .then((res) => {
                    setInitialValues(res.data.data);
                    setThumbnail(res.data.data.img);
                    setLoading(false);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, []);

    return (
        <div className={cx('wrap')}>
            <ToastContainer />
            {loading ? (
                <div className={cx('loading')}>
                    <ClipLoader
                        loading={loading}
                        size={150}
                        color="#000"
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    />
                </div>
            ) : (
                <Form
                    form={form}
                    initialValues={initialValues || {}}
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
                                    <Upload {...props} onRemove={() => setThumbnail()}>
                                        <Button icon={<FontAwesomeIcon icon={faUpload} />}>Click to Upload</Button>
                                    </Upload>
                                    <div className={cx('upload')}>
                                        <span className={cx('upload-thumbnail')}>Your thumbnail</span>
                                        {thumbnail && (
                                            <img
                                                src={`${process.env.REACT_APP_BACKEND}${thumbnail}`}
                                                alt=""
                                                className={cx('img')}
                                            />
                                        )}
                                    </div>
                                </Form.Item>
                            );
                        } else {
                            return (
                                <Form.Item
                                    key={index}
                                    name={item.name}
                                    label={item.label}
                                    rules={[
                                        ...(Array.isArray(item.rules) ? item.rules : []),
                                        {
                                            required: true,
                                            message: 'Dont have any info!',
                                        },
                                    ]}
                                >
                                    {item.type === 'password' ? <Input.Password /> : <Input />}
                                </Form.Item>
                            );
                        }
                    })}
                    <div className={cx('editor')}>
                        <TextEditor value={editorContent} onChange={handleEditorChange} />
                    </div>
                    <Form.Item
                        wrapperCol={{
                            offset: 0,
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
            )}

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
