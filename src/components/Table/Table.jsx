import classNames from 'classnames/bind';
import styles from './Table.module.scss';
import Button from '../Button/Button';
import ItemTable from './components/ItemTable/ItemTable';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { productsSlice } from '../../redux/reducer/ProductsSlice';

const cx = classNames.bind(styles);

function Table({ data }) {
    const dispatch = useDispatch();
    return (
        <div className={cx('wrapper')}>
            <table className={cx('table-wrap', 'table')}>
                <thead className={cx('thead')}>
                    <tr className={cx('tr')}>
                        <th className={cx('head-item')}></th>
                        <th className={cx('head-item')}>Food</th>
                        <th className={cx('head-item')}>Quantity</th>
                        <th className={cx('head-item')}>Subtotal</th>
                    </tr>
                </thead>
                <tbody className={cx('tbody')}>
                    {data.map((item, index) => {
                        return <ItemTable data={item} key={index} />;
                    })}
                </tbody>
            </table>
            <div className={cx('btn-wrap')}>
                <div className={cx('left')}>
                    <Button btn onClick={() => dispatch(productsSlice.actions.destroyCart())}>
                        Delete All
                    </Button>
                </div>
                <div className={cx('right')}>
                    <Button primary to={`${process.env.REACT_APP_ROOT}/checkout`}>
                        Checkout All
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Table;
