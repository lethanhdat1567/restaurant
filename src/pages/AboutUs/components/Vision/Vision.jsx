import classNames from 'classnames/bind';
import styles from './Vision.module.scss';
import { fakeData } from '../../../../data/data';
import VisionItem from '../../../../components/VisionItem/VisionItem';
import { imgs } from '../../../../assets/Imgs/imgs';

const cx = classNames.bind(styles);

function Vision() {
    return (
        <section className={cx('vision')}>
            <div className="container">
                <div className={cx('wrapper')}>
                    <h2 className={cx('title')}>Our Vision & Mission</h2>
                    <p className={cx('desc')}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat aliquam amet, cursus tellus non
                        consequat laoreet eget ornare. Tellus vulputate tellus a, lobortis et nisl. Quisque vulputate
                        eget et, aliquet libero, porttitor luctus placerat.
                    </p>
                    <div className="row g-5">
                        <div className="col">
                            <div className={cx('list')}>
                                {fakeData.visionList.map((item, index) => {
                                    return <VisionItem data={item} key={index} />;
                                })}
                            </div>
                        </div>
                        <div className="col">
                            <div className={cx('banner')}>
                                <img src={imgs.visionBanner} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Vision;
