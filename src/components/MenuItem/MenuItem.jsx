import classNames from 'classnames/bind';
import styles from './MenuItem.module.scss';
import priceTrander from '../../utils/priceTranfer';
import { imgs } from '../../assets/Imgs/imgs';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function MenuItem({ data }) {
    return (
        <Link to={`${process.env.REACT_APP_ROOT}/productdetail/${data.id}`}>
            <section className={cx('wrap')}>
                <div className={cx('info')}>
                    <img src={`${process.env.REACT_APP_BACKEND}${data.img}`} className={cx('img')} />
                    <p className={cx('name')}>{data.name}</p>
                </div>
                <span className={cx('price')}>{priceTrander(data.total)}</span>
            </section>
        </Link>
    );
}

export default MenuItem;
