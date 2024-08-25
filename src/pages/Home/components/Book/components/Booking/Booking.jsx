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
                <div className="row row-cols-1 row-cols-lg-2 g-5">
                    {fakeData.inputBooking.map((item, index) => {
                        return (
                            <div className="col" key={index}>
                                <BookingInput data={item} />
                            </div>
                        );
                    })}
                </div>
            </div>
            <Button large className={cx('btn')}>
                Book Now
            </Button>
        </div>
    );
}

export default Booking;
