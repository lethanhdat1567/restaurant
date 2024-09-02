import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import MenuWrap from './components/MenuWrap/MenuWrap';
import MenuOrder from './components/MenuOrder/MenuOrder';
import { fakeData } from '../../data/data';
import { useEffect, useState } from 'react';
import { request } from '../../utils/request';
import { useDispatch, useSelector } from 'react-redux';
import { productsSlice } from '../../redux/reducer/ProductsSlice';

const cx = classNames.bind(styles);

function Menu() {
    const dispatch = useDispatch();
    const foods = useSelector((state) => state.products.menuList);

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!foods || (Array.isArray(foods) && foods.length === 0)) {
            setLoading(true);
            request
                .get('/products/menu')
                .then((res) => {
                    setLoading(false);
                    console.log(res.data.data);

                    dispatch(productsSlice.actions.setMenuList(res.data.data));
                })
                .catch((error) => {
                    setLoading(false); // Đảm bảo bạn dừng loading ngay cả khi có lỗi
                    console.log(error);
                });
        }
    }, [foods]);
    return (
        <div className={cx('menu')}>
            <MenuWrap data={foods[0]} loading={loading} />
            <MenuOrder />
            <MenuWrap data={foods[1]} loading={loading} />
            <MenuWrap data={foods[2]} loading={loading} />
            <MenuWrap data={foods[3]} loading={loading} />
        </div>
    );
}

export default Menu;
