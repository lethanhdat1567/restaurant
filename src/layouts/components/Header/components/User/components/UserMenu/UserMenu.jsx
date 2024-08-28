import classNames from 'classnames/bind';
import styles from './UserMenu.module.scss';
import { imgs } from '../../../../../../../assets/Imgs/imgs';
import { Dropdown, Space } from 'antd';
import { Link } from 'react-router-dom';
import { request } from '../../../../../../../utils/request';
import { useStateContext } from '../../../../../../../contexts/ContextProvider';

const cx = classNames.bind(styles);

function UserMenu() {
    const { setUser, setToken } = useStateContext();

    function handleLogout() {
        try {
            request.get('logout').then((res) => {
                console.log(res);

                setUser(null);
                setToken(null);
            });
        } catch (error) {
            console.log(error);
        }
    }

    const dropdown = () => (
        <div className={cx('dropdown')}>
            <div className={cx('heading')}>
                <img src={imgs.RestaurantMain1} alt="" className={cx('avatar')} />
                <div className={cx('info')}>
                    <p className={cx('name')}>Le Thanh Dat</p>
                    <p className={cx('phone')}>0909364029</p>
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
                    <img src={imgs.blog2} alt="" className={cx('img')} />
                </div>
            </Space>
        </Dropdown>
    );
}

export default UserMenu;
