import classNames from 'classnames/bind';
import styles from './HeaderProd.module.scss';
import Button from '../../../../components/Button/Button';
import { imgs } from '../../../../assets/Imgs/imgs';
import priceTranfer from '../../../../utils/priceTranfer';
import Stars from '../../../../components/Stars/Starts';
import Deposite from '../../../../components/Deposite/Deposite';
const cx = classNames.bind(styles);

function HeaderProd() {
    return (
        <section className={cx('header')}>
            <div className="container">
                <div className={cx('wrapper')}>
                    <div className="row row-cols-1 row-cols-lg-2 g-2 g-lg-5">
                        <div className="col">
                            <div className={cx('banner')}>
                                <img src={imgs.prodDetailBanner} alt="" className={cx('img')} />
                            </div>
                        </div>
                        <div className="col">
                            <div className={cx('info')}>
                                <h2 className={cx('title')}>Crispy Chicken Breasts</h2>
                                <div className={cx('rate-wrap')}>
                                    <Stars />
                                    <span className={cx('sub-review')}>{`( 1 customer review )`}</span>
                                </div>
                                <span className={cx('price')}>{priceTranfer(54)}</span>
                                <p className={cx('desc')}>
                                    Aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem
                                    ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur uis
                                    autem vel eum iure reprehenderit.
                                </p>
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
