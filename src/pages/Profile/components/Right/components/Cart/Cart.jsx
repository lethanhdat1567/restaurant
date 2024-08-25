import classNames from 'classnames/bind';
import styles from './Cart.module.scss';
import CartItem from '../../../../../../components/CartItem/CartItem';

const cx = classNames.bind(styles);

function Cart() {
    return (
        <div className={cx('wrap')}>
            <h2 className={cx('title')}>Gio hang</h2>
            <div className={cx('cart-list')}>
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
            </div>
        </div>
    );
}

export default Cart;
