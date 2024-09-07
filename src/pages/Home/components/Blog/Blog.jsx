import classNames from 'classnames/bind';
import styles from './Blog.module.scss';
import { fakeData } from '../../../../data/data';
import BlogItem from '../../../../components/BlogItem/BlogItem';
import Button from '../../../../components/Button/Button';
import { arrowRight } from '../../../../assets/Icons';
import { useEffect, useState } from 'react';
import { request } from '../../../../utils/request';

const cx = classNames.bind(styles);

function Blog() {
    const [blogsData, setBlogsData] = useState([]);
    useEffect(() => {
        request
            .get('blogs')
            .then((res) => {
                const data = res.data.data.slice(0, 3);
                setBlogsData(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    return (
        <div className={cx('blog')}>
            <div className="container">
                <div className={cx('wrapper')}>
                    <span className={cx('sub-title')}>Our blog</span>
                    <h2 className={cx('title')}>Recent Articles</h2>
                </div>
                <div className={cx('body')}>
                    <div className="row row-cols-1 row-cols-md-3 g-5 g-md-4">
                        {blogsData.map((item, index) => {
                            return (
                                <div className="col" key={index}>
                                    <BlogItem data={item} />
                                </div>
                            );
                        })}
                    </div>
                    <Button text className={cx('btn-more')} to={`${process.env.REACT_APP_ROOT}/blog`}>
                        Explore All Blogs <span className={cx('btn-arrow')}>{arrowRight}</span>
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Blog;
