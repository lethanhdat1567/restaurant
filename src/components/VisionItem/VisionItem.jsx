import classNames from 'classnames/bind';
import styles from './VisionItem.module.scss';
import { imgs } from '../../assets/Imgs/imgs';

const cx = classNames.bind(styles);

function VisionItem({ data }) {
    return (
        <section className={cx('vision-item')}>
            <img src={imgs[data.img]} alt="" className={cx('img')} />
            <div className={cx('item')}>
                <h3 className={cx('title')}>{data.title}</h3>
                <p className={cx('desc')}>{data.desc}</p>
            </div>
        </section>
    );
}

export default VisionItem;
