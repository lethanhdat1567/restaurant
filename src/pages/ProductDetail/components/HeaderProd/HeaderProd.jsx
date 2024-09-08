import classNames from 'classnames/bind';
import styles from './HeaderProd.module.scss';
import Button from '../../../../components/Button/Button';
import { imgs } from '../../../../assets/Imgs/imgs';
import priceTranfer from '../../../../utils/priceTranfer';
import Stars from '../../../../components/Stars/Starts';
import Deposite from '../../../../components/Deposite/Deposite';
import { useDispatch, useSelector } from 'react-redux';
import { productsSlice } from '../../../../redux/reducer/ProductsSlice';
import { useEffect, useState } from 'react';
import LoadingItem from '../LoadingItem/LoadingItem';
import { toastSlice } from '../../../../redux/reducer/ToastSlice';
import useDebounce from '../../../../hooks/useDebounce';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox, faCartShopping } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function HeaderProd({ data, loading }) {
    // redux
    const dispatch = useDispatch();
    // Hooks
    const [quantity, setQuantity] = useState(1);
    const [addToCart, setAddToCart] = useState();
    const [clicked, setClicked] = useState(false);

    const toastDebounce = useDebounce(addToCart, 500);

    const handleCart = () => {
        if (clicked) {
            return;
        }
        setClicked(true);
        dispatch(
            productsSlice.actions.setProducts({
                product_id: data.id,
                name: data.title,
                desc: data.description,
                img: data.img,
                price: data.price,
                discount: data.discount,
                quantity: quantity,
                total: data.total,
            }),
        );
        setAddToCart(Date.now());
        setTimeout(() => {
            setClicked(false);
        }, 2000);
    };

    useEffect(() => {
        if (toastDebounce) {
            dispatch(
                toastSlice.actions.setToast({
                    id: addToCart,
                    status: true,
                }),
            );
        }
    }, [toastDebounce]);

    return (
        <section className={cx('header')}>
            <div className="container">
                <div className={cx('wrapper')}>
                    {/* Loading */}
                    {loading ? (
                        <LoadingItem />
                    ) : (
                        <div className="row row-cols-1 row-cols-lg-2 g-2 g-lg-5">
                            <div className="col">
                                <div className={cx('banner')}>
                                    <img
                                        src={`${process.env.REACT_APP_BACKEND}${data.img}`}
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
                                    {data.discount !== 0 ? (
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
                                        {/* Deposite */}
                                        <Deposite quantity={quantity} setQuantity={setQuantity} data={data} />
                                        {/* Add to cart */}
                                        <button className={cx('add-btn', { clicked: clicked })} onClick={handleCart}>
                                            <span className={cx('add-to-cart', 'add')}>ADD TO CART</span>
                                            <span className={cx('add-to-cart', 'added')}>ADDED</span>
                                            <FontAwesomeIcon icon={faBox} className={cx('box-cart')} />
                                            <FontAwesomeIcon icon={faCartShopping} className={cx('shopping-cart')} />
                                        </button>
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
                    )}
                </div>
            </div>
        </section>
    );
}

export default HeaderProd;
