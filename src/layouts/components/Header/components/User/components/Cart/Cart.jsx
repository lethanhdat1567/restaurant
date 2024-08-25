import classNames from 'classnames/bind';
import styles from './Cart.module.scss';
import { cartHead } from '../../../../../../../assets/Icons';
import { Dropdown, Menu, Space } from 'antd';
import { Link } from 'react-router-dom';
import Item from './Item';
import Bill from '../../../../../../../components/Bill/Bill';
import Button from '../../../../../../../components/Button/Button';

const cx = classNames.bind(styles);

function Cart() {
    const dropdown = () => (
        <div className={cx('dropdown')}>
            <div className={cx('sub-head')}>
                <p className={cx('quantity')}>You have 3 Item</p>
                <Link to={`${process.env.REACT_APP_ROOT}/cart`} className={cx('link')}>
                    Check All
                </Link>
            </div>
            <div className={cx('items')}>
                <Item />
                <Item />
                <Item />
                <Item />
            </div>
            <div className={cx('bill')}>
                <Bill />
            </div>
            <div className={cx('btn-wrap')}>
                <Button primary large className={cx('btn')}>
                    Check Out
                </Button>
            </div>
            <div className={cx('custom-dropdown-arrow')}></div>
        </div>
    );
    return (
        <Dropdown dropdownRender={dropdown} mouseEnterDelay={0}>
            <Space>
                <div className={cx('cart')}>
                    <div className={cx('wrap')}>
                        <span className={cx('icon')}>{cartHead}</span>
                        <p className={cx('price')}>123.33 d</p>
                    </div>
                </div>
            </Space>
        </Dropdown>
    );
}

export default Cart;
