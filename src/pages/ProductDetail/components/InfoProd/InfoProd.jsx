import classNames from 'classnames/bind';
import styles from './InfoProd.module.scss';
import Comments from '../../../../components/Comments/Comments';

const cx = classNames.bind(styles);

function InfoProd() {
    return (
        <section className={cx('info-prod')}>
            <div className="container">
                <div className={cx('wrapper')}>
                    <ul className={cx('list')}>
                        <li className={cx('item', { active: true })}>Description</li>
                        <li className={cx('item')}>Reviews (1)</li>
                    </ul>
                    <Comments />
                </div>
            </div>
        </section>
    );
}

export default InfoProd;
