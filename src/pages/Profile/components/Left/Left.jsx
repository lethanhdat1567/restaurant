import classNames from 'classnames/bind';
import styles from './Left.module.scss';
import { imgs } from '../../../../assets/Imgs/imgs';
import NavItem from './components/NavItem/NavItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faQuestionCircle, faUser } from '@fortawesome/free-regular-svg-icons';
import {
    faCartShopping,
    faClockRotateLeft,
    faQuestion,
    faUserPen,
    faUtensils,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import moment from 'moment/moment';
import ImgAvatar from '../../../../components/ImgAvatar/ImgAvatar';

const cx = classNames.bind(styles);

function Left() {
    // redux
    const user = useSelector((state) => state.user.user);
    const avatar = useSelector((state) => state.user.avatar);

    const NavData = [
        {
            title: 'Manage Account',

            children: [
                {
                    name: 'Thong tin ca nhan',
                    icon: <FontAwesomeIcon icon={faUser} />,
                    href: `profile/user/${user.id}`,
                },
                {
                    name: 'Thong tin va quyen rieng tu',
                    icon: <FontAwesomeIcon icon={faEnvelope} />,
                },
            ],
        },
        {
            title: 'My items',
            children: [
                { name: 'Gio hang', icon: <FontAwesomeIcon icon={faCartShopping} />, href: 'cart' },
                { name: 'Cart History', icon: <FontAwesomeIcon icon={faClockRotateLeft} />, href: 'history' },
                {
                    name: 'Booking History',
                    icon: <FontAwesomeIcon icon={faUtensils} />,
                    href: `booking/${user.id}`,
                },
            ],
        },

        {
            title: 'Dich vu khach hang',
            children: [
                { name: 'Help', icon: <FontAwesomeIcon icon={faQuestionCircle} /> },
                { name: 'Terms of Use', icon: <FontAwesomeIcon icon={faQuestion} /> },
            ],
        },
    ];
    return (
        <div className={cx('left')}>
            <div className={cx('user')}>
                <img src={imgs.userBg} alt="" className={cx('img')} />
                <div className={cx('user-info-wrap')}>
                    <div className={cx('avatar')}>
                        <div className={cx('avatar-img')}>
                            <ImgAvatar src={avatar} />
                        </div>
                        <Link to={`${process.env.REACT_APP_ROOT}/profile/user/${user.id}`}>
                            <div className={cx('edit-wrap')}>
                                <span className={cx('edit')}>
                                    <FontAwesomeIcon icon={faUserPen} className="fa-xl" />
                                </span>
                            </div>
                        </Link>
                        <div className={cx('modal')}></div>
                    </div>
                    <div className={cx('user-info')}>
                        <p className={cx('name')}>{user.fullname}</p>
                        <p className={cx('date')}>Ngay dang ki: {moment(user.created_at).format('DD/MM/YYYY')}</p>
                    </div>
                </div>
            </div>
            <div className={cx('nav')}>
                {NavData.map((item, index) => {
                    return <NavItem data={item} key={index} />;
                })}
            </div>
        </div>
    );
}

export default Left;
