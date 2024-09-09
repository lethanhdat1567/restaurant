import classNames from 'classnames/bind';
import styles from './CartMobile.module.scss';
import Deposite from '../../../components/Deposite/Deposite';
import { trash } from '../../../assets/Icons';
import Button from '../../../components/Button/Button';
import { useState } from 'react';
import CartMobileItem from './CartMobileItem';
import { useDispatch } from 'react-redux';
import { productsSlice } from '../../../redux/reducer/ProductsSlice';

const cx = classNames.bind(styles);

function CartMobile({ data }) {
    const dispatch = useDispatch();
    return (
        <div className={cx('wrap')}>
            <span className={cx('trash')}>{trash}</span>
            {data.map((item, index) => {
                return <CartMobileItem data={item} key={index} />;
            })}

            <div className={cx('checkout')}>
                <Button onClick={() => dispatch(productsSlice.actions.destroyCart())}>Delete All</Button>
                <Button primary className={cx('main-btn')} to={`${process.env.REACT_APP_ROOT}/checkout`}>
                    Checkout All
                </Button>
            </div>
        </div>
    );
}

export default CartMobile;
