import classNames from 'classnames/bind';
import styles from './Subscribe.module.scss';
import Button from '../../components/Button/Button';

const cx = classNames.bind(styles);

function Subscribe() {
    return (
        <section className={cx('subscribe')}>
            <div className="container">
                <div className={cx('wrapper')}>
                    <span className={cx('sub-title')}>Subscribe to our</span>
                    <h2 className={cx('title')}>Newsletter</h2>
                    <p className={cx('desc')}>Subscribe to our newsletter and receive 15% discount from your order.</p>
                    <form action="" className={cx('form')}>
                        <input className={cx('input')} type="text" name="" id="" placeholder="Enter Email" />
                        <button type="submit" className={cx('btn')}>
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Subscribe;
