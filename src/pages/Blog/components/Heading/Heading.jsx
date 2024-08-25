import classNames from 'classnames/bind';
import styles from './Heading.module.scss';
import Button from '../../../../components/Button/Button';
import { imgs } from '../../../../assets/Imgs/imgs';

const cx = classNames.bind(styles);

function Heading() {
    return (
        <section className={cx('wrap')}>
            <h2 className={cx('title')}>Restaurant Management & Growth Blog</h2>
            <div className="row row-cols-1 row-cols-md-2 g-5">
                <div className="col col-md-7">
                    <div className={cx('banner')}>
                        <img src={imgs.blogBanner} alt="" className={cx('img')} />
                    </div>
                </div>
                <div className="col col-md-5">
                    <div className={cx('info')}>
                        <h3 className={cx('heading')}>
                            Everything You Need To Know About The Growing Role Of AI In Restaurants
                        </h3>
                        <p className={cx('desc')}>
                            You are sitting in your favorite restaurant and have ordered on a tablet on your table. A
                            few seconds after placing the order, a notification will appear in your messaging app.
                        </p>
                        <Button to={`${process.env.REACT_APP_ROOT}/blogdetail/1`} text>
                            Read more
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Heading;
