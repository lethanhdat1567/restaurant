import classNames from 'classnames/bind';
import styles from './Restaurants.module.scss';
import RestaurantItem from '../../../../components/RestaurantItem/RestaurantItem';
import { fakeData } from '../../../../data/data';

const cx = classNames.bind(styles);

function Restaurants() {
    return (
        <div className={cx('restaurant')}>
            <div className="container">
                <div className={cx('wrapper')}>
                    <h2 className={cx('title')}>Visit Our Restaurant</h2>
                    <p className={cx('desc')}>
                        Quality country-style menu selection, friendly and efficient service, combined with genuine
                        value has kept Our Best serving families like yours for over 28.
                    </p>
                    <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3">
                        {fakeData.restaurants.map((item, index) => {
                            return <RestaurantItem data={item} key={index} />;
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Restaurants;
