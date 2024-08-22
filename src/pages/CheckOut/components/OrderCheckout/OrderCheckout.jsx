import OrderInfo from '../../../../components/OrderInfo/OrderInfo';
import styles from './OrderCheckout.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function OrderCheckout() {
    return (
        <div className={cx('warp')}>
            <h3 className={cx('title')}>Your order</h3>
            <ul className={cx('list')}>
                <div className={cx('header')}>
                    <span className={cx('item')}>Food</span>
                    <span className={cx('item')}>Subtotal</span>
                </div>
                <OrderInfo />
                <OrderInfo />
                <OrderInfo />
                <OrderInfo />
                <OrderInfo />
            </ul>
        </div>
    );
}

export default OrderCheckout;
