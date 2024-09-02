import classNames from 'classnames/bind';
import styles from './DataTable.module.scss';
import './DataTable.scss';
import { Table } from 'antd';
import ClipLoader from 'react-spinners/ClipLoader';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { request } from '../../utils/request';
import { useEffect, useState } from 'react';
import { useStateContext } from '../../contexts/ContextProvider';
import { ToastContainer } from 'react-toastify';

const cx = classNames.bind(styles);

function DataTable({ columns, data, loading, field }) {
    const { toastify } = useStateContext();

    const [dataTable, setDataTable] = useState([]);
    useEffect(() => {
        if (data) {
            setDataTable([...data]);
        } else {
            setDataTable([]);
        }
    }, [data]);
    function handleDelete(text) {
        request
            .delete(`${field}/${text.id}`)
            .then((res) => {
                const newData = dataTable.filter((item, index) => {
                    return item.id !== res.data.data.id;
                });
                setDataTable(newData);
                toastify(`Delete ${field} success !!!!`, 'success');
            })
            .catch((error) => {
                console.log(`error: ${error}`);
                toastify(`Delete ${field} error !!!!`, 'error');
            });
    }

    return (
        <>
            {loading ? (
                <div className={cx('wrap')}>
                    <ClipLoader
                        loading={loading}
                        size={150}
                        color="#fff"
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    />
                </div>
            ) : (
                <div className={cx('table')}>
                    <ToastContainer />
                    <Table
                        columns={[
                            ...columns,
                            {
                                title: 'Actions',
                                key: 'actions',
                                render: (text, record) => {
                                    return (
                                        <div className={cx('utils')}>
                                            <Link
                                                style={{ display: 'inline-block', color: 'blue' }}
                                                to={`update/${text.id}`}
                                            >
                                                <FontAwesomeIcon icon={faPenSquare} className={cx('fa-xl')} />
                                            </Link>
                                            <Link
                                                style={{ display: 'inline-block', color: 'red' }}
                                                onClick={() => handleDelete(text)}
                                            >
                                                <FontAwesomeIcon icon={faTrash} className={cx('fa-xl')} />
                                            </Link>
                                        </div>
                                    );
                                },
                            },
                        ]}
                        dataSource={dataTable}
                        pagination={{
                            pageSize: 5,
                            style: { width: '200px', margin: '0 auto', padding: '20px' },
                        }}
                        scroll={{ x: 1000 }}
                        className={cx('ant-table')}
                        style={{ textAlign: 'center', width: '100%' }}
                    />
                </div>
            )}
        </>
    );
}

export default DataTable;
