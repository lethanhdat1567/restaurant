import classNames from 'classnames/bind';
import styles from './AboutInfo.module.scss';

const cx = classNames.bind(styles);

function AboutInfo({ data, styles }) {
    return (
        <div style={{ ...styles }} className={cx('info')}>
            <h2 className={cx('title')}>{data.title}</h2>
            <p className={cx('desc')}>{data.desc}</p>
        </div>
    );
}

export default AboutInfo;
