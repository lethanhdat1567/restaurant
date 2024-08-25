import classNames from 'classnames/bind';
import styles from './Navbar.module.scss';
import { Link } from 'react-router-dom';
import { arrowLeft, cartHead } from '../../../../../assets/Icons';

const cx = classNames.bind(styles);

function Navbar({ navBarActive, setNavBarActive }) {
    return (
        <ul className={cx('list', { active: navBarActive })}>
            <button className={cx('prev-arrow')} onClick={() => setNavBarActive(!navBarActive)}>
                {arrowLeft}
            </button>
            <li className={cx('item')} onClick={() => setNavBarActive(false)}>
                <Link to={process.env.REACT_APP_ROOT} className={cx('link')}>
                    Home
                </Link>
            </li>
            <li className={cx('item')} onClick={() => setNavBarActive(false)}>
                <Link to={`${process.env.REACT_APP_ROOT}/menu`} className={cx('link')}>
                    Menu
                </Link>
            </li>
            <li className={cx('item')} onClick={() => setNavBarActive(false)}>
                <Link to={`${process.env.REACT_APP_ROOT}/blog`} className={cx('link')}>
                    Blog
                </Link>
            </li>
            <li className={cx('item')} onClick={() => setNavBarActive(false)}>
                <Link to={`${process.env.REACT_APP_ROOT}/aboutus`} className={cx('link')}>
                    About Us
                </Link>
            </li>
            <li className={cx('item')} onClick={() => setNavBarActive(false)}>
                <Link to={'/contact'} className={cx('link')}>
                    Contact
                </Link>
            </li>
            <Link
                to={`${process.env.REACT_APP_ROOT}/cart`}
                className={cx('cart')}
                onClick={() => setNavBarActive(false)}
            >
                <div className={cx('cart-wrap')}>
                    <span className={cx('icon')}>{cartHead}</span>
                    <p className={cx('name')}>Cart</p>
                </div>
                <p className={cx('price')}>123.33 d</p>
            </Link>
            <Link
                to={`${process.env.REACT_APP_ROOT}/booking`}
                className={cx('booking')}
                onClick={() => setNavBarActive(false)}
            >
                Booking Table
            </Link>
        </ul>
    );
}

export default Navbar;
