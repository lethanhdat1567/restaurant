import classNames from 'classnames/bind';
import styles from './ProductCreate.module.scss';
import FormAdmin from '../../components/FormAdmin/FormAdmin';

const cx = classNames.bind(styles);

function ProductCreate() {
    const data = [
        {
            label: 'Name',
            name: 'name',
        },
        {
            label: 'Price',
            name: 'price',
            rules: [
                {
                    pattern: /^\d+$/,
                    message: 'The input is not a valid number!',
                },
            ],
        },
        {
            label: 'Discount',
            name: 'discount',
            rules: [
                {
                    pattern: /^\d+$/,
                    message: 'The input is not a valid number!',
                },
            ],
        },
        {
            type: 'select',
            label: 'category',
            name: 'category_id',
            options: [
                {
                    label: 'Breakfast',
                    value: '1',
                },
                {
                    label: 'Lunch',
                    value: '2',
                },
                {
                    label: 'Dinner',
                    value: '3',
                },
                {
                    label: 'Starters',
                    value: '4',
                },
            ],
        },
        {
            type: 'upload',
            label: 'Thumbnail',
            name: 'thumbnail',
        },
        {
            type: 'area',
            label: 'Sub title',
            name: 'description',
        },
        {
            type: 'edit',
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
