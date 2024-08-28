import classNames from 'classnames/bind';
import styles from './HeaderAdmin.module.scss';
import { imgs } from '../../../assets/Imgs/imgs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { Dropdown, Space } from 'antd';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const items = [
    {
        key: '1',
        label: <Link className={cx('alert-item')}>Setting</Link>,
    },
    {
        key: '2',
        label: <Link className={cx('alert-item')}>Logout</Link>,
    },
];

const dropdownAlert = () => {
    return (
        <div className={cx('alert-dropdown')}>
            <h3 className={cx('head')}>Your notification</h3>
            <div className={cx('wrap')}>
                <h4 className={cx('title')}>User: Dat Lee</h4>
                <p className={cx('desc')}>Dat Lee have booked a table</p>
            </div>
            <div className={cx('wrap')}>
                <h4 className={cx('title')}>User: Dat Lee</h4>
                <p className={cx('desc')}>Dat Lee have order a kem danh rang</p>
            </div>
            <div className={cx('wrap')}>
                <h4 className={cx('title')}>User: Dat Lee</h4>
                <p className={cx('desc')}>Dat Lee have booked a table</p>
            </div>
            <div className={cx('wrap')}>
                <h4 className={cx('title')}>User: Dat Lee</h4>
                <p className={cx('desc')}>Dat Lee have booked a table</p>
            </div>
        </div>
    );
};

function HeaderAdmin() {
    return (
        <div className={cx('admin')}>
            <div className="container">
                <div className={cx('wrapper')}>
                    <div className={cx('left')}>
                        <div className={cx('logo-wrap')}>
                            <img src={imgs.logo} alt="" />
                            <p className={cx('logo-name')}>Wow Wraps</p>
                        </div>
                    </div>
                    <div className={cx('right')}>
                        <div className={cx('user-wrap')}>
                            <Space direction="vertical">
                                <Space wrap size={'large'}>
                                    <Dropdown dropdownRender={dropdownAlert} placement="bottom" arrow>
                                        <FontAwesomeIcon icon={faBell} className={cx('icon', 'fa-xl')} />
                                    </Dropdown>
                                </Space>
                            </Space>
                            <Space direction="vertical">
                                <Space wrap>
                                    <Dropdown menu={{ items }} placement="bottom" arrow>
                                        <FontAwesomeIcon icon={faGear} className={cx('icon', 'fa-xl')} />
                                    </Dropdown>
                                </Space>
                            </Space>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderAdmin;
