import classNames from 'classnames/bind';
import styles from './BookInput.module.scss';
import { user } from '../../assets/Icons';
import DateSelect from '../../pages/Booking/components/Form/DateSelect';
import Select from '../../pages/Booking/components/Form/SelectInput';

const cx = classNames.bind(styles);

function BookInput({ data }) {
    if (data.type === 'date') {
        return <DateSelect />;
    } else if (data.type === 'select') {
        return <Select data={data.children} />;
    } else {
        return (
            <div className={cx('wrap')}>
                <input type="text" className={cx('input')} placeholder={data.name} />
                <span className={cx('icon')}>{data.icon}</span>
            </div>
        );
    }
}

export default BookInput;
