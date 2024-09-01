import classNames from 'classnames/bind';
import styles from './UserMenu.module.scss';
import { imgs } from '../../../../../../../assets/Imgs/imgs';
import { Dropdown, Space } from 'antd';
import { Link, redirect } from 'react-router-dom';
import { request } from '../../../../../../../utils/request';
import { useStateContext } from '../../../../../../../contexts/ContextProvider';
import { useDispatch, useSelector } from 'react-redux';
import { usersSlice } from '../../../../../../../redux/reducer/UserSlice';
import ImgAvatar from '../../../../../../../components/ImgAvatar/ImgAvatar';

const cx = classNames.bind(styles);

function UserMenu() {
    // redux
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.user);
    const avatar = useSelector((state) => state.user.avatar);

    const { setUser, setToken } = useStateContext();

    function handleLogout() {
        try {
            request.get('logout').then((res) => {
                setUser(null);
                setToken(null);
                dispatch(usersSlice.actions.getUser({}));
                redirect('/');
            });
        } catch (error) {
            console.log(error);
        }
    }

    const dropdown = () => (
        <div className={cx('dropdown')}>
            <div className={cx('heading')}>
                <div className={cx('avatar')}>
                    <ImgAvatar src={avatar} />
                </div>
                <div className={cx('info')}>
                    <p className={cx('name')}>{user.fullname}</p>
                    <p className={cx('phone')}>{user.phone_number}</p>
                </div>
            </div>
            <ul className={cx('list')}>
                <Link to={`${process.env.REACT_APP_ROOT}/profile`} className={cx('item-link')}>
                    <li className={cx('item')}>Profile</li>
                </Link>
                <Link className={cx('item-link')}>
                    <li className={cx('item')}>Your cart</li>
                </Link>
                <Link className={cx('item-link')}>
                    <li className={cx('item')}>History</li>
                </Link>
                <hr style={{ color: '#fff' }} />
                <Link className={cx('item-link')} onClick={handleLogout}>
                    <li className={cx('item')}>LogOut</li>
                </Link>
            </ul>
            <div className={cx('custom-dropdown-arrow')}></div>
        </div>
    );

    return (
        <Dropdown dropdownRender={dropdown} mouseEnterDelay={0}>
            <Space>
                <div className={cx('user-menu')}>
                    <div className={cx('img')}>
                        <ImgAvatar src={avatar} />
                    </div>
                </div>
            </Space>
        </Dropdown>
    );
}

export default UserMenu;
