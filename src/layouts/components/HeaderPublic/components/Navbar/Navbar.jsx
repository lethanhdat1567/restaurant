import classNames from 'classnames/bind';
import styles from './Navbar.module.scss';
import { Link } from 'react-router-dom';
import { arrowLeft, cartHead } from '../../../../../assets/Icons';
import Button from '../../../../../components/Button/Button';
import { useState } from 'react';
import Register from '../../../../../components/Register/Register';

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

            <div className={cx('log-up')}>
                <Register>
                    <Button className={cx('signUp-btn')}>Sign Up</Button>
                </Register>
            </div>

            <Register>
                <Button className={cx('booking')}>Booking Table</Button>
            </Register>
        </ul>
    );
}

export default Navbar;
