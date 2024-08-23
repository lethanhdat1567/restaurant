import classNames from 'classnames/bind';
import styles from './BlogDetail.module.scss';
import Heading from './components/Heading/Heading';
import Body from './components/Body/Body';

const cx = classNames.bind(styles);

function BlogDetail() {
    return (
        <div className={cx('blog-detail')}>
            <div className="container">
                <Heading />
                <Body />
            </div>
        </div>
    );
}

export default BlogDetail;
