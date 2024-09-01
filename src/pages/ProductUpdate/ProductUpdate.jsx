import classNames from 'classnames/bind';
import styles from './ProductUpdate.module.scss';
import FormAdmin from '../../components/FormAdmin/FormAdmin';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

const cx = classNames.bind(styles);

function ProductUpdate() {
    const { slug } = useParams();

    const data = [
        {
            label: 'Name',
            name: 'title',
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
                    value: 1,
                },
                {
                    label: 'Lunch',
                    value: 2,
                },
                {
                    label: 'Dinner',
                    value: 3,
                },
                {
                    label: 'Starters',
                    value: 4,
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
            label: 'Desscription',
            name: 'description',
        },
    ];
    return (
        <div className={cx('wrap')}>
            <div className={cx('container')}>
                <div className={cx('body')}>
                    <FormAdmin data={data} field={'products'} slug={slug} updated />
                </div>
            </div>
        </div>
    );
}

export default ProductUpdate;
