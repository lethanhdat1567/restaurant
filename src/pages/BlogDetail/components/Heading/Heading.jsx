import classNames from 'classnames/bind';
import styles from './Heading.module.scss';
import Button from '../../../../components/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faThreads } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { imgs } from '../../../../assets/Imgs/imgs';
import { share, subDecor } from '../../../../assets/Icons';

const cx = classNames.bind(styles);

function Heading() {
    return (
        <section className={cx('heading')}>
            <h2 className={cx('title')}>Everything you need to know about the growing role of AI in restaurants</h2>
            <p className={cx('desc')}>
                You are sitting in your favorite restaurant and have ordered on a tablet on your table. A few seconds
                after placing the order, a notification will appear in your messaging app.
            </p>
            <div className={cx('banner')}>
                <img src={imgs.blogDetailBanner} alt="" className={cx('img')} />
                <span className={cx('decor')}>{subDecor}</span>
            </div>
            <div className={cx('footer')}>
                <div className={cx('sub')}>
                    <span className={cx('sub-text')}>August 6, 2022</span>
                    <span className={cx('sub-decor')}></span>
                    <span className={cx('sub-text')}>By Admin</span>
                </div>
                <div className={cx('contact')}>
                    <button className={cx('btn')}>
                        <span className={cx('icon')}>{share}</span> Copy link
                    </button>
                    <Link className={cx('link')}>
                        <FontAwesomeIcon icon={faFacebook} className="fa-xl" />
                    </Link>
                    <Link className={cx('link')}>
                        <FontAwesomeIcon icon={faInstagram} className="fa-xl" />
                    </Link>
                    <Link className={cx('link')}>
                        <FontAwesomeIcon icon={faThreads} className="fa-xl" />
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Heading;
