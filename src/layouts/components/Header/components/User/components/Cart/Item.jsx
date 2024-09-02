import classNames from 'classnames/bind';
import styles from './Cart.module.scss';
import { imgs } from '../../../../../../../assets/Imgs/imgs';
import priceTrander from '../../../../../../../utils/priceTranfer';

const cx = classNames.bind(styles);

function Item({ data }) {
    return (
        <div className={cx('item')}>
            <img src={`${process.env.REACT_APP_BACKEND}${data.img}`} alt="" className={cx('img')} />
            <div className={cx('info')}>
                <p className={cx('item-name')}>{data.name}</p>
                <div className={cx('info-prod')}>
                    <p className={cx('price')}>{priceTrander(data.total)}</p>
                    <span className={cx('quantity')}>{data.quantity}x</span>
                </div>
            </div>
        </div>
    );
}

export default Item;
