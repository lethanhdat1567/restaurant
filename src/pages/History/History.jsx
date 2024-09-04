import classNames from 'classnames/bind';
import styles from './History.module.scss';
import HistoryCart from './components/HistoryCart/HistoryCart';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { request } from '../../utils/request';
import Loading from '../../components/Loading/Loading';

const cx = classNames.bind(styles);

function History() {
    const user = useSelector((state) => state.user.user);

    const [historyData, setHistoryData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        if (user.id) {
            request
                .get(`history/${user.id}`)
                .then((res) => {
                    setHistoryData(res.data.data);
                    setLoading(false);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, [user.id]);
    console.log(historyData);

    return (
        <div className={cx('history')}>
            <div className="container">
                <div className={cx('wrapper')}>
                    <h2 className={cx('title')}>History</h2>
                    {loading ? (
                        <Loading />
                    ) : (
                        <div className={cx('cart-wrap')}>
                            {historyData.map((item, index) => {
                                return <HistoryCart data={item} key={index} />;
                            })}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default History;
