import classNames from 'classnames/bind';
import styles from './FormCheckout.module.scss';
import CommentInput from '../../../../components/CommentForm/components/CommentInput';
import InputSelect from '../../../../components/InputSelect/InputSelect';

const cx = classNames.bind(styles);

function FormCheckout() {
    return (
        <div className={cx('form-wrap')}>
            <h2 className={cx('form-label')}>Billing details</h2>
            <form action="" className={cx('form')}>
                <CommentInput />
                <CommentInput />
                <InputSelect />
                <CommentInput />
            </form>
        </div>
    );
}

export default FormCheckout;
