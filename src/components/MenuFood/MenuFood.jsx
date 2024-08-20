import classNames from 'classnames/bind';
import styles from './MenuFood.module.scss';
import Button from '../../components/Button/Button';
import priceTrander from '../../utils/priceTranfer';
import { imgs } from '../../assets/Imgs/imgs';

const cx = classNames.bind(styles);

function MenuFood({ data }) {
    return (
        <section className={cx('menu-food')}>
            <img src={imgs[data.img]} alt="" className={cx('img')} />
            <div className={cx('info')}>
                <h3 className={cx('title')}>{data.name}</h3>
                <p className={cx('desc')}>{data.desc}</p>
            </div>
            <div className={cx('order')}>
                <Button text className={cx('btn')}>
                    Order now
                </Button>
                <span className={cx('price')}>{priceTrander(data.price)}</span>
            </div>
        </section>
    );
}

export default MenuFood;
