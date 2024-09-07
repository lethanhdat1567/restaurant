import classNames from 'classnames/bind';
import styles from './BlogDetail.module.scss';
import Heading from './components/Heading/Heading';
import Body from './components/Body/Body';
import { useEffect, useState } from 'react';
import { request } from '../../utils/request';
import { useParams } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';

const cx = classNames.bind(styles);

function BlogDetail() {
    const slug = useParams();
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        request
            .get(`blogs/${slug.slug}`)
            .then((res) => {
                setContent(res.data.data.content);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    if (slug.slug === 'main') {
        return (
            <div className="container">
                <Heading />
                <Body />
            </div>
        );
    } else {
        return (
            <div className={cx('blog-detail')}>
                <div className="container">
                    {loading ? (
                        <Skeleton count={20} height={15} style={{ margin: '10px 0px' }} />
                    ) : (
                        <div className="tox-tinymce">
                            <div dangerouslySetInnerHTML={{ __html: content }} />
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default BlogDetail;
