import classNames from 'classnames/bind';
import styles from './Navbar.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Navbar() {
    return (
        <ul className={cx('list')}>
            <li className={cx('item')}>
                <Link to={'/'} className={cx('link')}>
                    Home
                </Link>
            </li>
            <li className={cx('item')}>
                <Link to={'/'} className={cx('link')}>
                    Menu
                </Link>
            </li>
            <li className={cx('item')}>
                <Link to={'/'} className={cx('link')}>
                    Blog
                </Link>
            </li>
            <li className={cx('item')}>
                <Link to={'/'} className={cx('link')}>
                    Pages
                </Link>
            </li>
            <li className={cx('item')}>
                <Link to={'/'} className={cx('link')}>
                    Contact
                </Link>
            </li>
        </ul>
    );
}

export default Navbar;
