import classNames from 'classnames/bind';
import styles from './ContactInfo.module.scss';

const cx = classNames.bind(styles);

function Item({ data }) {
    return (
        <div className={cx('item')}>
            <span className={cx('main')}>{data.title}: </span>
            <span className={cx('sub')}>{data.sub}</span>
        </div>
    );
}

export default Item;
