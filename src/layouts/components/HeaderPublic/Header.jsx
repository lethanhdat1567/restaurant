import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Navbar from './components/Navbar/Navbar';
import { logo, navBar } from '../../../assets/Icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import User from './components/Login/User';

const cx = classNames.bind(styles);

function HeaderPublic() {
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

export default HeaderPublic;
