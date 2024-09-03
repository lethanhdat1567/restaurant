import classNames from 'classnames/bind';
import styles from './TranferMethod.module.scss';
import { Link } from 'react-router-dom';
import Button from '../../../../components/Button/Button';
import Radios from '../../../../components/Radios/Radios';

const cx = classNames.bind(styles);

function TranferMethod() {
    return (
        <section className={cx('tranfer-method')}>
            <div className={cx('radios')}>
                <h3 className={cx('title')}>Select payment method</h3>
                <Radios />
            </div>
            <p className={cx('desc')}>
                Your personal data will be used to process your order, support your experience throughout this website,
                and for other purposes described in our <Link className={cx('link')}>privacy policy</Link>.
            </p>
            <Button primary className={cx('btn')}></Button>
        </section>
    );
}

export default TranferMethod;
