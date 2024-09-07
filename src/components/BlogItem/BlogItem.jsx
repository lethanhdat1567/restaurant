import styles from './BlogItem.module.scss';
import classNames from 'classnames/bind';
import Button from '../../components/Button/Button';
import { imgs } from '../../assets/Imgs/imgs';
import { Link } from 'react-router-dom';
import moment from 'moment';

const cx = classNames.bind(styles);

function BlogItem({ data }) {
    return (
        <div className={cx('wrapper')}>
            <Link to={`${process.env.REACT_APP_ROOT}/blogdetail/1`}>
                <img src={`${process.env.REACT_APP_BACKEND}${data.img}`} alt="" className={cx('img')} />
            </Link>
            <div className={cx('body')}>
                <span className={cx('info_item')}>Date: {moment(data.updated_at).format('DD/MM/YYYY')}</span>
                <Link className={cx('link')} to={`${process.env.REACT_APP_ROOT}/blogdetail/1`}>
                    <h3 className={cx('title')}>{data.name}</h3>
                </Link>
                <p className={cx('desc')}>{data.desc}</p>
                <Button to={`${process.env.REACT_APP_ROOT}/blogdetail/${data.id}`} text>
                    Read now
                </Button>
            </div>
        </div>
    );
}

export default BlogItem;
