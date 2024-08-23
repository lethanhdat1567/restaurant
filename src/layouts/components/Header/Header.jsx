import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Navbar from './components/Navbar/Navbar';
import User from './components/User/User';
import { logo } from '../../../assets/Icons';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Header() {
    return (
        <section className={cx('header', 'container')}>
            <Navbar />
            <Link to="/">{logo}</Link>
            <User />
        </section>
    );
}

export default Header;
