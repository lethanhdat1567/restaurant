import classNames from 'classnames/bind';
import styles from './BlogComp.module.scss';
import Button from '../Button/Button';
import { imgs } from '../../assets/Imgs/imgs';
import { Link } from 'react-router-dom';
import moment from 'moment';

const cx = classNames.bind(styles);

function BlogComp({ data }) {
    return (
        <section className={cx('wrap')}>
            <div className={cx('body')}>
                <div className={cx('banner')}>
                    <Link to={`${process.env.REACT_APP_ROOT}/blogdetail/${data?.id}`}>
                        <img src={`${process.env.REACT_APP_BACKEND}${data?.img}`} alt="" className={cx('img')} />
                    </Link>
                </div>
                <div className={cx('info')}>
                    <Link to={`${process.env.REACT_APP_ROOT}/blogdetail/1`}>
                        <h3 className={cx('title')}>{data?.name}</h3>
                    </Link>
                    <div className={cx('sub')}>
                        <span className={cx('date')}>{moment(data.updated_at).format('DD/MM/YYYY')}</span>
                        <span className={cx('decor')}></span>
                        <span className={cx('owner')}>By Admin</span>
                    </div>
                </div>
            </div>
            <Button to={`${process.env.REACT_APP_ROOT}/blogdetail/${data?.id}`} text>
                Read more
            </Button>
        </section>
    );
}

export default BlogComp;
