import classNames from 'classnames/bind';
import styles from './CartMobile.module.scss';
import Deposite from '../../../components/Deposite/Deposite';
import { useState } from 'react';
import priceTrander from '../../../utils/priceTranfer';

const cx = classNames.bind(styles);

function CartMobileItem({ data }) {
    const [quantity, setQuantity] = useState(data.quantity);

    return (
        <div className={cx('item')}>
            <div className={cx('info')}>
                <p className={cx('main')}>Food</p>
                <p className={cx('sub')}>{data.name}</p>
            </div>
            <div className={cx('info')}>
                <p className={cx('main')}>Quantity</p>
                <Deposite id={data.product_id} quantity={quantity} setQuantity={setQuantity} />
            </div>
            <div className={cx('info')}>
                <p className={cx('main')}>Subtotal</p>
                <p className={cx('sub')}>{priceTrander(data.total)}</p>
            </div>
        </div>
    );
}

export default CartMobileItem;
