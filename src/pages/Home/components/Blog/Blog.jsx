import classNames from 'classnames/bind';
import styles from './Blog.module.scss';
import { fakeData } from '../../../../data/data';
import BlogItem from '../../../../components/BlogItem/BlogItem';
import Button from '../../../../components/Button/Button';
import { arrowRight } from '../../../../assets/Icons';

const cx = classNames.bind(styles);

function Blog() {
    return (
        <div className={cx('blog')}>
            <div className="container">
                <div className={cx('wrapper')}>
                    <span className={cx('sub-title')}>Our blog</span>
                    <h2 className={cx('title')}>Recent Articles</h2>
                </div>
                <div className={cx('body')}>
                    <div className="row row-cols-3">
                        {fakeData.blogs.map((item, index) => {
                            return (
                                <div className="col" key={index}>
                                    <BlogItem data={item} />
                                </div>
                            );
                        })}
                    </div>
                    <Button text className={cx('btn-more')}>
                        Explore All Blogs <span className={cx('btn-arrow')}>{arrowRight}</span>
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Blog;
