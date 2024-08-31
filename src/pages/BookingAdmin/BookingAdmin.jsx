import classNames from 'classnames/bind';
import styles from './BookingAdmin.module.scss';
import DataTable from '../../components/DataTable/DataTable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { request } from '../../utils/request';

const cx = classNames.bind(styles);

function BookingAdmin() {
    // hooks
    const [dataBooking, setDataBooking] = useState([]);
    const [loading, setLoading] = useState(true);
    // handler
    function handleDelete(itemValue) {
        request
            .delete(`booking/${itemValue.id}`)
            .then((res) => {
                setDataBooking((prev) => {
                    const newState = prev.filter((item, index) => {
                        const [deleteValue] = res.data.data;
                        return item.id !== deleteValue.id;
                    });

                    return newState;
                });
            })
            .catch((error) => {
                console.log(`error: ${error}`);
            });
    }
    // data
    const data = dataBooking;
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Phone Number',
            dataIndex: 'phone_number',
        },
        {
            title: 'Address',
            dataIndex: 'address',
        },
        {
            title: 'Quantity',
            dataIndex: 'quantity',
        },
        {
            title: 'Time',
            dataIndex: 'time',
        },
        {
            title: 'Date',
            dataIndex: 'date',
        },
    ];
    // fetch api
    useEffect(() => {
        request
            .get('booking')
            .then((res) => {
                const newData = res.data.data
                    .filter((item) => item.deleted !== 0)
                    .map((item) => ({
                        ...item,
                        key: item.id,
                    }));
                setDataBooking(newData);
                setLoading(false);
            })
            .catch((error) => {
                console.log(`error: ${error}`);
            });
    }, []);
    return (
        <div className={cx('user')}>
            <div className={cx('head')}>
                <h2 className={cx('title')}>List Booking</h2>
            </div>
            <div className={cx('form')}>
                <DataTable columns={columns} data={data} loading={loading} field={'booking'} />
            </div>
        </div>
    );
}

export default BookingAdmin;
