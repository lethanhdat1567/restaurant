import classNames from 'classnames/bind';
import styles from './BlogAdmin.module.scss';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import DataTable from '../../components/DataTable/DataTable';
import { useEffect, useState } from 'react';
import { request } from '../../utils/request';

const cx = classNames.bind(styles);

function BlogAdmin() {
    const [loading, setLoading] = useState(false);
    const [dataBlogs, setDataBlogs] = useState([]);
    useEffect(() => {
        setLoading(true);
        request
            .get('blogs')
            .then((res) => {
                const newData = res.data.data.map((item, index) => {
                    return { ...item, key: item.id };
                });
                setDataBlogs(newData);
                setLoading(false);
            })
            .catch((error) => {});
    }, []);

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
        },
        {
            title: 'Created At',
            dataIndex: 'created_at',
        },
        {
            title: 'Updated At',
            dataIndex: 'updated_at',
        },
    ];
    return (
        <div className={cx('wrap')}>
            <div className={cx('head')}>
                <h2 className={cx('title')}>List Blogs</h2>
                <Link to={`${process.env.REACT_APP_ROOT}/admin/blogs/create`}>
                    <Button type="primary">Add Blogs</Button>
                </Link>
            </div>
            <div className={cx('form')}>
                <DataTable columns={columns} data={dataBlogs} field={'blogs'} loading={loading} />
            </div>
        </div>
    );
}

export default BlogAdmin;
