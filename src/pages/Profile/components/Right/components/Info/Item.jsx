import classNames from 'classnames/bind';
import styles from './Info.module.scss';
import { Link } from 'react-router-dom';
import { gmail, user } from '../../../../../../assets/Icons';

const cx = classNames.bind(styles);

function Item({ data, id }) {
    return (
        <Link to={`${process.env.REACT_APP_ROOT}/profile/user/${id}`}>
            <article className={cx('wrap')}>
                <div className={cx('icon-wrap')}>
                    <span className={cx('icon')}>{data.icon}</span>
                </div>
                <div className={cx('info')}>
                    <h3 className={cx('title-item')}>{data.label}</h3>
                    <p className={cx('desc-item')}>{data.value}</p>
                </div>
            </article>
        </Link>
    );
}

export default Item;
