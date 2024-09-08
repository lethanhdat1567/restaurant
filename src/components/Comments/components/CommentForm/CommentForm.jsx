import classNames from 'classnames/bind';
import styles from './CommentForm.module.scss';
import TextareaAutosize from 'react-textarea-autosize';
import { useRef, useState } from 'react';
import { request } from '../../../../utils/request';
import Modal from '../Modal/Modal';
import { forwardRef } from 'react';

const cx = classNames.bind(styles);

function CommentForm({ data, user, setTrigger, trigger }, ref) {
    // hooks
    const [utilActive, setUntilActive] = useState(false);
    const [adoptSubmit, setAdoptSubmit] = useState(false);
    const [commentValue, setCommentValue] = useState('');

    function handleCancle(e) {
        e.preventDefault();
        ref.current.blur();
        setUntilActive(false);
        setCommentValue('');
    }
    function handleChangeValue(e) {
        if (e.target.value.trim()) {
            setAdoptSubmit(true);
        } else {
            setAdoptSubmit(false);
        }
        setCommentValue(e.target.value);
    }
    function handleSubmit(e) {
        e.preventDefault();
        if (adoptSubmit) {
            const user_id = user.id;
            const prod_id = data.id;
            const value = {
                user_id: user_id,
                product_id: prod_id,
                comment: commentValue,
            };
            request
                .post(`comments`, value)
                .then((res) => {
                    setCommentValue('');
                    setAdoptSubmit(false);
                    setUntilActive(false);
                    setTrigger(!trigger);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
        return;
    }
    function handleUtils() {
        setUntilActive(true);
    }
    return (
        <form className={cx('form')}>
            <TextareaAutosize
                ref={ref}
                minRows={1}
                maxRows={10}
                placeholder="Write your comment..."
                onChange={handleChangeValue}
                onClick={handleUtils}
                value={commentValue}
                className={cx('input')}
            />
            <div className={cx('utils', { active: utilActive })}>
                <button className={cx('cancle')} onClick={handleCancle}>
                    Cancle
                </button>
                <button className={cx('btn', { active: adoptSubmit })} onClick={handleSubmit}>
                    Comment
                </button>
            </div>
            <div style={{ display: 'none' }}>
                <Modal />
            </div>
        </form>
    );
}

export default forwardRef(CommentForm);
