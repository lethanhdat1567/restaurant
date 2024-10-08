import classNames from 'classnames/bind';
import styles from './Cart.module.scss';
import { cart, cartHead } from '../../../../../../../assets/Icons';
import { Dropdown, Menu, Space } from 'antd';
import { Link } from 'react-router-dom';
import Item from './Item';
import Bill from '../../../../../../../components/Bill/Bill';
import Button from '../../../../../../../components/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { productsSlice } from '../../../../../../../redux/reducer/ProductsSlice';
import priceTrander from '../../../../../../../utils/priceTranfer';
import Tippy from '@tippyjs/react/headless';
import { toastSlice } from '../../../../../../../redux/reducer/ToastSlice';

const cx = classNames.bind(styles);

function Cart() {
    // redux
    const products = useSelector((state) => state.products.cart);
    const total = useSelector((state) => state.products.totalMoney);
    const toast = useSelector((state) => state.toast.toastCart);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(productsSlice.actions.updateTotalMoney());
    }, [products]);

    useEffect(() => {
        let timeoutId;
        if (toast.status) {
            timeoutId = setTimeout(() => {
                dispatch(
                    toastSlice.actions.setToast({
                        id: toast.id,
                        status: false,
                    }),
                );
            }, 3000);
        }

        return () => {
            clearTimeout(timeoutId);
        };
    }, [toast.id]);

    const dropdown = () => (
        <div className={cx('dropdown')}>
            <div className={cx('sub-head')}>
                <p className={cx('quantity')}>You have {products.length} Item</p>
                <Link to={`${process.env.REACT_APP_ROOT}/cart`} className={cx('link')}>
                    Check All
                </Link>
            </div>
            <div className={cx('items')}>
                {products.map((item, index) => {
                    return <Item data={item} key={index} />;
                })}
            </div>
            <div className={cx('bill')}>
                <Bill total={total} />
            </div>
            <div className={cx('btn-wrap')}>
                <Button primary large className={cx('btn')} to={`${process.env.REACT_APP_ROOT}/cart`}>
                    Check Out
                </Button>
            </div>
            <div className={cx('custom-dropdown-arrow')}></div>
        </div>
    );
    return (
        <Dropdown dropdownRender={dropdown} mouseEnterDelay={0}>
            <Space>
                <Tippy
                    render={(attrs) => (
                        <p {...attrs} className={cx('drop')}>
                            You have new product!
                        </p>
                    )}
                    arrow={true}
                    visible={toast.status}
                >
                    <div className={cx('cart')}>
                        <div className={cx('wrap')}>
                            <span className={cx('icon')}>{cartHead}</span>
                            <p className={cx('price')}>{priceTrander(total)}</p>
                        </div>
                    </div>
                </Tippy>
            </Space>
        </Dropdown>
    );
}

export default Cart;
