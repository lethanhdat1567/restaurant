import styles from './BlogItem.module.scss';
import classNames from 'classnames/bind';
import Button from '../../components/Button/Button';
import { imgs } from '../../assets/Imgs/imgs';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function BlogItem({ data }) {
    return (
        <div className={cx('wrapper')}>
            <Link>
                <img src={imgs[data.img]} alt="" className={cx('img')} />
            </Link>
            <div className={cx('body')}>
                <div className={cx('info')}>
                    <span className={cx('info_item')}>{data.date}</span>
                    <span className={cx('info_item')}>Comments: {data.comments}</span>
                </div>
                <Link className={cx('link')}>
                    <h3 className={cx('title')}>{data.title}</h3>
                </Link>
                <p className={cx('desc')}>{data.desc}</p>
                <Button text>Read now</Button>
            </div>
        </div>
    );
}

export default BlogItem;
