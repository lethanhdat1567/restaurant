import classNames from 'classnames/bind';
import styles from './Deposite.module.scss';

const cx = classNames.bind(styles);

function Deposite() {
    return (
        <div className={cx('cart-btn-wrap')}>
            <button className={cx('btn-count')}>-</button>
            <span className={cx('count-info')}>1</span>
            <button className={cx('btn-count')}>+</button>
        </div>
    );
}

export default Deposite;
