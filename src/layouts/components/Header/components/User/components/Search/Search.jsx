import { Dropdown, Space } from 'antd';
import { search } from '../../../../../../../assets/Icons';
import styles from './Search.module.scss';
import classNames from 'classnames/bind';
import Item from './Item';
import Button from '../../../../../../../components/Button/Button';

const cx = classNames.bind(styles);

function Search() {
    const dropdown = () => (
        <div className={cx('search')}>
            <h3 className={cx('title')}>Search Your Item</h3>
            <div className={cx('wrap')}>
                <input type="text" className={cx('search-input')} placeholder="Search..." />
                <div className={cx('items')}>
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                </div>
            </div>
            <Button text className={cx('btn')}>
                See all
            </Button>
            <div className={cx('custom-dropdown-arrow')}></div>
        </div>
    );

    return (
        <Dropdown
            dropdownRender={dropdown}
            mouseEnterDelay={0}
            trigger={['click']}
            className={cx('dropdown')}
            placement="bottomLeft"
        >
            <Space>
                <div className={cx('wrap')}>
                    <button className={cx('btn-search')}>
                        <span className={cx('icon-svg')}>{search}</span>
                    </button>
                </div>
            </Space>
        </Dropdown>
    );
}

export default Search;
