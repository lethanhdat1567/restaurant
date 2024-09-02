import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import MenuWrap from './components/MenuWrap/MenuWrap';
import MenuOrder from './components/MenuOrder/MenuOrder';
import { fakeData } from '../../data/data';
import { useEffect, useState } from 'react';
import { request } from '../../utils/request';

const cx = classNames.bind(styles);

function Menu() {
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        request
            .get('/products/menu')
            .then((res) => {
                setFoods([...res.data.data]);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    return (
        <div className={cx('menu')}>
            <MenuWrap data={foods[0]} />
            <MenuOrder />
            <MenuWrap data={foods[1]} />
            <MenuWrap data={foods[2]} />
            <MenuWrap data={foods[3]} />
        </div>
    );
}

export default Menu;
