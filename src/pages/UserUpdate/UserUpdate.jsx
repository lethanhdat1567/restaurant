import classNames from 'classnames/bind';
import styles from './UserUpdate.module.scss';
import FormAdmin from '../../components/FormAdmin/FormAdmin';
import { useParams } from 'react-router-dom';

const cx = classNames.bind(styles);

function UserUpdate() {
    const { slug } = useParams();
    const data = [
        {
            label: 'name',
            name: 'fullname',
            default: 'test',
        },
        {
            label: 'email',
            name: 'email',
            rules: [
                {
                    type: 'email',
                    message: 'The input is not a valid email!',
                },
            ],
            default: 'test',
        },
        {
            label: 'phone_number',
            name: 'phone_number',
            default: 'test',
            rules: [
                {
                    pattern: /^(0\d{9,10})$/,
                    message: 'Phone number must be 10 digits!',
                },
            ],
        },
        {
            label: 'address',
            name: 'address',
            default: 'test',
        },
        {
            type: 'password',
            label: 'password',
            name: 'password',
            default: 'test',
        },
        {
            type: 'select',
            name: 'role_id',
            label: 'Roles',
            options: [
                {
                    label: '1: User',
                    value: 1,
                },
                {
                    label: '2: Admin',
                    value: 2,
                },
            ],
        },
    ];
    return (
        <div className={cx('wrap')}>
            <div className={cx('container')}>
                <div className={cx('body')}>
                    <FormAdmin data={data} field={'users'} updated slug={slug} />
                </div>
            </div>
        </div>
    );
}

export default UserUpdate;
