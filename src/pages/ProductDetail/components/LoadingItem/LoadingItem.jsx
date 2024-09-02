import classNames from 'classnames/bind';
import styles from './LoadingItem.module.scss';
import { ScaleLoader } from 'react-spinners';
import Skeleton from 'react-loading-skeleton';

const cx = classNames.bind(styles);

function LoadingItem() {
    return (
        <div className="row row-cols-1 row-cols-lg-2 g-2 g-lg-5">
            <div className="col">
                <div className={cx('banner')}>
                    <ScaleLoader color="#ccc" height={20} width={20} className={cx('load')} />
                </div>
            </div>
            <div className="col">
                <div className={cx('info')}>
                    <Skeleton height={20} count={4} style={{ margin: '10px 0px' }} />
                    <span style={{ margin: '50px 0px', display: 'block' }}>
                        <Skeleton height={40} count={2} style={{ margin: '10px 0px' }} />
                    </span>
                    <Skeleton height={20} count={3} style={{ margin: '10px 0px' }} />
                </div>
            </div>
        </div>
    );
}

export default LoadingItem;
