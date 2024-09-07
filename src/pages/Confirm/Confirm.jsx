import classNames from 'classnames/bind';
import styles from './Confirm.module.scss';
import { imgs } from '../../assets/Imgs/imgs';
import { confirmDecor1, confirmDecor2 } from '../../assets/Icons';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { confirmSlice } from '../../redux/reducer/ConfirmSlice';
import moment from 'moment';

const cx = classNames.bind(styles);

function Confirm() {
    const confirmUser = useSelector((state) => state.confirm.confirmUser);

    const dispatch = useDispatch();
    useEffect(() => {
        const handleBeforeUnload = () => {
            dispatch(confirmSlice.actions.setConfirm({}));
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, [dispatch]);

    return (
        <div className={cx('wrap')}>
            <div className="container">
                <div className={cx('body')}>
                    <div className="row row-cols-1 row-cols-lg-2">
                        <div className="col">
                            <div className={cx('info')}>
                                <div className={cx('info-title')}>
                                    <FontAwesomeIcon icon={faCheckCircle} className={cx('icon')} />
                                    <h3 className={cx('title')}>Thank you very much!</h3>
                                </div>
                                <div className={cx('info-desc')}>
                                    <h4 className={cx('confirm-title')}>Your order is confirmed</h4>
                                    <p className={cx('confirm-desc')}>
                                        Thank you for shopping with us. Your order will reach you for about 2-3 days
                                    </p>
                                    <div className={cx('cart')}>
                                        <div className={cx('groyp')}>
                                            <p className={cx('main')}>Order ID:</p>
                                            <p className={cx('sub')}>{confirmUser.id}</p>
                                        </div>
                                        <div className={cx('groyp')}>
                                            <p className={cx('main')}>Order date:</p>
                                            <p className={cx('sub')}>
                                                {moment(confirmUser.created_at).format('DD/MM/YYYY')}
                                            </p>
                                        </div>
                                        <div className={cx('groyp')}>
                                            <p className={cx('main')}>Address:</p>
                                            <p className={cx('sub')}>{confirmUser.address}</p>
                                        </div>
                                    </div>
                                </div>
                                <Link
                                    to={`${process.env.REACT_APP_ROOT}/history/detail/${confirmUser.id}`}
                                    className={cx('btn-link')}
                                >
                                    View order detail
                                </Link>
                            </div>
                        </div>
                        <div className="col">
                            <div className={cx('banner')}>
                                <img src={imgs.hamberger} alt="" className={cx('img')} />
                                <span className={cx('decor-1')}>{confirmDecor1}</span>
                                <span className={cx('decor-2')}>{confirmDecor2}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Confirm;
