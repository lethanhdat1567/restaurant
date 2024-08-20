import styles from './User.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { cart } from '../../../../../assets/Icons';

const cx = classNames.bind(styles);

function User() {
    return (
        <div className={cx('user')}>
            <span className={cx('item')}>11:24 we’re open</span>
            <span className={cx('icon')}>{cart}</span>
        </div>
    );
}

export default User;
