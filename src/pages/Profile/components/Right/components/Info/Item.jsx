import classNames from 'classnames/bind';
import styles from './Info.module.scss';
import { Link } from 'react-router-dom';
import { gmail, user } from '../../../../../../assets/Icons';

const cx = classNames.bind(styles);

function Item() {
    return (
        <Link>
            <article className={cx('wrap')}>
                <div className={cx('icon-wrap')}>
                    <span className={cx('icon')}>{user}</span>
                </div>
                <div className={cx('info')}>
                    <h3 className={cx('title-item')}>Email</h3>
                    <p className={cx('desc-item')}>lethanhdat@gmail.com</p>
                </div>
            </article>
        </Link>
    );
}

export default Item;
