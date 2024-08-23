import classNames from 'classnames/bind';
import styles from './Quote.module.scss';
import { imgs } from '../../assets/Imgs/imgs';

const cx = classNames.bind(styles);

function Quote() {
    return (
        <div className={cx('wrap')}>
            <img src={imgs.quote} alt="" className={cx('img')} />
            <div className={cx('quote')}>
                <p className={cx('desc')}>
                    *Ding* ‘Your order is being prepared by Chef Bot 19 and will be delivered to your table in
                    approximately 19 minutes. To get a receipt for your order, reply with Hi. We hope you enjoy your
                    dining experience with us. – Team Bots’
                </p>
            </div>
        </div>
    );
}

export default Quote;
