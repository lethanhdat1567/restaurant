import ListItem from '../../../../components/ListItem/ListItem';
import Quote from '../../../../components/Quote/Quote';
import RelatedPost from '../RelatedPost/RelatedPost';
import styles from './Body.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Body() {
    return (
        <div className={cx('body')}>
            <h3 className={cx('title')}>How the Role of Restaurants Is Increasing</h3>
            <p className={cx('desc')}>
                He restaurant industry has experienced a significant paradigm shift over the past decade. In addition to
                providing excellent food, restaurants strive to provide a pleasant customer experience to encourage
                their customers to visit them again. Just look at how brands will attract more customers; CallBurger
                franchise in Pasadena showcasing a burge.
            </p>
            <p className={cx('desc')}>
                But they have tons of cash to burn on such gimmicks, right? How can a smaller restaurants compete with
                that? That’s true, but AI in restaurants isn’t about fancy gimmicks or eye-catching technologies alone.
                Today, AI is accessible to everyone, and there are smaller ways to use it to your advantage.
            </p>
            <div className={cx('quote')}>
                <Quote />
            </div>
            <div className={cx('list')}>
                <h3 className={cx('title')}>How the Role of Restaurants Is Increasing</h3>
                <div className={cx('list')}>
                    <ListItem />
                    <ListItem />
                    <ListItem />
                </div>
            </div>
            <hr />
        </div>
    );
}

export default Body;
