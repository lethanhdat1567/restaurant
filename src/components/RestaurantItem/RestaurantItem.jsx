import classNames from 'classnames/bind';
import styles from './RestaurantItem.module.scss';
import { imgs } from '../../assets/Imgs/imgs';

const cx = classNames.bind(styles);

function RestaurantItem({ data }) {
    return (
        <div className="col">
            <div className={cx('wrap')}>
                <img className={cx('main')} src={imgs[data.main]} alt="" />
                <img className={cx('head')} src={imgs[data.sub]} alt="" />
            </div>
        </div>
    );
}

export default RestaurantItem;
