import classNames from 'classnames/bind';
import styles from './User.module.scss';
import Button from '../../../../../components/Button/Button';
import { useState } from 'react';
import Login from '../../../../../components/Login/Login';
import Register from '../../../../../components/Register/Register';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function User() {
    return (
        <div className={cx('wrap')}>
            <Register>
                <Link className={cx('booking')}>Booking table</Link>
            </Register>
            <Register>
                <Button className={cx('log-up')}>Sign Up</Button>
            </Register>

            <Login>
                <Button className={cx('log-in')}>Sign In</Button>
            </Login>
        </div>
    );
}

export default User;
