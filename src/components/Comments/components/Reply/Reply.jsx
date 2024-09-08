import classNames from 'classnames/bind';
import styles from './Reply.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import ReplyItem from './ReplyItem';

const cx = classNames.bind(styles);

function Reply({ data, replies }) {
    const [expand, setExpand] = useState(false);
    const repliesData = replies.filter((item, index) => {
        return data.id === item.parent_id;
    });

    return (
        <div className={cx('wrap')}>
            {repliesData.length > 0 && (
                <div className={cx('sub')} onClick={() => setExpand(!expand)}>
                    {expand ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}
                    <p className={cx('desc')}>{repliesData.length} response</p>
                </div>
            )}
            {expand && (
                <div className={cx('reply-body')}>
                    {repliesData.map((item, index) => {
                        return <ReplyItem data={item} key={index} />;
                    })}
                </div>
            )}
        </div>
    );
}

export default Reply;
