import classNames from 'classnames/bind';
import styles from './Booking.module.scss';
import Button from '../../../../../../components/Button/Button';
import { fakeData } from '../../../../../../data/data';
import BookingInput from '../../../../../../components/BookingInput/BookingInput';

const cx = classNames.bind(styles);

function Booking() {
    return (
        <div className={cx('booking')}>
            <div className={cx('input-wrap')}>
                {fakeData.inputBooking.map((item, index) => {
                    return <BookingInput key={index} data={item} />;
                })}
            </div>
            <Button large className={cx('btn')}>
                Book Now
            </Button>
        </div>
    );
}

export default Booking;
