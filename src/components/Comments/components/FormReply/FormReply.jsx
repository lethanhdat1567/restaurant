import classNames from 'classnames/bind';
import styles from './FormReply.module.scss';
import TextareaAutosize from 'react-textarea-autosize';
import { useState } from 'react';
import { request } from '../../../../utils/request';

const cx = classNames.bind(styles);

function FormReply({ isReply, setReply, data, user, trigger, setTrigger }) {
    const [inputValue, setInputValue] = useState('');
    const [adopt, setAdopt] = useState(false);

    function handleChange(e) {
        if (!e.target.value.trim()) {
            setAdopt(false);
        } else {
            setAdopt(true);
        }
        setInputValue(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (adopt) {
            setReply(false);
            const user_id = user.id;
            const prod_id = data.product_id;
            const value = {
                user_id: user_id,
                product_id: prod_id,
                comment: inputValue,
                parent_id: data.id,
            };
            request
                .post('comments', value)
                .then((res) => {
                    setInputValue('');
                    setAdopt(false);
                    setTrigger(!trigger);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
        return;
    }

    return (
        <div className={cx('wrap')}>
            <TextareaAutosize
                minRows={1}
                maxRows={10}
                onChange={handleChange}
                value={inputValue}
                placeholder="Write your reply..."
                className={cx('input')}
            />
            <div className={cx('utils', 'active')}>
                <button className={cx('cancle')} onClick={() => setReply(false)}>
                    Cancle
                </button>
                <button className={cx('btn', { active: adopt })} onClick={handleSubmit}>
                    Comment
                </button>
            </div>
        </div>
    );
}

export default FormReply;
