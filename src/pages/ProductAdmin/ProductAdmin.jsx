import classNames from 'classnames/bind';
import styles from './ProductAdmin.module.scss';
import { Button } from 'antd';
import DataTable from '../../components/DataTable/DataTable';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { request } from '../../utils/request';

const cx = classNames.bind(styles);

function ProductAdmin() {
    const [loading, setLoading] = useState(false);
    const [dataProducts, setDataProducts] = useState(false);

    useEffect(() => {
        setLoading(true);
        request
            .get('products')
            .then((res) => {
                const newData = res.data.data
                    .filter((item) => item.deleted !== 0)
                    .map((item) => ({
                        ...item,
                        key: item.id,
                    }));
                setDataProducts(newData);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const columns = [
        {
            title: 'Name',
            dataIndex: 'title',
        },
        {
            title: 'Price',
            dataIndex: 'price',
        },
        {
            title: 'Discount',
            dataIndex: 'discount',
        },
        {
            title: 'Total',
            dataIndex: 'total',
        },
        {
            title: 'Create At',
            dataIndex: 'created_at',
        },
        {
            title: 'Updated At',
            dataIndex: 'updated_at',
        },
    ];
    const data = dataProducts;

    return (
        <div className={cx('user')}>
            <div className={cx('head')}>
                <h2 className={cx('title')}>List Products</h2>
                <Link to={`${process.env.REACT_APP_ROOT}/admin/products/create`}>
                    <Button type="primary">Add Product</Button>
                </Link>
            </div>
            <div className={cx('form')}>
                <DataTable columns={columns} data={data} field={'products'} loading={loading} />
            </div>
        </div>
    );
}

export default ProductAdmin;
