import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { imgs } from '../../../../../../../assets/Imgs/imgs';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Item() {
    return (
        <div className={cx('item')}>
            <Link className={cx('link-img')}>
                <img src={imgs.RestaurantMain2} alt="" className={cx('img')} />
            </Link>
            <div className={cx('info')}>
                <Link className={cx('link')}>
                    <p className={cx('name')}>asasas</p>
                </Link>
                <p className={cx('price')}>1231 d</p>
            </div>
        </div>
    );
}

export default Item;
