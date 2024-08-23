import classNames from 'classnames/bind';
import styles from './Booking.module.scss';
import { imgs } from '../../assets/Imgs/imgs';
import Form from './components/Form/Form';

const cx = classNames.bind(styles);

function Booking() {
    return (
        <div className={cx('booking')}>
            <img src={imgs.bookingBanner} alt="" className={cx('banner')} />
            <div className="container">
                <div className={cx('wrapper')}>
                    <h2 className={cx('title')}>Online Reservation</h2>
                    <p className={cx('desc')}>Book your table for lunch or dinner.</p>
                    <Form />
                </div>
            </div>
        </div>
    );
}

export default Booking;
