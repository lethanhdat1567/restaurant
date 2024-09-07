import classNames from 'classnames/bind';
import './Pagination.scss';
import styles from './BlogsContent.module.scss';
import BlogComp from '../../../../components/BlogComp/BlogComp';
import { Pagination } from 'antd';
import { nextPagi, prevPagi } from '../../../../assets/Icons';
import { useEffect, useState } from 'react';
import { request } from '../../../../utils/request';
import Loading from '../../../../components/Loading/Loading';

const cx = classNames.bind(styles);

function BlogContent() {
    const [loading, setLoading] = useState(false);
    const [blogData, setBlogData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 6;
    useEffect(() => {
        setLoading(true);
        request
            .get('blogs')
            .then((res) => {
                setBlogData(res.data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const pageIndex = (currentPage - 1) * pageSize;
    const BlogsPaginate = blogData.slice(pageIndex, pageIndex + pageSize);
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className={cx('blog-content')}>
            <div className={cx('wrap')}>
                {loading ? (
                    <div className={cx('loading')}>
                        <Loading />
                    </div>
                ) : (
                    <div className="row row-cols-1 row-cols-sm-2 g-0 g-lg-5">
                        {BlogsPaginate.map((item, index) => (
                            <div className="col" key={index}>
                                <BlogComp data={item} />
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <Pagination
                className={cx('pagi', 'pagi-overlay')}
                style={{ color: '#fff' }}
                defaultCurrent={1}
                pageSize={6}
                total={blogData.length}
                responsive={true}
                onChange={handlePageChange}
                itemRender={(page, type, originalElement) => {
                    if (type === 'prev') {
                        return (
                            <div className={cx('prev')}>
                                <span className={cx('arrow')}> {prevPagi}</span>{' '}
                                <span className={cx('arrow-desc')}>Previous</span>
                            </div>
                        );
                    }
                    if (type === 'next') {
                        return (
                            <div className={cx('next')}>
                                <span className={cx('arrow-desc')}>Next</span>
                                <span className={cx('arrow')}>{nextPagi}</span>
                            </div>
                        );
                    }
                    return originalElement;
                }}
            ></Pagination>
        </div>
    );
}

export default BlogContent;
