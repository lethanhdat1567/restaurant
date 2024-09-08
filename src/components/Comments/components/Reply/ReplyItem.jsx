import classNames from 'classnames/bind';
import styles from './Reply.module.scss';
import moment from 'moment';
import Tippy from '@tippyjs/react/headless';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import Stars from '../../../Stars/Starts';

const cx = classNames.bind(styles);

function ReplyItem({ data }) {
    const [visible, setVisible] = useState(false);
    const [isModal, setModal] = useState(false);
    return (
        <div className={cx('wrap-reply')}>
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
                                <li className={cx('item')}>
                                    <FontAwesomeIcon icon={faPen} />
                                    <span className={cx('desc-item')}>Modify</span>
                                </li>
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
                        <FontAwesomeIcon
                            icon={faEllipsisVertical}
                            style={{ padding: '10px', cursor: 'pointer' }}
                            onClick={() => setVisible(!visible)}
                        />
                    </Tippy>
                </div>
                <p className={cx('comment')}>{data.comment}</p>
            </div>
        </div>
    );
}

export default ReplyItem;
