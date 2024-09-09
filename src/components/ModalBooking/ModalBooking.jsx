import classNames from 'classnames/bind';
import styles from './ModalBooking.module.scss';
import { Modal } from 'antd';
import { imgs } from '../../assets/Imgs/imgs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const cx = classNames.bind(styles);

function ModalBooking({ open, setOpen }) {
    const user = useSelector((state) => state.user.user);
    return (
        <Modal open={open} centered onCancel={() => setOpen(false)} onOk={() => setOpen(false)}>
            <div className={cx('info-wrap')}>
                <div className={cx('check')}>
                    <h3 className={cx('title')}>Booking success</h3>
                    <FontAwesomeIcon icon={faCircleCheck} className="fa-xl" style={{ color: 'green' }} />
                </div>
                <p className={cx('desc')}>
                    Thank you for booking at our restaurant. We will contact you shortly to confirm your table.
                </p>
                <h4 className={cx('main-sub')}>Your infomation</h4>
                <div className={cx('info')}>
                    <div className={cx('user-info')}>
                        <p className={cx('main')}>Worp Wrap 1</p>
                        <p className={cx('sub')}>3 People</p>
                    </div>
                    <div className={cx('user-info')}>
                        <p className={cx('main')}>Le Thanh Dat</p>
                        <p className={cx('sub')}>0909364029</p>
                    </div>
                </div>
                <Link to={`${process.env.REACT_APP_ROOT}/booking/${user.id}`} className={cx('btn')}>
                    View booking history
                </Link>
            </div>
        </Modal>
    );
}

export default ModalBooking;
