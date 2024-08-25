import classNames from 'classnames/bind';
import styles from './Right.module.scss';
import Info from './components/Info/Info';
import Cart from './components/Cart/Cart';

const cx = classNames.bind(styles);

function Right() {
    return (
        <div className={cx('right')}>
            <Info />
            <Cart />
        </div>
    );
}

export default Right;
