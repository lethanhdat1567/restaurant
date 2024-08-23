import classNames from 'classnames/bind';
import styles from './ListItem.module.scss';

const cx = classNames.bind(styles);

function ListItem() {
    return (
        <div className={cx('wrap')}>
            <p className={cx('desc')}>
                <mark className={cx('main')}>Automated Marketing:</mark>
                As discussed above, restaurant owners need a reliable digital marketing plan to stay a step ahead of the
                competition. AI today enables them to create better marketing strategies, maximize click-through rates,
                and run effective targeting campaigns to bring in more people to the restaurant. In addition
            </p>
        </div>
    );
}

export default ListItem;
