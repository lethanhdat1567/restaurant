import classNames from 'classnames/bind';
import styles from './MainHeaderOnly.module.scss';
import Header from '../components/Header/Header';

const cx = classNames.bind(styles);

function MainHeaderOnly({ children }) {
    return (
        <div className={cx('wrap')}>
            <Header />
            <div className={cx('content')}>
                <div className="container">{children}</div>
            </div>
        </div>
    );
}

export default MainHeaderOnly;
