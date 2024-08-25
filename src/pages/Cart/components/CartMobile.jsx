import classNames from 'classnames/bind';
import styles from './CartMobile.module.scss';
import Deposite from '../../../components/Deposite/Deposite';
import { trash } from '../../../assets/Icons';
import Button from '../../../components/Button/Button';

const cx = classNames.bind(styles);

function CartMobile() {
    return (
        <div className={cx('wrap')}>
            <span className={cx('trash')}>{trash}</span>
            <div className={cx('item')}>
                <div className={cx('info')}>
                    <p className={cx('main')}>Food</p>
                    <p className={cx('sub')}>Crispy chicken breasts</p>
                </div>
                <div className={cx('info')}>
                    <p className={cx('main')}>Price</p>
                    <p className={cx('sub')}> $24.99</p>
                </div>
                <div className={cx('info')}>
                    <p className={cx('main')}>Quantity</p>
                    <Deposite />
                </div>
                <div className={cx('info')}>
                    <p className={cx('main')}>Subtotal</p>
                    <p className={cx('sub')}>$24.99</p>
                </div>
            </div>
            <div className={cx('checkout')}>
                <div className={cx('top')}>
                    <Button>Copon code</Button>
                    <Button primary>Apply coupon</Button>
                </div>
                <Button primary className={cx('main-btn')}>
                    Update Cart
                </Button>
            </div>
        </div>
    );
}

export default CartMobile;
