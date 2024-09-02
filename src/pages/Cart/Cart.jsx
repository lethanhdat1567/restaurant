import classNames from 'classnames/bind';
import styles from './Cart.module.scss';
import Deposite from '../../components/Deposite/Deposite';
import OrderCheckout from '../CheckOut/components/OrderCheckout/OrderCheckout';
import CartMobile from './components/CartMobile';
import Table from '../../components/Table/Table';
import { useSelector } from 'react-redux';

const cx = classNames.bind(styles);

function Cart() {
    // Redux
    const products = useSelector((state) => state.products.cart);

    return (
        <div className={cx('cart')}>
            <div className="container">
                <div className={cx('wrapper')}>
                    <Table data={products} />
                    <CartMobile data={products} />
                    <div className={cx('info')}>
                        <OrderCheckout data={products} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
