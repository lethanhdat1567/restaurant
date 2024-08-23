import classNames from 'classnames/bind';
import styles from './Form.module.scss';
import BookInput from '../../../../components/BookInput/BookInput';
import DateSelect from './DateSelect';
import { clock, gmail, phone, user } from '../../../../assets/Icons';

const cx = classNames.bind(styles);

const data = [
    {
        name: 'Your name',
        icon: user,
    },
    {
        name: 'Phone number',
        icon: phone,
    },
    {
        name: 'Email address',
        icon: gmail,
    },
    {
        type: 'select',
        children: ['1 Person', '2 Person', '3 Person', 'More than 3 Person'],
        icon: user,
    },
    {
        type: 'date',
    },
    {
        name: '07:00 pm',
        icon: clock,
    },
];

function Form() {
    return (
        <form className={cx('form')}>
            <div className="row row-cols-3 g-5">
                {data.map((item, index) => {
                    return (
                        <div className="col" key={index}>
                            <BookInput data={item} />
                        </div>
                    );
                })}
            </div>
        </form>
    );
}

export default Form;
