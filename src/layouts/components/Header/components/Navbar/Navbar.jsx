import classNames from 'classnames/bind';
import styles from './Navbar.module.scss';
import { Link } from 'react-router-dom';
import { arrowLeft, cartHead } from '../../../../../assets/Icons';
import { useDispatch, useSelector } from 'react-redux';
import priceTrander from '../../../../../utils/priceTranfer';
import { useEffect } from 'react';
import { toastSlice } from '../../../../../redux/reducer/ToastSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Navbar({ navBarActive, setNavBarActive }) {
    const total = useSelector((state) => state.products.totalMoney);
    const toast = useSelector((state) => state.toast.toastCartMobile);
    const dispatch = useDispatch();
    useEffect(() => {
        if (!navBarActive && toast) {
            dispatch(toastSlice.actions.setToastMobile(false));
        }
    }, [navBarActive]);
    return (
        <ul className={cx('list', { active: navBarActive })}>
            <button className={cx('prev-arrow')} onClick={() => setNavBarActive(false)}>
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
            <Link
                to={`${process.env.REACT_APP_ROOT}/cart`}
                className={cx('cart', { active: toast })}
                onClick={() => setNavBarActive(false)}
            >
                <div className={cx('cart-wrap')}>
                    <span className={cx('icon', { active: toast })}>
                        <FontAwesomeIcon icon={faCartShopping} className={cx('fa-xl', { 'fa-shake': toast })} />
                    </span>
                    <p className={cx('name')}>Cart</p>
                </div>
                <p className={cx('price')}>{priceTrander(total)}</p>
            </Link>
            <Link
                to={`${process.env.REACT_APP_ROOT}/booking`}
                className={cx('booking')}
                onClick={() => setNavBarActive(false)}
            >
                Booking Table
            </Link>
        </ul>
    );
}

export default Navbar;
