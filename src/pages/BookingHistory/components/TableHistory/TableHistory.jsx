import classNames from 'classnames/bind';
import styles from '../../BookingHistory.module.scss';
import { Table } from 'antd';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { request } from '../../../../utils/request';
import { useEffect, useState } from 'react';
import { useStateContext } from '../../../../contexts/ContextProvider';
import { ToastContainer } from 'react-toastify';

const cx = classNames.bind(styles);

function TableHistory({ data }) {
    const [dataTable, setDataTable] = useState([]);
    const { toastify } = useStateContext();

    useEffect(() => {
        if (data) {
            setDataTable([...data]);
        } else {
            setDataTable([]);
        }
    }, [data]);
    const handleDelete = (text) => {
        request
            .delete(`${process.env.REACT_APP_BACKEND_API}booking/${text.id}`)
            .then((res) => {
                const newData = dataTable.filter((item, index) => {
                    return item.id !== res.data.data.id;
                });
                setDataTable(newData);
                toastify(`Delete booking success !!!!`, 'success');
            })
            .catch((error) => {
                console.log(error);
                toastify(`Delete booking error !!!!`, 'error');
            });
    };

    const columns = [
        {
            title: 'Name',
            dataIndex: 'fullname',
            key: 'fullname',
        },
        {
            title: 'Phone Number',
            dataIndex: 'phone_number',
            key: 'phone_number',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Quantity',
            dataIndex: 'quantity',
            key: 'quantity',
        },
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Actions',
            key: 'actions',
            render: (text, record) => {
                return (
                    <div className={cx('utils')} onClick={() => handleDelete(text)}>
                        <p className={cx('destroy')}>Delete</p>
                    </div>
                );
            },
        },
    ];
    return (
        <>
            <ToastContainer />
            <Table
                dataSource={dataTable}
                columns={columns}
                rowKey={'id'}
                pagination={{
                    pageSize: 7,
                }}
            />
        </>
    );
}

export default TableHistory;
