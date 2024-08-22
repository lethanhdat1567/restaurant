import classNames from 'classnames/bind';
import styles from './CommentInput.module.scss';
import { user } from '../../../assets/Icons';
import CommentDesc from './CommentDesc';

const cx = classNames.bind(styles);

function CommentInput({ desc }) {
    return desc ? (
        <CommentDesc />
    ) : (
        <div className={cx('form-group')}>
            <label htmlFor="" className={cx('label')}>
                Your name *
            </label>
            <div className={cx('input-wrap')}>
                <input type="text" className={cx('input')} />
                <span className={cx('icon')}>{user}</span>
            </div>
        </div>
    );
}

export default CommentInput;
