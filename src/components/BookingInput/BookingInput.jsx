import styles from './BookingInput.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function BookingInput({ data }) {
    return <input type="text" className={cx('input')} placeholder={data} />;
}

export default BookingInput;
