import classNames from 'classnames/bind';
import styles from './OrderInfo.module.scss';
import priceTrander from '../../utils/priceTranfer';

const cx = classNames.bind(styles);

function OrderInfo() {
    return (
        <li className={cx('wrap')}>
            <span className={cx('separate')}></span>
            <div className={cx('food')}>
                <p className={cx('name')}>Crispy chicken breasts</p>
                <span className={cx('quantity')}>x 1</span>
            </div>
            <div className={cx('subtotal')}>{priceTrander(24.99)}</div>
        </li>
    );
}

export default OrderInfo;
