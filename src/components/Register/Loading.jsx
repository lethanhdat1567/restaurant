import classNames from 'classnames/bind';
import styles from './Register.module.scss';
import { ScaleLoader } from 'react-spinners';

const cx = classNames.bind(styles);

function Loading() {
    return (
        <div className={cx('loading')}>
            <ScaleLoader color="#ccc" />
        </div>
    );
}

export default Loading;
