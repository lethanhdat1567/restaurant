import classNames from 'classnames/bind';
import styles from './CommentForm.module.scss';
import CommentInput from './components/CommentInput';
import Stars from '../Stars/Starts';
import Button from '../Button/Button';

const cx = classNames.bind(styles);

function CommentForm() {
    return (
        <section className={cx('wrap')}>
            <h3 className={cx('title')}>Add a review</h3>
            <p className={cx('desc')}>Your email address will not be published. Required fields are marked *</p>
            <form className={cx('btn-wrap')}>
                <div className={cx('form-input')}>
                    <CommentInput />
                    <CommentInput />
                </div>
                <div className={cx('star-wrap')}>
                    <span className={cx('star-title')}>Your rating</span>
                    <Stars />
                </div>
                <CommentInput desc />
                <div className={cx('bottom')}>
                    <div className={cx('save')}>
                        <input type="checkbox" className={cx('check-box')} />
                        <p className={cx('save-desc')}>
                            Save my name, email, and website in this browser for the next time I comment.
                        </p>
                    </div>
                    <Button primary>Submit</Button>
                </div>
            </form>
        </section>
    );
}

export default CommentForm;
