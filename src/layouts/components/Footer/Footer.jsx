import styles from './Footer.module.scss';
import classNames from 'classnames/bind';
import { imgs } from '../../../assets/Imgs/imgs';
import { logo } from '../../../assets/Icons/index';
import { fakeData } from '../../../data/data';
import FooterItem from '../../../components/FooterItem/FooterItem';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div>
            <h2 className={cx('footer')}>
                <div className="container">
                    <div className={cx('wrap')}>
                        <div className="row row-cols-1 row-cols-md-2 g-5 g-md-2">
                            <div className="col col-md-4">
                                <div className={cx('left')}>
                                    <div className={cx('logo')}>
                                        <span className={cx('logo-img')}>{logo}</span>
                                        <span className={cx('title-logo')}>Wow Wraps</span>
                                    </div>
                                    <div className={cx('left-bottom')}>
                                        <p className={cx('desc')}>Download the WowWraps app today.</p>
                                        <div className={cx('apps')}>
                                            <img className={cx('app-img')} src={imgs.googlePlay} />
                                            <img className={cx('app-img')} src={imgs.appstore} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-md-8">
                                <div className={cx('right')}>
                                    <div className={cx('nav')}>
                                        {fakeData.footerList.map((item, index) => {
                                            return <FooterItem data={item} key={index} />;
                                        })}
                                    </div>
                                </div>
                            </div>
                            <div className={cx('left-bottom-md')}>
                                <p className={cx('desc')}>Download the WowWraps app today.</p>
                                <div className={cx('apps')}>
                                    <img className={cx('app-img')} src={imgs.googlePlay} />
                                    <img className={cx('app-img')} src={imgs.appstore} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </h2>
        </div>
    );
}

export default Footer;
