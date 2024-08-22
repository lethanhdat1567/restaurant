import classNames from 'classnames/bind';
import styles from './Radios.scss';
import { Input, Radio, Space } from 'antd';

const cx = classNames.bind(styles);

function Radios() {
    return (
        <Radio.Group defaultValue={1}>
            <Space direction="vertical">
                <Radio value={1} className={cx('trander-text')}>
                    Option A
                </Radio>
                <Radio value={2} className={cx('trander-text')}>
                    Option B
                </Radio>
                <Radio value={3} className={cx('trander-text')}>
                    Option C
                </Radio>
                <Radio value={4} className={cx('trander-text')}>
                    Option D
                </Radio>
            </Space>
        </Radio.Group>
    );
}

export default Radios;
