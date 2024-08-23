import classNames from 'classnames/bind';
import styles from './RelatedPost.module.scss';
import BlogComp from '../../../../components/BlogComp/BlogComp';

const cx = classNames.bind(styles);

function RelatedPost() {
    return (
        <div className={cx('wrap')}>
            <h3 className={cx('title')}>Related Blog post</h3>
            <div className="row row-cols-2">
                <div className="col">
                    <BlogComp />
                </div>
                <div className="col">
                    <BlogComp />
                </div>
                <div className="col">
                    <BlogComp />
                </div>
                <div className="col">
                    <BlogComp />
                </div>
            </div>
        </div>
    );
}

export default RelatedPost;
