import classNames from 'classnames/bind';
import styles from './Left.module.scss';
import { imgs } from '../../../../assets/Imgs/imgs';
import NavItem from './components/NavItem/NavItem';

const cx = classNames.bind(styles);

function Left() {
    return (
        <div className={cx('left')}>
            <div className={cx('user')}>
                <img src={imgs.userBg} alt="" className={cx('img')} />
                <div className={cx('user-info-wrap')}>
                    <img src={imgs.RestaurantMain1} alt="" className={cx('avatar')} />
                    <div className={cx('user-info')}>
                        <p className={cx('name')}>Le Thanh Dat</p>
                        <p className={cx('date')}>Ngay dang ki: 12/3/2323</p>
                    </div>
                </div>
            </div>
            <div className={cx('nav')}>
                <NavItem />
                <NavItem />
                <NavItem />
            </div>
        </div>
    );
}

export default Left;
