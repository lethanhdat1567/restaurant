import styles from './CheckOut.module.scss';
import classNames from 'classnames/bind';
import FormCheckout from './components/FormCheckout/FormCheckout';
import OrderCheckout from './components/OrderCheckout/OrderCheckout';
import TranferMethod from './components/TranferMethod/TranferMethod';

const cx = classNames.bind(styles);

function CheckOut() {
    return (
        <section className={cx('checkout')}>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 g-5">
                    <div className="col">
                        <FormCheckout />
                    </div>
                    <div className="col">
                        <div className={cx('order-checkout')}>
                            <OrderCheckout />
                        </div>
                    </div>
                    <div className="col">
                        <TranferMethod />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CheckOut;
