import classNames from 'classnames/bind';
import styles from './ContactForm.module.scss';
import BookingInput from '../../../../components/BookingInput/BookingInput';
import CommentInput from '../../../../components/CommentForm/components/CommentInput';
import CommentDesc from '../../../../components/CommentForm/components/CommentDesc';
import Button from '../../../../components/Button/Button';

const cx = classNames.bind(styles);

function ContactForm() {
    return (
        <form className={cx('form')}>
            <div className={cx('group')}>
                <CommentInput />
                <CommentInput />
            </div>
            <CommentInput />
            <CommentDesc />
            <Button primary large className={cx('btn')}>
                Submit
            </Button>
        </form>
    );
}

export default ContactForm;
