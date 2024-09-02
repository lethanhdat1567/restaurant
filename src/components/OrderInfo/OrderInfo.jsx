import classNames from 'classnames/bind';
import styles from './OrderInfo.module.scss';
import priceTrander from '../../utils/priceTranfer';

const cx = classNames.bind(styles);

function OrderInfo({ data }) {
    return (
        <li className={cx('wrap')}>
            <span className={cx('separate')}></span>
            <div className={cx('food')}>
                <p className={cx('name')}>{data.name}</p>
                <span className={cx('quantity')}>x {data.quantity}</span>
            </div>
            <div className={cx('subtotal')}>{priceTrander(data.total)}</div>
        </li>
    );
}

export default OrderInfo;
