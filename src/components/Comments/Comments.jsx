import classNames from 'classnames/bind';
import styles from './Comments.module.scss';

import CommentItem from './components/CommentItem/CommentItem';
import { useEffect, useRef, useState } from 'react';
import { request } from '../../utils/request';
import CommentForm from './components/CommentForm/CommentForm';
import { useSelector } from 'react-redux';
import FormReply from './components/FormReply/FormReply';

const cx = classNames.bind(styles);

function Comments({ data }) {
    // redux
    const user = useSelector((state) => state.user.user);
    // hooks
    const [commentData, setCommentData] = useState([]);
    const [repliesData, setRepliesData] = useState([]);
    const [triggerFetch, setTriggerFetch] = useState(false);
    const commentInput = useRef();

    useEffect(() => {
        request
            .get(`comments/${data.id}`)
            .then((res) => {
                setCommentData(res.data.data.comments);
                setRepliesData(res.data.data.replies);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [triggerFetch]);

    return (
        <section className={cx('wrap')}>
            <div className={cx('form')}>
                <section className={cx('wrap')}>
                    <h3 className={cx('title')}>Add a review</h3>
                    <p className={cx('desc')}>Your email address will not be published. Required fields are marked *</p>
                    <div className={cx('comment-body')}>
                        <img src={`${process.env.REACT_APP_BACKEND}${user.avatar}`} alt="" className={cx('avatar')} />
                        <CommentForm
                            ref={commentInput}
                            data={data}
                            user={user}
                            trigger={triggerFetch}
                            setTrigger={setTriggerFetch}
                        />
                    </div>
                </section>
            </div>
            <div className={cx('comment-wrap')}>
                {commentData.map((item, index) => {
                    return (
                        <CommentItem
                            data={item}
                            replies={repliesData}
                            key={index}
                            user={user}
                            trigger={triggerFetch}
                            setTrigger={setTriggerFetch}
                            ref={commentInput}
                        />
                    );
                })}
            </div>
        </section>
    );
}

export default Comments;
