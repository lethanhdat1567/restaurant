import classNames from 'classnames/bind';
import styles from './HeaderProd.module.scss';
import Button from '../../../../components/Button/Button';
import { imgs } from '../../../../assets/Imgs/imgs';
import priceTranfer from '../../../../utils/priceTranfer';
import Stars from '../../../../components/Stars/Starts';
import Deposite from '../../../../components/Deposite/Deposite';
const cx = classNames.bind(styles);

function HeaderProd({ data }) {
    console.log(data);

    return (
        <section className={cx('header')}>
            <div className="container">
                <div className={cx('wrapper')}>
                    <div className="row row-cols-1 row-cols-lg-2 g-2 g-lg-5">
                        <div className="col">
                            <div className={cx('banner')}>
                                <img
                                    src={`${process.env.REACT_APP_BACKEND}${data.image}`}
                                    alt=""
                                    className={cx('img')}
                                />
                            </div>
                        </div>
                        <div className="col">
                            <div className={cx('info')}>
                                <h2 className={cx('title')}>{data.title}</h2>
                                <div className={cx('rate-wrap')}>
                                    <Stars />
                                    <span className={cx('sub-review')}>{`( 1 customer review )`}</span>
                                </div>
                                {data.discount === 0 ? (
                                    <div className={cx('sale-wrap')}>
                                        <span className={cx('discount-price')}>{data.price}</span>
                                        <div className={cx('wrap-dis')}>
                                            <span className={cx('discount')}>{data.discount}%</span>
                                        </div>
                                    </div>
                                ) : (
                                    ''
                                )}
                                <span className={cx('price')}>{priceTranfer(data.total)}</span>
                                <p className={cx('desc')}>{data.description}</p>
                                <div className={cx('cart-wrap')}>
                                    <Deposite />
                                    <Button primary large>
                                        ADD TO CARD
                                    </Button>
                                </div>
                                <div className={cx('sub-info')}>
                                    <div className={cx('sub-wrap')}>
                                        <span className={cx('newest')}>SKU:</span>
                                        <span className={cx('last')}>PT322</span>
                                    </div>
                                    <div className={cx('sub-wrap')}>
                                        <span className={cx('newest')}>CATEGORY:</span>
                                        <span className={cx('last')}>PT322</span>
                                    </div>
                                    <div className={cx('sub-wrap')}>
                                        <span className={cx('newest')}>TAGS:</span>
                                        <span className={cx('last')}>PT322</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeaderProd;
