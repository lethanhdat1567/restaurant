import classNames from 'classnames/bind';
import './Pagination.scss';
import styles from './BlogsContent.module.scss';
import BlogComp from '../../../../components/BlogComp/BlogComp';
import { Pagination } from 'antd';
import { arrowRight, nextPagi, prevPagi } from '../../../../assets/Icons';

const cx = classNames.bind(styles);

function BlogContent() {
    return (
        <div className={cx('blog-content')}>
            <div className={cx('wrap')}>
                <div className="row row-cols-2 g-5">
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
                    <div className="col">
                        <BlogComp />
                    </div>
                    <div className="col">
                        <BlogComp />
                    </div>
                </div>
            </div>
            <Pagination
                className={cx('pagi', 'dark')}
                defaultCurrent={1}
                pageSize={6}
                total={100}
                responsive={true}
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
