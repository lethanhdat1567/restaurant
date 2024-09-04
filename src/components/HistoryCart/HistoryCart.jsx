import classNames from 'classnames/bind';
import styles from './HistoryCart.module.scss';
import { Link } from 'react-router-dom';
import priceTrander from '../../utils/priceTranfer';
import { Skeleton } from 'antd';

const cx = classNames.bind(styles);

function HistoryCart({ data }) {
    return (
        <div className={cx('wrap')}>
            <img src={`${process.env.REACT_APP_BACKEND}${data.thumbnail}`} className={cx('img')} />
            <div className={cx('info-wrap')}>
                <div className={cx('info')}>
                    <h4 className={cx('title')}>
                        {data.title} <span className={cx('quantity')}>{data.quantity}x</span>
                    </h4>
                    <p className={cx('desc')}>{data.description}</p>
                </div>
                <div className={cx('product-info')}>
                    <p className={cx('price')}>{priceTrander(data.total)}</p>
                    <Link to={`${process.env.REACT_APP_ROOT}/productdetail/${data.id}`}>
                        <p className={cx('link-title')}>Show product detail</p>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default HistoryCart;
