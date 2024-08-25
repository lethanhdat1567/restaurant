import classNames from 'classnames/bind';
import styles from './Navbar.module.scss';
import { Link } from 'react-router-dom';
import { arrowLeft, cartHead } from '../../../../../assets/Icons';

const cx = classNames.bind(styles);

function Navbar({ navBarActive, setNavBarActive }) {
    return (
        <ul className={cx('list', { active: navBarActive })}>
            <button className={cx('prev-arrow')}>{arrowLeft}</button>
            <li className={cx('item')}>
                <Link to={process.env.REACT_APP_ROOT} className={cx('link')}>
                    Home
                </Link>
            </li>
            <li className={cx('item')}>
                <Link to={`${process.env.REACT_APP_ROOT}/menu`} className={cx('link')}>
                    Menu
                </Link>
            </li>
            <li className={cx('item')}>
                <Link to={`${process.env.REACT_APP_ROOT}/blog`} className={cx('link')}>
                    Blog
                </Link>
            </li>
            <li className={cx('item')}>
                <Link to={`${process.env.REACT_APP_ROOT}/aboutus`} className={cx('link')}>
                    About Us
                </Link>
            </li>
            <li className={cx('item')}>
                <Link to={'/contact'} className={cx('link')}>
                    Contact
                </Link>
            </li>
            <div className={cx('cart')}>
                <div className={cx('cart-wrap')}>
                    <span className={cx('icon')}>{cartHead}</span>
                    <p className={cx('name')}>Cart</p>
                </div>
                <p className={cx('price')}>123.33 d</p>
            </div>
        </ul>
    );
}

export default Navbar;
