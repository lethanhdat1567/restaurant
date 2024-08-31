import classNames from 'classnames/bind';
import styles from './AdminHeaderOnly.module.scss';
import HeaderAdmin from '../components/HeaderAdmin/HeaderAdmin';

const cx = classNames.bind(styles);

function AdminHeaderOnly({ children }) {
    return (
        <div className={cx('wrapper')}>
            <HeaderAdmin />
            <div className={cx('content')}>{children}</div>
        </div>
    );
}

export default AdminHeaderOnly;
