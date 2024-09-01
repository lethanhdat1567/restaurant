import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Navbar from './components/Navbar/Navbar';
import User from './components/User/User';
import { logo, navBar } from '../../../assets/Icons';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { request } from '../../../utils/request';
import { useStateContext } from '../../../contexts/ContextProvider';
import { usersSlice } from '../../../redux/reducer/UserSlice';

const cx = classNames.bind(styles);

function Header() {
    // redux
    const dispatch = useDispatch();
    // hooks
    const { user } = useStateContext();
    useEffect(() => {
        request
            .get(`users/${user.id}`)
            .then((res) => {
                dispatch(usersSlice.actions.getUser(res.data.data));
                dispatch(usersSlice.actions.updateAvatar(user.avatar));
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

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
