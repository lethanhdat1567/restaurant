import classNames from 'classnames/bind';
import styles from './ProductDetail.module.scss';
import HeaderProd from './components/HeaderProd/HeaderProd';
import InfoProd from './components/InfoProd/InfoProd';
import Related from './components/Related/Related';

const cx = classNames.bind(styles);

function ProductDetail() {
    return (
        <div className={cx('product-detail')}>
            <HeaderProd />
            <InfoProd />
            <Related />
        </div>
    );
}

export default ProductDetail;
