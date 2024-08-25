import classNames from 'classnames/bind';
import styles from './Cart.module.scss';
import { imgs } from '../../../../../../../assets/Imgs/imgs';

const cx = classNames.bind(styles);

function Item() {
    return (
        <div className={cx('item')}>
            <img src={imgs.RestaurantMain2} alt="" className={cx('img')} />
            <div className={cx('info')}>
                <p className={cx('item-name')}>sadadasdasdasdasdsadadasdasdasdasdsadadasdasdasdasd</p>
                <p className={cx('price')}>1212.12 d</p>
            </div>
        </div>
    );
}

export default Item;
