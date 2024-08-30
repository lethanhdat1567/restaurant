import classNames from 'classnames/bind';
import styles from './DataTable.module.scss';
import './DataTable.scss';
import { Table } from 'antd';

const cx = classNames.bind(styles);

function DataTable({ columns, data }) {
    return (
        <div className={cx('table')}>
            <Table
                columns={columns}
                dataSource={data}
                pagination={{ pageSize: 5, style: { width: '200px', margin: '0 auto', padding: '20px' } }}
                scroll={{ x: 1000 }}
                className={cx('ant-table')}
            ></Table>
        </div>
    );
}

export default DataTable;
