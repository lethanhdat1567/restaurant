import classNames from 'classnames/bind';
import styles from './CartItem.module.scss';
import { imgs } from '../../assets/Imgs/imgs';
import Deposite from '../Deposite/Deposite';
import Button from '../Button/Button';
import { trash } from '../../assets/Icons';
import priceTrander from '../../utils/priceTranfer';
import { useDispatch } from 'react-redux';
import { productsSlice } from '../../redux/reducer/ProductsSlice';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function CartItem({ data }) {
    const dispatch = useDispatch();
    function handleDelete() {
        dispatch(productsSlice.actions.removeProduct(data.product_id));
    }

    return (
        <Link to={`${process.env.REACT_APP_ROOT}/productdetail/${data.product_id}`} className={cx('wrap')}>
            <img src={`${process.env.REACT_APP_BACKEND}${data.img}`} alt="" className={cx('img')} />
            <div className={cx('info')}>
                <div className={cx('heading')}>
                    <h3 className={cx('name')}>{data.name}</h3>
                    <p className={cx('price')}>{priceTrander(data.total)}</p>
                </div>
                <div className={cx('footer')}>
                    <p className={cx('desc')}>{data.desc}</p>
                    <Button leftIcon={trash} className={cx('btn')} onClick={handleDelete}>
                        Delete
                    </Button>
                </div>
                {data.discount !== 0 ? (
                    <div className={cx('discount')}>
                        <div className={cx('discount-wrap')}>
                            <span className={cx('old-price')}>{priceTrander(data.price)}</span>
                            <span className={cx('discount')}>{data.discount}%</span>
                        </div>
                    </div>
                ) : (
                    ''
                )}
            </div>
        </Link>
    );
}

export default CartItem;
