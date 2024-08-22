import classNames from 'classnames/bind';
import styles from './BlogDetail.module.scss';
import Heading from './components/Heading/Heading';

const cx = classNames.bind(styles);

function BlogDetail() {
    return (
        <div className={cx('blog-detail')}>
            <div className="container">
                <Heading />
            </div>
        </div>
    );
}

export default BlogDetail;
