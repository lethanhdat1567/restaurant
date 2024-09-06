import classNames from 'classnames/bind';
import styles from './BookingHistory.module.scss';
import TableHistory from './components/TableHistory/TableHistory';
import { useEffect, useState } from 'react';
import { request } from '../../utils/request';
import { useSelector } from 'react-redux';
import Loading from '../../components/Loading/Loading';

const cx = classNames.bind(styles);

function BookingHistory() {
    const [dataBooking, setDataBooking] = useState([]);
    const user = useSelector((state) => state.user.user);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        if (user.id) {
            request
                .get(`booking/${user.id}`)
                .then((res) => {
                    setDataBooking(res.data.data);
                    setLoading(false);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, [user.id]);
    return (
        <div className={cx('wrap')}>
            {loading ? (
                <div className={cx('loading')}>
                    <Loading />
                </div>
            ) : (
                <TableHistory data={dataBooking} />
            )}
        </div>
    );
}

export default BookingHistory;
