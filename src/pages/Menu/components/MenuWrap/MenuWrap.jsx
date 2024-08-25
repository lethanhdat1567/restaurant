import classNames from 'classnames/bind';
import styles from './MenuWrap.module.scss';
import './SliderMenu.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { arrowRight, menuDecor, prevArrow } from '../../../../assets/Icons/index';
import MenuFood from '../../../../components/MenuFood/MenuFood';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const cx = classNames.bind(styles);

function MenuWrap({ data }) {
    return (
        <section className={cx('menu-wrap')}>
            <div className="container">
                <div className={cx('wrapper')}>
                    <h2 className={cx('title')}>{data.title}</h2>
                    <span className={cx('decor')}>{menuDecor}</span>

                    <div className={cx('slider-wrap')}>
                        <Swiper
                            className={cx('slider')}
                            slidesPerView={1}
                            spaceBetween={50}
                            modules={[Navigation, Pagination]}
                            pagination={{
                                dynamicBullets: true,
                            }}
                            navigation={{ prevEl: '.slider-prev', nextEl: '.slider-next' }}
                            breakpoints={{
                                1200: {
                                    slidesPerView: 3,
                                    spaceBetween: 100,
                                },
                                765: {
                                    slidesPerView: 2,
                                },
                            }}
                        >
                            {data.foods.map((item, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <MenuFood data={item} />
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                        <div className={cx('slider-control')}>
                            <div className="slider-prev">
                                <span className="arrow">{prevArrow}</span>
                            </div>
                            <div className="slider-next">
                                <span className="arrow">{arrowRight}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MenuWrap;
