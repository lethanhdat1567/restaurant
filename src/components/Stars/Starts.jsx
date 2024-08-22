import classNames from 'classnames/bind';
import styles from './Starts.module.scss';
import { star } from '../../assets/Icons';

const cx = classNames.bind(styles);

function Stars() {
    return (
        <div className={cx('stars')}>
            <span className={cx('star')}>{star}</span>
            <span className={cx('star')}>{star}</span>
            <span className={cx('star')}>{star}</span>
            <span className={cx('star')}>{star}</span>
            <span className={cx('star')}>{star}</span>
        </div>
    );
}

export default Stars;
