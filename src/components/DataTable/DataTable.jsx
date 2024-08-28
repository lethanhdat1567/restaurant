import classNames from 'classnames/bind';
import styles from './DataTable.module.scss';
import './DataTable.scss';
import { Table } from 'antd';
const cx = classNames.bind(styles);
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
        title: 'Created At',
        dataIndex: 'created_at',
    },
    {
        title: 'Updated At',
        dataIndex: 'updated_at',
    },
];
const data = [
    {
        key: '1',
        name: 'John Brown',
        email: 'lethanhdat@mgial.com',
        phone_number: '000900000',
        address: 'E12.12121scdads',
        created_at: '12/121/2121',
        updated_at: '12/1212',
    },
    {
        key: '2',
        name: 'John Brown',
        email: 'lethanhdat@mgial.com',
        phone_number: '000900000',
        address: 'E12.12121scdads',
        created_at: '12/121/2121',
        updated_at: '12/1212',
    },
    {
        key: '3',
        name: 'John Brown',
        email: 'lethanhdat@mgial.com',
        phone_number: '000900000',
        address: 'E12.12121scdads',
        created_at: '12/121/2121',
        updated_at: '12/1212',
    },
    {
        key: '4',
        name: 'John Brown',
        email: 'lethanhdat@mgial.com',
        phone_number: '000900000',
        address: 'E12.12121scdads',
        created_at: '12/121/2121',
        updated_at: '12/1212',
    },
    {
        key: '5',
        name: 'John Brown',
        email: 'lethanhdat@mgial.com',
        phone_number: '000900000',
        address: 'E12.12121scdads',
        created_at: '12/121/2121',
        updated_at: '12/1212',
    },
    {
        key: '6',
        name: 'John Brown',
        email: 'lethanhdat@mgial.com',
        phone_number: '000900000',
        address: 'E12.12121scdads',
        created_at: '12/121/2121',
        updated_at: '12/1212',
    },
];

function DataTable() {
    return (
        <div className={cx('table')}>
            <Table
                columns={columns}
                dataSource={data}
                pagination={{ pageSize: 5 }}
                scroll={{ x: 1000 }}
                className={cx('ant-table')}
            />
        </div>
    );
}

export default DataTable;
