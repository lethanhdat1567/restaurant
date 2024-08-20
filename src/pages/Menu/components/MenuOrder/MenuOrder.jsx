import classNames from 'classnames/bind';
import styles from './MenuOrder.module.scss';
import Button from '../../../../components/Button/Button';
import { imgs } from '../../../../assets/Imgs/imgs';

const cx = classNames.bind(styles);

function MenuOrder() {
    return (
        <section className={cx('menu-order')}>
            <img src={imgs.orderBanner} alt="" className={cx('banner')} />
            <div className={cx('content')}>
                <h2 className={cx('title')}>Food Is Not Just Eating Energy</h2>
                <p className={cx('desc')}>It’s an experience.</p>
                <Button className={cx('btn')} primary>
                    Order now
                </Button>
            </div>
        </section>
    );
}

export default MenuOrder;
