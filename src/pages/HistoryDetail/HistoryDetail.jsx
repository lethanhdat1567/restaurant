import classNames from 'classnames/bind';
import styles from './HistoryDetail.module.scss';
import HistoryCart from '../../components/HistoryCart/HistoryCart';
import UserInfo from './components/UserInfo/UserInfo';
import { useEffect, useState } from 'react';
import { request } from '../../utils/request';
import { useSelector } from 'react-redux';
import Skeleton from 'react-loading-skeleton';
import Loading from '../../components/Loading/Loading';

const cx = classNames.bind(styles);

function HistoryDetail() {
    // redux
    const user = useSelector((state) => state.user.user);

    // hooks
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [userInfo, setUserInfo] = useState([]);

    // handle function
    useEffect(() => {
        setLoading(true);
        if (user.id) {
            request
                .get(`history/detail/${user.id}`)
                .then((res) => {
                    const { products, userInfo } = res.data.data;
                    setProducts(products);
                    setUserInfo(userInfo);
                    setLoading(false);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, [user.id]);

    return (
        <div className={cx('wrap')}>
            <div className="container">
                <div className={cx('body')}>
                    <div className="row">
                        <div className="col-12 col-lg-4">
                            <div className={cx('info')}>
                                {loading ? (
                                    <Skeleton count={5} height={40} style={{ margin: '20px 0px' }} />
                                ) : (
                                    <UserInfo data={userInfo} />
                                )}
                            </div>
                        </div>
                        <div className="col-12 col-lg-8">
                            <div className={cx('cart-wrap', { loading: loading })}>
                                {loading ? (
                                    <div className={cx('loading')}>
                                        <Loading />
                                    </div>
                                ) : (
                                    <>
                                        <h3 className={cx('cart-title')}>Your carts:</h3>
                                        <div className={cx('carts')}>
                                            {products.map((item, index) => {
                                                return <HistoryCart data={item} key={index} />;
                                            })}
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HistoryDetail;
