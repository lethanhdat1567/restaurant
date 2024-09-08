import classNames from 'classnames/bind';
import styles from '../../Comments.module.scss';
import Stars from '../../../Stars/Starts';
import moment from 'moment/moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { useState } from 'react';
import Modal from '../Modal/Modal';
import FormReply from '../FormReply/FormReply';
import Reply from '../Reply/Reply';
import { forwardRef } from 'react';

const cx = classNames.bind(styles);

function CommentItem({ data, user, trigger, setTrigger, replies }, ref) {
    const [visible, setVisible] = useState(false);
    const [isModal, setModal] = useState(false);
    const [isReply, setReply] = useState(false);

    return (
        <div>
            <div className={cx('header-wrap')}>
                <Modal modal={isModal} setModal={setModal} comment={data} setTrigger={setTrigger} trigger={trigger} />
                <img src={`${process.env.REACT_APP_BACKEND}${data.avatar}`} alt="" className={cx('avatar')} />
                <div className={cx('info')}>
                    <div className={cx('heading')}>
                        <p className={cx('name')}>{data.fullname}</p>
                        <span className={cx('separate')}>-</span>
                        <span className={cx('timer')}>{moment(data.created_at).format('DD/MM/YYYY')}</span>
                        <Tippy
                            interactive
                            visible={visible}
                            onClickOutside={() => setVisible(false)}
                            placement="bottom"
                            render={(attrs) => (
                                <ul className={cx('list')} {...attrs}>
                                    <li
                                        className={cx('item')}
                                        onClick={() => {
                                            setModal(true);
                                            setVisible(false);
                                        }}
                                    >
                                        <FontAwesomeIcon icon={faTrash} />
                                        <span className={cx('desc-item')}>Delete</span>
                                    </li>
                                </ul>
                            )}
                        >
                            {user.id === data.user_id && (
                                <FontAwesomeIcon
                                    icon={faEllipsisVertical}
                                    style={{ padding: '10px', cursor: 'pointer' }}
                                    onClick={() => setVisible(!visible)}
                                />
                            )}
                        </Tippy>
                    </div>
                    <p className={cx('comment')}>{data.comment}</p>
                    <div className={cx('utils')}>
                        <p className={cx('reply')} onClick={() => setReply(true)}>
                            Reply
                        </p>
                    </div>
                </div>
            </div>
            {isReply && (
                <FormReply
                    trigger={trigger}
                    setTrigger={setTrigger}
                    isReply={isReply}
                    setReply={setReply}
                    data={data}
                    user={user}
                />
            )}
            <Reply data={data} replies={replies} />
        </div>
    );
}

export default forwardRef(CommentItem);
