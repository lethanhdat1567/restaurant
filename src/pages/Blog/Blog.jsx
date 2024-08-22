import classNames from 'classnames/bind';
import styles from './BLog.module.scss';
import Heading from './components/Heading/Heading';
import BlogContent from './components/BlogsContent/BlogsContent';
import SubscibeNew from '../../components/SubscribeNew/SubscibeNew';

const cx = classNames.bind(styles);

function Blog() {
    return (
        <div className={cx('blog')}>
            <div className="container">
                <div className={cx('wrap')}>
                    <Heading />
                    <BlogContent />
                    <SubscibeNew />
                </div>
            </div>
        </div>
    );
}

export default Blog;
