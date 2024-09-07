import classNames from 'classnames/bind';
import styles from './MenuFood.module.scss';
import Button from '../../components/Button/Button';
import priceTrander from '../../utils/priceTranfer';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import useDebounce from '../../hooks/useDebounce';
import { useEffect, useState } from 'react';
import { productsSlice } from '../../redux/reducer/ProductsSlice';
import { toastSlice } from '../../redux/reducer/ToastSlice';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBowlFood, faUtensils } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function MenuFood({ data }) {
    const dispatch = useDispatch();
    const [addToCart, setAddToCart] = useState();
    const [isAdd, setAdd] = useState(false);

    const toastDebounce = useDebounce(addToCart, 500);
    function handleAddToCart() {
        setAdd(true);
        dispatch(
            productsSlice.actions.setProducts({
                product_id: data.id,
                name: data.title,
                desc: data.description,
                img: data.img,
                price: data.price,
                discount: data.discount,
                quantity: 1,
                total: data.total,
            }),
        );
        setAddToCart(Date.now());
    }
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
        <section className={cx('menu-food')}>
            <Link to={`${process.env.REACT_APP_ROOT}/productdetail/${data.id}`} className={cx('banner')}>
                <img src={`${process.env.REACT_APP_BACKEND}${data.img}`} alt="" className={cx('img')} />
            </Link>
            <div className={cx('info')}>
                <Link to={`${process.env.REACT_APP_ROOT}/productdetail/${data.id}`}>
                    <h3 className={cx('title')}>{data.name}</h3>
                </Link>
                <p className={cx('desc')}>{data.desc}</p>
                {data.discount !== 0 ? (
                    <div className={cx('discount-wrap')}>
                        <span className={cx('old-price')}>{priceTrander(data.price)}</span>
                        <span className={cx('discount')}>{data.discount}%</span>
                    </div>
                ) : (
                    ''
                )}
            </div>
            <div className={cx('order')}>
                <motion.div
                    className={cx('toast-cart')}
                    initial={{ opacity: 0 }}
                    animate={isAdd ? { x: 200, y: -200, opacity: 0 } : { opacity: 1 }}
                    transition={{ duration: 1 }}
                    style={{ display: isAdd ? 'block' : 'none' }} // Ẩn phần tử khi không cần thiết
                    onAnimationComplete={() => {
                        if (isAdd) {
                            setAdd(false); // Reset trạng thái sau khi animation hoàn tất
                        }
                    }}
                >
                    <FontAwesomeIcon icon={faUtensils} className="fa-xl" />
                </motion.div>
                <Button text className={cx('btn')} onClick={handleAddToCart}>
                    Add to cart
                </Button>
                <span className={cx('price', { sale: data.discount !== 0 })}>{priceTrander(data.total)}</span>
            </div>
        </section>
    );
}

export default MenuFood;
