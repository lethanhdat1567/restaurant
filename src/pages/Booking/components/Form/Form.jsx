import classNames from 'classnames/bind';
import styles from './Form.module.scss';
import './Form.scss';
import { Button, DatePicker, Form, Input, Select } from 'antd';
import { clock, gmail, phone, user } from '../../../../assets/Icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import moment from 'moment/moment';
import { useStateContext } from '../../../../contexts/ContextProvider';
import { request } from '../../../../utils/request';

const cx = classNames.bind(styles);

function FormBooking() {
    const [form] = Form.useForm();
    const { user } = useStateContext();

    const data = [
        {
            name: 'fullname',
            placeholder: 'Your name',
            default: user.fullname,
        },
        {
            name: 'phone_number',
            placeholder: 'Phone number',
            default: user.phone_number,
        },
        {
            name: 'email',
            placeholder: 'Email address',
            default: user.email,
        },
        {
            type: 'select',
            name: 'quantity',
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
            default: '1 Person',
        },
        {
            type: 'date',
            name: 'date',
            default: moment(),
            icon: <FontAwesomeIcon icon={faCalendar} className="fa-lg" style={{ color: '#fff' }} />,
        },
        {
            name: 'time',
            placeholder: '07:00 pm',
        },
        {
            type: 'select',
            name: 'address',
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
        values[item.name] = item.default || '';
        return values;
    }, {});
    function onFinish(values) {
        const dateFormat = values.date.format('YYYY-MM-DD');
        const valueSubmit = { ...values, user_id: user.id, date: dateFormat };
        request
            .post('booking', valueSubmit)
            .then((res) => {
                console.log(res);
            })
            .catch((error) => {
                console.log(`error: ${error}`);
            });
    }
    return (
        <Form className={cx('form')} form={form} onFinish={onFinish} initialValues={initialValues}>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5">
                {data.map((item, index) => {
                    return (
                        <div className="col" key={index}>
                            <Form.Item
                                className={cx('form-group')}
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your username!',
                                    },
                                ]}
                                name={item.name}
                            >
                                {item.type === 'date' && (
                                    <DatePicker
                                        format={'DD/MM/YYYY'}
                                        suffixIcon={item.icon}
                                        className={cx('date-picker')}
                                    />
                                )}
                                {item.type === 'select' && (
                                    <Select placement="bottomLeft" options={item.children} className="select-wrap" />
                                )}
                                {item.type !== 'select' && item.type !== 'date' && (
                                    <Input placeholder={item.placeholder} suffix={item.icon} className={cx('input')} />
                                )}
                            </Form.Item>
                        </div>
                    );
                })}
            </div>
            <Form.Item className={cx('btn-wrap')}>
                <Button htmlType="submit" type="primary" className={cx('btn-submit')}>
                    Booking
                </Button>
            </Form.Item>
        </Form>
    );
}

export default FormBooking;
