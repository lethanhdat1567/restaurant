import classNames from 'classnames/bind';
import styles from './Book.module.scss';
import { imgs } from '../../../../assets/Imgs/imgs';
import Booking from './components/Booking/Booking';
import { decorBooking } from '../../../../assets/Icons';

const cx = classNames.bind(styles);

function Book() {
    return (
        <div className={cx('book')}>
            <div className="container">
                <div className={cx('wrapper')}>
                    <h2 className={cx('title')}>Book A Table</h2>
                    <div className="row g-0">
                        <div className="col-7">
                            <Booking />
                        </div>
                        <div className="col-5">
                            <img src={imgs.bookingImg} alt="" className={cx('img')} />
                        </div>
                    </div>
                    <span className={cx('decor')}>{decorBooking}</span>
                </div>
            </div>
        </div>
    );
}

export default Book;
