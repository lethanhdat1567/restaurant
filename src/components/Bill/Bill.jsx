import classNames from 'classnames/bind';
import styles from './Bill.module.scss';

const cx = classNames.bind(styles);

function Bill() {
    return (
        <div className={cx('wrap')}>
            <div className={cx('item')}>
                <p className={cx('main')}>VAT</p>
                <p className={cx('sub')}>Free</p>
            </div>
            <div className={cx('item')}>
                <p className={cx('main')}>Shipping</p>
                <p className={cx('sub')}>10.100 d</p>
            </div>
            <div className={cx('item')}>
                <p className={cx('main')}>Total</p>
                <p className={cx('sub')}>380.34 d</p>
            </div>
        </div>
    );
}

export default Bill;
