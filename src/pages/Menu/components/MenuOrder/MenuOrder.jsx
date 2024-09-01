import classNames from 'classnames/bind';
import styles from './MenuOrder.module.scss';
import Button from '../../../../components/Button/Button';
import { imgs } from '../../../../assets/Imgs/imgs';
import Login from '../../../../components/Login/Login';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import Register from '../../../../components/Register/Register';

const cx = classNames.bind(styles);

function MenuOrder() {
    return (
        <section className={cx('menu-order')}>
            <img src={imgs.orderBanner} alt="" className={cx('banner')} />
            <div className={cx('content')}>
                <h2 className={cx('title')}>Food Is Not Just Eating Energy</h2>
                <p className={cx('desc')}>It’s an experience.</p>
                <Register>
                    <Button className={cx('btn')} primary>
                        Register to support us <FontAwesomeIcon icon={faHeart} style={{ color: 'red' }} />
                    </Button>
                </Register>
            </div>
        </section>
    );
}

export default MenuOrder;
