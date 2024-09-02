import classNames from 'classnames/bind';
import styles from './CartMobile.module.scss';
import Deposite from '../../../components/Deposite/Deposite';
import { trash } from '../../../assets/Icons';
import Button from '../../../components/Button/Button';
import { useState } from 'react';
import CartMobileItem from './CartMobileItem';

const cx = classNames.bind(styles);

function CartMobile({ data }) {
    return (
        <div className={cx('wrap')}>
            <span className={cx('trash')}>{trash}</span>
            {data.map((item, index) => {
                return <CartMobileItem data={item} key={index} />;
            })}

            <div className={cx('checkout')}>
                <div className={cx('top')}>
                    <Button>Copon code</Button>
                    <Button primary>Apply coupon</Button>
                </div>
                <Button primary className={cx('main-btn')}>
                    Update Cart
                </Button>
            </div>
        </div>
    );
}

export default CartMobile;
