import classNames from 'classnames/bind';
import styles from './NavItem.module.scss';
import { user } from '../../../../../../assets/Icons';
import Button from '../../../../../../components/Button/Button';

const cx = classNames.bind(styles);

function NavItem() {
    return (
        <div className={cx('nax-wrap')}>
            <p className={cx('title')}>Manage Account</p>
            <div className={cx('wrap-item')}>
                <Button leftIcon={user} className={cx('btn')}>
                    Thong tin ca nhan
                </Button>
                <Button leftIcon={user} className={cx('btn')}>
                    Thong tin ca nhan
                </Button>
            </div>
        </div>
    );
}

export default NavItem;
