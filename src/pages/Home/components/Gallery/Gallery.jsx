import { startDecor } from '../../../../assets/Icons';
import GalleryItem from '../../../../components/GalleryItem/GalleryItem';
import { fakeData } from '../../../../data/data';
import styles from './Gallery.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Gallery() {
    return (
        <section className={cx('gallery')}>
            <div className={cx('wrap', 'container')}>
                <span className={cx('sub-title')}>Our Gallery</span>
                <h2 className={cx('title')}>Try Our Special Dishes</h2>
                <p className={cx('desc')}>
                    A list of top Bangladeshi food including mains, drinks, and deserts you must try while in
                    Bangladesh, for an authentic experience. Check now!
                </p>
                <div className={cx('body')}>
                    <div className="row row-cols-2 gx-5">
                        <div className="col">
                            <GalleryItem data={fakeData.galleryData[0]} />
                        </div>
                        <div className="col">
                            <div className={cx('wrapper')}>
                                {fakeData.galleryData.slice(1).map((item, index) => {
                                    return <GalleryItem small key={index} data={item} />;
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <span className={cx('star')}>{startDecor}</span>
        </section>
    );
}

export default Gallery;
