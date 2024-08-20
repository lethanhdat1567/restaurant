import classNames from 'classnames/bind';
import styles from './InfoItem.module.scss';

const cx = classNames.bind(styles);

function InfoItem({ data }) {
    return (
        <div className={cx('wrap')}>
            <h3 className={cx('title')}>{data.title}</h3>
            <div className={cx('wrap-item')}>
                {data.children.map((item, index) => {
                    return (
                        <span key={index} className={cx('item')}>
                            {item}
                        </span>
                    );
                })}
            </div>
        </div>
    );
}

export default InfoItem;
