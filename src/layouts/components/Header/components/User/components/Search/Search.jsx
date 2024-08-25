import { Dropdown, Space } from 'antd';
import { search } from '../../../../../../../assets/Icons';
import styles from './Search.module.scss';

import classNames from 'classnames/bind';
import Item from './Item';
import Button from '../../../../../../../components/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { useRef, useState } from 'react';

const cx = classNames.bind(styles);

function Search() {
    const [open, setOpen] = useState(false);

    const handleOpenChange = (nextOpen) => {
        setOpen(nextOpen);
    };

    const dropdown = () => (
        <div className={cx('search')}>
            <div className={cx('head')}>
                <h3 className={cx('title')}>Search Your Item</h3>
                <span className={cx('mart')} onClick={() => setOpen(false)}>
                    <FontAwesomeIcon icon={faX} className="fa-xl" />
                </span>
            </div>
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
            onOpenChange={handleOpenChange}
            trigger={['click']}
            className={cx('dropdown')}
            placement="bottomLeft"
            open={open}
        >
            <Space>
                <div className={cx('wrap')} onClick={() => setOpen(true)}>
                    <button className={cx('btn-search')}>
                        <span className={cx('icon-svg')}>{search}</span>
                    </button>
                </div>
            </Space>
        </Dropdown>
    );
}

export default Search;
