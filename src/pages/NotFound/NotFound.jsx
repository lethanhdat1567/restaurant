import classNames from 'classnames/bind';
import styles from './NotFound.module.scss';
import SubscibeNew from '../../components/SubscribeNew/SubscibeNew';

const cx = classNames.bind(styles);

function NotFound() {
    return (
        <div className={cx('wrapper')}>
            <div className="container">
                <h2 className={cx('title')}>Not Found</h2>
                <p className={cx('desc')}>
                    The page you are looking for might have been removed, or it could be an old link. If you need help,
                    check out our contact section
                </p>
                <SubscibeNew />
            </div>
        </div>
    );
}

export default NotFound;
