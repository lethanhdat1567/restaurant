import classNames from 'classnames/bind';
import styles from './SubscibeNew.module.scss';
import { arrowRight, subDecor } from '../../assets/Icons';
import { imgs } from '../../assets/Imgs/imgs';

const cx = classNames.bind(styles);

function SubscibeNew() {
    return (
        <section className={cx('subscribe')}>
            <div className="container">
                <div className={cx('wrapper-bt', 'row row-cols-1 row-cols-md-2 g-5')}>
                    <div className="col col-lg-4">
                        <div className={cx('banner')}>
                            <img src={imgs.subscribe1} alt="" className={cx('bannerImg')} />
                        </div>
                    </div>
                    <div className="col col-lg-8">
                        <div className={cx('content')}>
                            <div className={cx('info')}>
                                <h2 className={cx('title')}>Subscribe Newsletter & get letest news</h2>
                                <p className={cx('desc')}>
                                    Get insider access to news around the innovations, unique cooking techniques,
                                    culinary concepts, insights, and more
                                </p>
                            </div>
                            <div className={cx('form')}>
                                <input
                                    placeholder="Enter your email address"
                                    type="text"
                                    name=""
                                    id=""
                                    className={cx('input')}
                                />
                                <span className={cx('btn-form')}>{arrowRight}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <span className={cx('decor')}>{subDecor}</span>
        </section>
    );
}

export default SubscibeNew;
