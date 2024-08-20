import classNames from 'classnames/bind';
import styles from './Hero.module.scss';
import Button from '../../../../components/Button/Button';
import { imgs } from '../../../../assets/Imgs/imgs';

const cx = classNames.bind(styles);

function Hero() {
    return (
        <section className={cx('hero')}>
            <div className={cx('wrap')}>
                <span className={cx('sub-title')}>Welcome to Our Restaurant</span>
                <h1 className={cx('title')}>The Best Food For The Best Moments</h1>
                <p className={cx('desc')}>
                    We've got famous chefs and stars—Julia Child, Sophia Loren, Virginia Woolf—to thank for some of the
                    greatest food quotes of all time.
                </p>
                <Button text>View more</Button>
            </div>
            <img className={cx('img-1')} src={imgs.hero_banner_1} alt="" />
            <img className={cx('img-2')} src={imgs.hero_banner_2} alt="" />
        </section>
    );
}

export default Hero;
