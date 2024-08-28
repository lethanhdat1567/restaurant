import classNames from 'classnames/bind';
import styles from './UserAdmin.module.scss';
import { Button } from 'antd';
import DataTable from '../../components/DataTable/DataTable';

const cx = classNames.bind(styles);

function UserAdmin() {
    return (
        <div className={cx('user')}>
            <div className={cx('head')}>
                <h2 className={cx('title')}>List Users</h2>
                <Button type="primary">Add User</Button>
            </div>
            <div className={cx('form')}>
                <DataTable />
            </div>
        </div>
    );
}

export default UserAdmin;
