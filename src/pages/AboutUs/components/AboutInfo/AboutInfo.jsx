import classNames from 'classnames/bind';
import styles from './AboutInfo.module.scss';
import { imgs } from '../../../../assets/Imgs/imgs';
import InfoItem from './InfoItem';
import BannerItem from './BannerItem';

const cx = classNames.bind(styles);

function AboutInfo({ leftInfo, leftBanner, rightBanner, rightInfo }) {
    return (
        <section className={cx('about-info')}>
            <div className="container">
                <div className={cx('wrapper')}>
                    <div className={cx('', 'row row-cols-1 row-cols-lg-2 g-5', { bottom: rightInfo })}>
                        <div className="col">
                            {leftInfo && <InfoItem data={leftInfo} />}
                            {leftBanner && <BannerItem data={leftBanner} />}
                        </div>
                        <div className="col">
                            {rightInfo && <InfoItem data={rightInfo} />}
                            {rightBanner && <BannerItem data={rightBanner} />}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutInfo;
