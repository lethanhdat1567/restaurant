import classNames from 'classnames/bind';
import styles from './Loading.module.scss';
import { ScaleLoader } from 'react-spinners';

const cx = classNames.bind(styles);

function Loading() {
    return (
        <div className={cx('loading')}>
            <ScaleLoader color="#fff" />
        </div>
    );
}

export default Loading;
