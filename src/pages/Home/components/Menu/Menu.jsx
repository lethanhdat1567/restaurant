import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import MenuFilter from './components/MenuFilter/MenuFilter';

const cx = classNames.bind(styles);

function Menu() {
    return (
        <section className={cx('menu')}>
            <div className="container">
                <div className={cx('wrapper')}>
                    <span className={cx('sub-title')}>Our menu</span>
                    <h2 className={cx('title')}>Choose & Taste What You Like </h2>
                    <p className={cx('desc')}>
                        A list of top Bangladeshi food including mains, drinks, and deserts you must try while in
                        Bangladesh, for an authentic experience. Check now!
                    </p>
                    <MenuFilter />
                </div>
            </div>
        </section>
    );
}

export default Menu;
