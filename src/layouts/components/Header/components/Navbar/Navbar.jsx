import classNames from 'classnames/bind';
import styles from './Navbar.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Navbar() {
    return (
        <ul className={cx('list')}>
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
        </ul>
    );
}

export default Navbar;
