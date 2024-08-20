import classNames from 'classnames/bind';
import styles from './FooterItem.module.scss';

const cx = classNames.bind(styles);

function FooterItem({ data }) {
    return (
        <div className={cx('wrap')}>
            <h4 className={cx('title')}>{data.title}</h4>
            <ul className={cx('list')}>
                {data.children.map((item, index) => {
                    return (
                        <li className={cx('item')} key={index}>
                            {item}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default FooterItem;
