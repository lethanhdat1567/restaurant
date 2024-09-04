import classNames from 'classnames/bind';
import styles from './UserInfo.module.scss';
import priceTrander from '../../../../utils/priceTranfer';
import Skeleton from 'react-loading-skeleton';

const cx = classNames.bind(styles);

function UserInfo({ data }) {
    console.log(data);
    const listItem = [
        {
            title: 'Fullname',
            info: data?.fullname,
        },
        {
            title: 'Phone Number',
            info: data?.phone_number,
        },
        {
            title: 'Address',
            info: data?.address,
        },
        {
            title: 'Date',
            info: data?.created_at,
        },
    ];
    return (
        <div className={cx('wrap')}>
            <h3 className={cx('title')}>Your infomation:</h3>
            <p className={cx('info-total')}>
                Total Money: <span className={cx('sub-total')}>{priceTrander(data?.total_money)}</span>
            </p>
            {listItem.map((item, index) => {
                return (
                    <p className={cx('info')} key={index}>
                        {item.title}: <span className={cx('sub')}>{item.info}</span>
                    </p>
                );
            })}
        </div>
    );
}

export default UserInfo;
