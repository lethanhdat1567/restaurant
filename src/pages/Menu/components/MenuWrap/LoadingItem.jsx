import classNames from 'classnames/bind';
import styles from './MenuWrap.module.scss';
import { ScaleLoader } from 'react-spinners';
import Skeleton from 'react-loading-skeleton';

const cx = classNames.bind(styles);

function LoadingItem({ loading, key }) {
    if (loading) {
        return (
            <div className={cx('loading-wrap')} key={key}>
                <div className={cx('loading-top')}>
                    <ScaleLoader color="#ccc" />
                </div>
                <div className={cx('loading-bottom')}>
                    <Skeleton count={3} height={5} />
                </div>
            </div>
        );
    } else {
        return;
    }
}

export default LoadingItem;
