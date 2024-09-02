import classNames from 'classnames/bind';
import styles from './Deposite.module.scss';
import { useDispatch } from 'react-redux';
import { productsSlice } from '../../redux/reducer/ProductsSlice';

const cx = classNames.bind(styles);

function Deposite({ id, quantity, setQuantity }) {
    const dispatch = useDispatch();

    const handleMinus = () => {
        if (quantity > 0) {
            dispatch(productsSlice.actions.depositeMinus(id));
            setQuantity((prev) => {
                return prev - 1;
            });
        }
    };

    const handlePlus = () => {
        dispatch(productsSlice.actions.depositePlus(id));
        setQuantity((prev) => {
            return prev + 1;
        });
    };
    return (
        <div className={cx('cart-btn-wrap')}>
            <button className={cx('btn-count')} onClick={handleMinus}>
                -
            </button>
            <span className={cx('count-info')}>{quantity ? quantity : '1'}</span>
            <button className={cx('btn-count')} onClick={handlePlus}>
                +
            </button>
        </div>
    );
}

export default Deposite;
