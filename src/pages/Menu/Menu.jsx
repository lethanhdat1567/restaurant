import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import MenuWrap from './components/MenuWrap/MenuWrap';
import MenuOrder from './components/MenuOrder/MenuOrder';
import { fakeData } from '../../data/data';

const cx = classNames.bind(styles);

function Menu() {
    return (
        <div className={cx('menu')}>
            <MenuWrap data={fakeData.menuList[0]} />
            <MenuOrder />
            <MenuWrap data={fakeData.menuList[1]} />
            <MenuWrap data={fakeData.menuList[2]} />
            <MenuWrap data={fakeData.menuList[3]} />
        </div>
    );
}

export default Menu;
