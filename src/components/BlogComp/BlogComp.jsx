import classNames from 'classnames/bind';
import styles from './BlogComp.module.scss';
import Button from '../Button/Button';
import { imgs } from '../../assets/Imgs/imgs';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function BlogComp() {
    return (
        <section className={cx('wrap')}>
            <div className={cx('body')}>
                <div className={cx('banner')}>
                    <Link>
                        <img src={imgs.blogComp1} alt="" className={cx('img')} />
                    </Link>
                </div>
                <div className={cx('info')}>
                    <Link>
                        <h3 className={cx('title')}>5 Ways Restaurant Technology Makes or Breaks Business</h3>
                    </Link>
                    <div className={cx('sub')}>
                        <span className={cx('date')}>August 6, 2022</span>
                        <span className={cx('decor')}></span>
                        <span className={cx('owner')}>By Admin</span>
                    </div>
                </div>
            </div>
            <Button text>Read more</Button>
        </section>
    );
}

export default BlogComp;
