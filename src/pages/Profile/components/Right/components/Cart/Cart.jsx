import classNames from 'classnames/bind';
import styles from './Cart.module.scss';
import CartItem from '../../../../../../components/CartItem/CartItem';
import { useSelector } from 'react-redux';

const cx = classNames.bind(styles);

function Cart() {
    const products = useSelector((state) => state.products.cart);

    return (
        <div className={cx('wrap')}>
            <h2 className={cx('title')}>Gio hang</h2>
            <div className={cx('cart-list')}>
                {products.map((item, index) => {
                    return <CartItem data={item} key={index} />;
                })}
            </div>
        </div>
    );
}

export default Cart;
