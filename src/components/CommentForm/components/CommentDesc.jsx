import classNames from 'classnames/bind';
import styles from './CommentInput.module.scss';

const cx = classNames.bind(styles);

function CommentDesc() {
    return (
        <div className={cx('desc-wrap')}>
            <label htmlFor="desc" className={cx('label')}>
                Wirte review *
            </label>
            <textarea name="desc" id="desc" className={cx('desc')}></textarea>
        </div>
    );
}

export default CommentDesc;
