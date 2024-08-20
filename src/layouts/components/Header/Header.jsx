import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Navbar from './components/Navbar/Navbar';
import User from './components/User/User';
import { logo } from '../../../assets/Icons';

const cx = classNames.bind(styles);

function Header() {
    return (
        <section className={cx('header', 'container')}>
            <Navbar />
            <span>{logo}</span>
            <User />
        </section>
    );
}

export default Header;
