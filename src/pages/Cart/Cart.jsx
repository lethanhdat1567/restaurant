import classNames from 'classnames/bind';
import styles from './Cart.module.scss';
import Deposite from '../../components/Deposite/Deposite';
import OrderCheckout from '../CheckOut/components/OrderCheckout/OrderCheckout';
import CartMobile from './components/CartMobile';
import Table from '../../components/Table/Table';

const cx = classNames.bind(styles);

function Cart() {
    return (
        <div className={cx('cart')}>
            <div className="container">
                <div className={cx('wrapper')}>
                    <Table />
                    <CartMobile />
                    <div className={cx('info')}>
                        <OrderCheckout />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
