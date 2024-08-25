import styles from './User.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { cart } from '../../../../../assets/Icons';
import { Link } from 'react-router-dom';
import Search from './components/Search/Search';
import Cart from './components/Cart/Cart';
import UserMenu from './components/UserMenu/UserMenu';

const cx = classNames.bind(styles);

function User() {
    return (
        <div className={cx('user')}>
            <Search />
            <Cart />
            <UserMenu />
        </div>
    );
}

export default User;
