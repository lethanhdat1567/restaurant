import classNames from 'classnames/bind';
import styles from './MenuFilter.module.scss';
import { fakeData } from '../../../../../../data/data';
import MenuItem from '../../../../../../components/MenuItem/MenuItem';
import { useEffect, useState } from 'react';
import { request } from '../../../../../../utils/request';
import Loading from '../../../../../../components/Register/Loading';
import { ScaleLoader } from 'react-spinners';
import { useDispatch } from 'react-redux';

const cx = classNames.bind(styles);

function MenuFilter() {
    const [navActive, setNavActive] = useState('All');
    const [menuFoods, setMenuFoods] = useState([]);
    const [loading, setLoading] = useState(false);

    const navBar = ['All', 'Breakfast', 'Lunch', 'Dinner', 'Starters'];

    useEffect(() => {
        setLoading(true);
        request
            .get('products')
            .then((res) => {
                const allCate = res.data.data.filter((item, index) => {
                    return item.deleted !== 0;
                });
                request
                    .get('products/menu')
                    .then((res) => {
                        const menuFoods = [
                            ...res.data.data,
                            {
                                title: 'All',
                                foods: [...allCate],
                            },
                        ];
                        setMenuFoods(menuFoods);
                        setLoading(false);
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div className={cx('wrap')}>
            <div className={cx('nav-wrap')}>
                <div className={cx('nav')}>
                    {navBar.map((item, index) => {
                        return (
                            <p
                                key={index}
                                className={cx('desc', {
                                    active: navActive === item,
                                })}
                                onClick={() => setNavActive(item)}
                            >
                                {item}
                            </p>
                        );
                    })}
                </div>
            </div>
            <div className={cx('menu-wrap')}>
                {loading ? (
                    <div className={cx('loading')}>
                        <ScaleLoader color="#fff" />
                    </div>
                ) : (
                    <div className={cx('item-wrap')}>
                        <div className="row row-cols-1 row-cols-lg-2 g-5 ">
                            {menuFoods.map((item, index) => {
                                if (item.title === navActive) {
                                    return item.foods.map((item, index) => {
                                        return <MenuItem key={index} data={item} />;
                                    });
                                }
                            })}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default MenuFilter;
