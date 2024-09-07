import classNames from 'classnames/bind';
import styles from './BlogCreate.module.scss';
import FormAdmin from '../../components/FormAdmin/FormAdmin';

const cx = classNames.bind(styles);

function BlogCreate() {
    const data = [
        {
            label: 'Name',
            name: 'name',
        },
        {
            type: 'upload',
            label: 'Thumbnail',
            name: 'thumbnail',
        },
        {
            type: 'edit',
        },
    ];
    return (
        <div className={cx('wrap')}>
            <div className={cx('container')}>
                <div className={cx('body')}>
                    <FormAdmin data={data} field={'blogs'} />
                </div>
            </div>
        </div>
    );
}

export default BlogCreate;
