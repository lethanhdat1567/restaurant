import classNames from 'classnames/bind';
import styles from './GalleryItem.module.scss';
import { imgs } from '../../assets/Imgs/imgs';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function GalleryItem({ data, small }) {
    return (
        <Link to={`${process.env.REACT_APP_ROOT}/menu`} className={cx('link-wrap')}>
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
        </Link>
    );
}

export default GalleryItem;
