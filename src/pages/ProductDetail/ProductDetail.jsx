import classNames from 'classnames/bind';
import styles from './ProductDetail.module.scss';
import HeaderProd from './components/HeaderProd/HeaderProd';
import InfoProd from './components/InfoProd/InfoProd';
import Related from './components/Related/Related';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { request } from '../../utils/request';

const cx = classNames.bind(styles);

function ProductDetail() {
    const { slug } = useParams();
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        request
            .get(`products/${slug}`)
            .then((res) => {
                setProduct((prev) => {
                    return { ...res.data.data };
                });
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div className={cx('product-detail')}>
            <HeaderProd data={product} loading={loading} />
            <InfoProd data={product} />
            {/* <Related data={product} /> */}
        </div>
    );
}

export default ProductDetail;
