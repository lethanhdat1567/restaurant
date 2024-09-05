import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { imgs } from '../../../../../../../assets/Imgs/imgs';
import { Link } from 'react-router-dom';
import priceTrander from '../../../../../../../utils/priceTranfer';

const cx = classNames.bind(styles);

function Item({ data, setOpen }) {
    return (
        <Link to={`${process.env.REACT_APP_ROOT}/productdetail/${data.id}`} onClick={() => setOpen(false)}>
            <div className={cx('item')}>
                <img src={`${process.env.REACT_APP_BACKEND}${data.thumbnail}`} alt="" className={cx('img')} />
                <div className={cx('info')}>
                    <p className={cx('name')}>{data.title}</p>
                    <div className={cx('price-wrap')}>
                        {data.discount > 0 ? (
                            <div className={cx('discount')}>
                                <div className={cx('discount-wrap')}>
                                    <span className={cx('old-price')}>{priceTrander(data.price)}</span>
                                    <span className={cx('discount')}>{data.discount}%</span>
                                </div>
                            </div>
                        ) : (
                            ''
                        )}
                        <p className={cx('price')}>{priceTrander(data.total)}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default Item;
