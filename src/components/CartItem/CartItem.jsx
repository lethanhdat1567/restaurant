import classNames from 'classnames/bind';
import styles from './CartItem.module.scss';
import { imgs } from '../../assets/Imgs/imgs';
import Deposite from '../Deposite/Deposite';
import Button from '../Button/Button';
import { trash } from '../../assets/Icons';

const cx = classNames.bind(styles);

function CartItem() {
    return (
        <div className={cx('wrap')}>
            <img src={imgs.RestaurantMain1} alt="" className={cx('img')} />
            <div className={cx('info')}>
                <div className={cx('heading')}>
                    <h3 className={cx('name')}>
                        Highlands Coffee Cà Phê Hòa Tan 3 Trong 1 Vị Đậm Đlands Coffee Cà Phê Hòa Tan 3 Trong 1 Vị Đậm
                        Đlands Coffee Cà Phê Hòa Tan 3 Trong 1 Vị Đậm Đlands Coffee Cà Phê Hòa Tan 3 Trong 1 Vị Đậm
                        Đlands Coffee Cà Phê Hòa Tan 3 Trong 1 Vị Đậm Đà
                    </h3>
                    <p className={cx('price')}>1231.2 d</p>
                </div>
                <div className={cx('footer')}>
                    <Deposite />
                    <Button leftIcon={trash} className={cx('btn')}>
                        Delete
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default CartItem;
