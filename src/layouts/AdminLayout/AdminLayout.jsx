import classNames from 'classnames/bind';
import styles from './AdminLayout.module.scss';
import HeaderAdmin from '../components/HeaderAdmin/HeaderAdmin';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faGear, faHouse } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const navbar = [
    {
        name: 'HomePage',
        icon: <FontAwesomeIcon icon={faHouse} className="fa-lg" />,
        path: 'admin/home',
    },
    {
        name: 'Users',
        icon: <FontAwesomeIcon icon={faUser} className="fa-lg" />,
        path: 'admin/users',
    },
    {
        name: 'Products',
        icon: <FontAwesomeIcon icon={faCartShopping} className="fa-lg" />,
        path: 'admin/products',
    },
    {
        name: 'Setting',
        icon: <FontAwesomeIcon icon={faGear} className="fa-lg" />,
        path: 'admin/setting',
    },
];

function AdminLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <HeaderAdmin />
            <div className={cx('content')}>
                <div className="row">
                    <div className="col-2">
                        <div className={cx('nav')}>
                            <h2 className={cx('title-nav')}>LISTS</h2>
                            {navbar.map((item, index) => {
                                return (
                                    <Link
                                        to={`${process.env.REACT_APP_ROOT}/${item.path}`}
                                        className={cx('btn')}
                                        key={index}
                                    >
                                        <span className={cx('icon', 'fa-lg')}>{item.icon}</span>
                                        <span className={cx('name')}>{item.name}</span>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                    <div className="col-10">
                        <div className={cx('body')}>{children}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminLayout;
