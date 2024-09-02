import styles from '../../Table.module.scss';
import classNames from 'classnames/bind';
import { imgs } from '../../../../assets/Imgs/imgs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import Deposite from '../../../Deposite/Deposite';
import priceTrander from '../../../../utils/priceTranfer';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { productsSlice } from '../../../../redux/reducer/ProductsSlice';

const cx = classNames.bind(styles);

function ItemTable({ data }) {
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(data?.quantity);

    const handleRemove = () => {
        dispatch(productsSlice.actions.removeProduct(data.product_id));
    };
    return (
        <tr className={cx('tr')}>
            <td className={cx('body-item')}>
                <div className={cx('item-wrap')}>
                    <span className={cx('icon-trash')} onClick={handleRemove}>
                        <FontAwesomeIcon icon={faTrashAlt} className={cx('trash', 'fa-lg')} style={{ color: '#ccc' }} />
                    </span>
                    <img src={`${process.env.REACT_APP_BACKEND}${data.img}`} alt="" className={cx('img')} />
                </div>
            </td>
            <td className={cx('body-item')}>{data.name}</td>
            <td className={cx('body-item')}>
                <Deposite id={data.product_id} quantity={quantity} setQuantity={setQuantity} />
            </td>
            <td className={cx('body-item')}>{priceTrander(data.total)}</td>
        </tr>
    );
}

export default ItemTable;
