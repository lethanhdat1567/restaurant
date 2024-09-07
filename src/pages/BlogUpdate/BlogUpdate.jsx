import classNames from 'classnames/bind';
import styles from './BlogUpdate.module.scss';
import { useParams } from 'react-router-dom';
import FormAdmin from '../../components/FormAdmin/FormAdmin';

const cx = classNames.bind(styles);

function BlogUpdate() {
    const { slug } = useParams();
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
                    <FormAdmin data={data} field={'blogs'} slug={slug} updated />
                </div>
            </div>
        </div>
    );
}

export default BlogUpdate;
