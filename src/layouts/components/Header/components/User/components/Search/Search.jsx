import { Dropdown, Space } from 'antd';
import { search } from '../../../../../../../assets/Icons';
import styles from './Search.module.scss';

import classNames from 'classnames/bind';
import Item from './Item';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox, faCircleXmark, faSpinner, faX } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from 'react';
import useDebounce from '../../../../../../../hooks/useDebounce';
import { request } from '../../../../../../../utils/request';

const cx = classNames.bind(styles);

function Search() {
    const [open, setOpen] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [searchData, setSearchDate] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchMessage, setSearchMessage] = useState(false);
    const searchRef = useRef();

    const debounceSearch = useDebounce(searchValue, 500);

    useEffect(() => {
        if (!debounceSearch.trim()) {
            setSearchDate([]);
            setSearchMessage(false);
            return;
        }
        // Fetch
        setLoading(true);
        request
            .get('search', {
                params: {
                    search: debounceSearch,
                },
            })
            .then((res) => {
                setSearchDate(res.data.data);
                if (res.data.message === 'Not Found') {
                    setSearchMessage(true);
                }
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, [debounceSearch]);

    function handleChange(e) {
        const inputSearch = e.target.value;
        if (!inputSearch.startsWith(' ')) {
            setSearchValue(inputSearch);
        }
    }

    // Dropdown
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
                <div className={cx('input-wrap')}>
                    <input
                        ref={searchRef}
                        type="text"
                        className={cx('search-input')}
                        placeholder="Search..."
                        onChange={handleChange}
                        value={searchValue}
                    />
                    {!!searchValue && !loading && (
                        <button
                            className={cx('clear')}
                            onClick={() => {
                                setSearchValue('');
                                setSearchDate([]);
                                setSearchMessage(false);
                                searchRef.current.focus();
                            }}
                        >
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                    {loading && (
                        <button className={cx('loading')}>
                            <FontAwesomeIcon icon={faSpinner} className="fa-spinner fa-spin-pulse" />
                        </button>
                    )}
                </div>
                <div className={cx('items')}>
                    {searchData.length > 0 ? (
                        searchData.map((item, index) => {
                            return <Item data={item} key={item.id} setOpen={setOpen} />;
                        })
                    ) : (
                        <div className={cx('empty')}>
                            {searchMessage ? "Don't have any products" : 'Empty cart'}{' '}
                            <FontAwesomeIcon icon={faBox} className="fa-xl" />
                        </div>
                    )}
                </div>
            </div>
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
