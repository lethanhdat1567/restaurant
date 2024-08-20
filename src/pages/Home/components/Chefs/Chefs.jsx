import classNames from 'classnames/bind';
import styles from './Chefs.module.scss';
import './SwiperChef.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import { imgs } from '../../../../assets/Imgs/imgs';
import { nextArrowChef, preArrowChef } from '../../../../assets/Icons';
import { fakeData } from '../../../../data/data';

const cx = classNames.bind(styles);

function Chefs() {
    return (
        <section className={cx('chefs')}>
            <div className="container">
                <div className={cx('wrapper')}>
                    <span className={cx('sub-title')}>Tasty and Crunchy</span>
                    <h2 className={cx('title')}>Our Chef</h2>
                    <div className={cx('slider')}>
                        <Swiper
                            effect="coverflow"
                            spaceBetween={30}
                            slidesPerView={3}
                            className={cx('swiper-chef')}
                            modules={[Pagination, Navigation]}
                            navigation={{
                                prevEl: '.swiper-button-prev',
                                nextEl: '.swiper-button-next',
                            }}
                        >
                            {fakeData.chefs.map((item, index) => {
                                return (
                                    <SwiperSlide className={cx('wrap-slice')} key={index}>
                                        <img src={imgs[item.img]} className={cx('img')} />
                                        <span className={cx('name')}>{item.name}</span>
                                    </SwiperSlide>
                                );
                            })}
                            <div className={cx('slider-controler')}>
                                <div className="swiper-button-prev">{preArrowChef}</div>
                                <div className="swiper-button-next">{nextArrowChef}</div>
                            </div>
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Chefs;
