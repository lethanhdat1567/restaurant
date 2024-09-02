import { useSelector } from 'react-redux';
import OrderInfo from '../../../../components/OrderInfo/OrderInfo';
import styles from './OrderCheckout.module.scss';
import classNames from 'classnames/bind';
import priceTrander from '../../../../utils/priceTranfer';

const cx = classNames.bind(styles);

function OrderCheckout({ data }) {
    const total = useSelector((state) => state.products.totalMoney);
    return (
        <div className={cx('warp')}>
            <h3 className={cx('title')}>Your order</h3>
            <ul className={cx('list')}>
                <div className={cx('header')}>
                    <span className={cx('item')}>Food</span>
                    <span className={cx('item')}>Subtotal</span>
                </div>
                {data.map((item, index) => {
                    return <OrderInfo key={index} data={item} />;
                })}
            </ul>
            <div className={cx('total')}>Your total: {priceTrander(total)}</div>
        </div>
    );
}

export default OrderCheckout;
