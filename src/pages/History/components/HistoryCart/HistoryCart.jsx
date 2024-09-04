import classNames from 'classnames/bind';
import styles from './HistoryCart.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruckFast } from '@fortawesome/free-solid-svg-icons';
import Table from '../../../../components/Table/Table';
import { useSelector } from 'react-redux';
import priceTrander from '../../../../utils/priceTranfer';

const cx = classNames.bind(styles);

function HistoryCart({ data }) {
    const descData = [
        {
            label: 'Date',
            info: data?.created_at,
        },
    ];
    return (
        <Link className={cx('wrap')} to={`${process.env.REACT_APP_ROOT}/history/detail/1`}>
            <div className={cx('info')}>
                <h4 className={cx('title')}>
                    Total: <span className={cx('title-sub')}>{priceTrander(data.total_money)}</span>
                </h4>
                {descData.map((item, index) => {
                    return (
                        <p className={cx('desc')} key={index}>
                            {item.label}: <span className={cx('desc-sub')}>{item.info}</span>
                        </p>
                    );
                })}
            </div>
            <div className={cx('status')}>
                <FontAwesomeIcon icon={faTruckFast} className="fa-xl" />
                <span className={cx('status-desc')}>Giao hàng thành công</span>
            </div>
        </Link>
    );
}

export default HistoryCart;
