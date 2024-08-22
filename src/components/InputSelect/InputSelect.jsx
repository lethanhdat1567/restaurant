import classNames from 'classnames/bind';
import styles from './InputSelect.module.scss';
import { Select } from 'antd';
import './InputSelect.scss';

const cx = classNames.bind(styles);

function InputSelect() {
    return (
        <div>
            <label htmlFor="" className={cx('label')}>
                Street address *
            </label>
            <Select
                labelRender=""
                className="select"
                defaultValue="Da Phuoc"
                style={{ width: '100%' }}
                options={[
                    { label: 'Da Phuoc', value: 'Da Phuoc' },
                    { label: 'Qui Duc', value: 'Qui Duc' },
                    { label: 'Vinh Loc A', value: 'Vinh Loc A' },
                    { label: 'Phong Phu', value: 'Phong Phu' },
                ]}
            />
        </div>
    );
}

export default InputSelect;
