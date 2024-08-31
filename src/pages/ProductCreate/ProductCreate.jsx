import classNames from 'classnames/bind';
import styles from './ProductCreate.module.scss';
import FormAdmin from '../../components/FormAdmin/FormAdmin';

const cx = classNames.bind(styles);

function ProductCreate() {
    const data = [
        {
            type: 'select',
            label: 'category',
            name: 'category',
            options: [
                {
                    label: 'Breakfast',
                    vaule: '1',
                },
                {
                    label: 'Lunch',
                    vaule: '2',
                },
                {
                    label: 'Dinner',
                    vaule: '3',
                },
                {
                    label: 'Starters',
                    vaule: '4',
                },
            ],
        },
        {
            label: 'Name',
            name: 'name',
        },
        {
            label: 'Price',
            name: 'price',
        },
        {
            label: 'Discount',
            name: 'discount',
        },
        {
            type: 'upload',
            label: 'Thumbnail',
            name: 'thumbnail',
        },
        {
            type: 'area',
            label: 'Desscription',
            name: 'description',
        },
    ];
    return (
        <div className={cx('wrap')}>
            <div className={cx('container')}>
                <div className={cx('body')}>
                    <FormAdmin data={data} field={'products'} />
                </div>
            </div>
        </div>
    );
}

export default ProductCreate;
