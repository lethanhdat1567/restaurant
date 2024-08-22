import classNames from 'classnames/bind';
import styles from './Cart.module.scss';
import Deposite from '../../components/Deposite/Deposite';
import Table from '../../components/Table/Table';
import OrderCheckout from '../CheckOut/components/OrderCheckout/OrderCheckout';

const cx = classNames.bind(styles);

function Cart() {
    return (
        <div className={cx('cart')}>
            <div className="container">
                <div className={cx('wrapper')}>
                    <Table />
                    <div className={cx('info')}>
                        <OrderCheckout />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
