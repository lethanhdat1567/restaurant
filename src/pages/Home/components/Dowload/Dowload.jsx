import classNames from 'classnames/bind';
import styles from './Dowloand.module.scss';
import { dowloadDecor } from '../../../../assets/Icons';
import { imgs } from '../../../../assets/Imgs/imgs';
const cx = classNames.bind(styles);

function Dowload() {
    return (
        <section className={cx('dowloand')}>
            <div className="container">
                <div className={cx('wrap')}>
                    <div className="row row-cols-1 row-cols-md-2 g-5">
                        <div className="col">
                            <div className={cx('info')}>
                                <h2 className={cx('title')}>Download our mobile app.</h2>
                                <p className={cx('desc')}>
                                    I will never forgive anyone to choose the way to get the thing.
                                </p>
                                <div className={cx('app')}>
                                    <img src={imgs.googlePlay} className={cx('img')} />
                                    <img src={imgs.appstore} className={cx('img')} />
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className={cx('banner')}>
                                <img className={cx('img_banner')} src={imgs.app} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <span className={cx('decor')}>{dowloadDecor}</span>
        </section>
    );
}

export default Dowload;
