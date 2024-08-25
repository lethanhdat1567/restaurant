import styles from './User.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Search from './components/Search/Search';
import Cart from './components/Cart/Cart';
import UserMenu from './components/UserMenu/UserMenu';

const cx = classNames.bind(styles);

function User() {
    return (
        <div className={cx('user')}>
            <Link to={`${process.env.REACT_APP_ROOT}/booking`} className={cx('booking')}>
                Booking Table
            </Link>
            <Search />
            <Cart />
            <UserMenu />
        </div>
    );
}

export default User;
