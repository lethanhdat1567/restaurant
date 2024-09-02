import classNames from 'classnames/bind';
import styles from './Bill.module.scss';

const cx = classNames.bind(styles);

function Bill({ total }) {
    let result = 0;
    if (total) {
        result = Number(total) + 10000;
    }

    return (
        <div className={cx('wrap')}>
            <div className={cx('item')}>
                <p className={cx('main')}>VAT</p>
                <p className={cx('sub')}>Free</p>
            </div>
            <div className={cx('item')}>
                <p className={cx('main')}>Shipping</p>
                <p className={cx('sub')}>10.000 d</p>
            </div>
            <div className={cx('item')}>
                <p className={cx('main')}>Total</p>
                <p className={cx('sub')}>{result}</p>
            </div>
        </div>
    );
}

export default Bill;
