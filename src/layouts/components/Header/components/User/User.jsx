import styles from './User.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { cart } from '../../../../../assets/Icons';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function User() {
    return (
        <div className={cx('user')}>
            <Link to={`${process.env.REACT_APP_ROOT}/booking`} className={cx('item')}>
                11:24 we’re open
            </Link>
            <Link to={`${process.env.REACT_APP_ROOT}/booking`} className={cx('item')}>
                Booking table
            </Link>
            <Link to={`${process.env.REACT_APP_ROOT}/cart`} className={cx('icon')}>
                {cart}
            </Link>
        </div>
    );
}

export default User;
