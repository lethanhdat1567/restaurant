import styles from './CheckOut.module.scss';
import classNames from 'classnames/bind';
import FormCheckout from './components/FormCheckout/FormCheckout';
import OrderCheckout from './components/OrderCheckout/OrderCheckout';
import { useSelector } from 'react-redux';

const cx = classNames.bind(styles);

function CheckOut() {
    const products = useSelector((state) => state.products.cart);
    return (
        <section className={cx('checkout')}>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 g-5">
                    <div className="col">
                        <FormCheckout />
                    </div>
                    <div className="col">
                        <div className={cx('order-checkout')}>
                            <OrderCheckout data={products} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CheckOut;
