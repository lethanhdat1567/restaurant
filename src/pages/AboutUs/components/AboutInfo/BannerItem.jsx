import classNames from 'classnames/bind';
import styles from './AboutInfo.module.scss';
import { imgs } from '../../../../assets/Imgs/imgs';

const cx = classNames.bind(styles);

function BannerItem({ data }) {
    return (
        <div className={cx('banner')}>
            <img src={imgs[data.img]} alt="" className={cx('banner-img')} />
        </div>
    );
}

export default BannerItem;
