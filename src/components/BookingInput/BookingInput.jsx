import { DatePicker, Select } from 'antd';
import styles from './BookingInput.module.scss';
import './DatePicker.scss';
import classNames from 'classnames/bind';
import moment from 'moment/moment';

const cx = classNames.bind(styles);

function BookingInput({ data }) {
    const dateNow = moment();
    const format = 'DD/MM/YYYY';

    if (data.type === 'date') {
        return <DatePicker format={format} defaultValue={dateNow} className={cx('date-picker')} />;
    } else if (data.type === 'select') {
        return (
            <Select
                defaultValue={data.children[0]}
                style={{ border: '1px solid #ffffff80', height: '54px', background: '#1111141a', width: '100%' }}
            >
                {data.children.map((item, index) => {
                    return <Select.Option key={index}>{item}</Select.Option>;
                })}
            </Select>
        );
    } else {
        return (
            <input
                type="text"
                className={cx('input')}
                placeholder={data.lable}
                value={data.value}
                onChange={(e) => data.setValue(e.target.value)}
            />
        );
    }
}

export default BookingInput;
