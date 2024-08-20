import classNames from 'classnames/bind';
import styles from './GalleryItem.module.scss';
import { imgs } from '../../assets/Imgs/imgs';

const cx = classNames.bind(styles);

function GalleryItem({ data, small }) {
    return (
        <div
            className={cx('wrap', {
                small: small,
            })}
        >
            <img className={cx('img')} src={imgs[data.img]} />
            <div className={cx('info')}>
                <span className={cx('title')}>{data.title}</span>
                <span className={cx('desc')}>{data.desc}</span>
            </div>
        </div>
    );
}

export default GalleryItem;
