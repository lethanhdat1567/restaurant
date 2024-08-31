import classNames from 'classnames/bind';
import styles from './ProductAdmin.module.scss';
import { Button } from 'antd';
import DataTable from '../../components/DataTable/DataTable';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const cx = classNames.bind(styles);

function ProductAdmin() {
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
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
            title: 'Image',
            dataIndex: 'image',
        },
        {
            title: 'Description',
            dataIndex: 'description',
        },
        {
            title: 'Create At',
            dataIndex: 'create_at',
        },
        {
            title: 'Updated At',
            dataIndex: 'updated_at',
        },
    ];
    const data = [
        {
            name: 'Product A',
            price: 29.99,
            discount: '10%',
            image: 'https://example.com/images/product-a.jpg',
            description: "A great product that you'll love.",
            create_at: '2024-08-01T12:34:56Z',
            updated_at: '2024-08-15T08:22:34Z',
        },
        {
            name: 'Product B',
            price: 49.99,
            discount: '15%',
            image: 'https://example.com/images/product-b.jpg',
            description: 'An even better product with fantastic features.',
            create_at: '2024-07-21T14:30:00Z',
            updated_at: '2024-08-10T09:45:00Z',
        },
        {
            name: 'Product C',
            price: 19.99,
            discount: '5%',
            image: 'https://example.com/images/product-c.jpg',
            description: 'Affordable and reliable.',
            create_at: '2024-08-05T16:00:00Z',
            updated_at: '2024-08-25T11:15:00Z',
        },
        {
            name: 'Product D',
            price: 99.99,
            discount: '20%',
            image: 'https://example.com/images/product-d.jpg',
            description: 'Top-of-the-line product with premium quality.',
            create_at: '2024-08-12T10:20:30Z',
            updated_at: '2024-08-20T12:50:00Z',
        },
    ];

    return (
        <div className={cx('user')}>
            <div className={cx('head')}>
                <h2 className={cx('title')}>List Products</h2>
                <Link to={`${process.env.REACT_APP_ROOT}/admin/products/create`}>
                    <Button type="primary">Add Product</Button>
                </Link>
            </div>
            <div className={cx('form')}>
                <DataTable columns={columns} data={data} field={'products'} />
            </div>
        </div>
    );
}

export default ProductAdmin;
