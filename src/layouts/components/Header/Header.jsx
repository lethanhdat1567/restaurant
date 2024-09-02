import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Navbar from './components/Navbar/Navbar';
import User from './components/User/User';
import { logo, navBar } from '../../../assets/Icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Header() {
    const [navBarActive, setNavBarActive] = useState(false);
    return (
        <div className="container">
            <section className={cx('header')}>
                <span className={cx('nav-btn')} onClick={() => setNavBarActive(!navBarActive)}>
                    {navBar}
                </span>
                <div
                    className={cx('navbar-overlay', { active: navBarActive })}
                    onClick={() => setNavBarActive(!navBarActive)}
                ></div>
                <Navbar navBarActive={navBarActive} setNavBarActive={setNavBarActive} />
                <Link to="/">{logo}</Link>
                <User />
            </section>
        </div>
    );
}

export default Header;
