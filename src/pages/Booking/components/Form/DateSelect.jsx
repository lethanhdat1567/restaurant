import classNames from 'classnames/bind';
import styles from './Form.module.scss';
import './Form.scss';
import { DatePicker } from 'antd';

const cx = classNames.bind(styles);

function DateSelect() {
    return <DatePicker placeholder="YYYY/MM/DD" format={'YYYY/MM/DD'} className={cx('date')} />;
}

export default DateSelect;
