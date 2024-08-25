import classNames from 'classnames/bind';
import styles from './MenuFilter.module.scss';
import { fakeData } from '../../../../../../data/data';
import MenuItem from '../../../../../../components/MenuItem/MenuItem';
import { useState } from 'react';

const cx = classNames.bind(styles);

function MenuFilter() {
    const [navActive, setNavActive] = useState('All');

    return (
        <div className={cx('wrap')}>
            <div className={cx('nav-wrap')}>
                <div className={cx('nav')}>
                    {fakeData.menuData.nav.map((item, index) => {
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
                <div className="row row-cols-1 row-cols-lg-2 g-5 ">
                    {fakeData.menuData[navActive].map((item, index) => {
                        return <MenuItem key={index} data={item} />;
                    })}
                </div>
            </div>
        </div>
    );
}

export default MenuFilter;
