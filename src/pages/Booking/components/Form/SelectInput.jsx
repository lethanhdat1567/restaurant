import { Select } from 'antd';
import './Form.scss';
import styles from './Form.module.scss';
import classNames from 'classnames';

const cx = classNames.bind(styles);
const { Option } = Select;

function SelectInput({ data }) {
    return (
        <Select defaultValue={data[0]}>
            {data.map((item, index) => {
                return (
                    <Option key={index} value={item}>
                        {item}
                    </Option>
                );
            })}
        </Select>
    );
}

export default SelectInput;
