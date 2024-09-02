import classNames from 'classnames/bind';
import styles from './ImgAvatar.module.scss';
import { imgs } from '../../assets/Imgs/imgs';

const cx = classNames.bind(styles);

function ImgAvatar({ src }) {
    return <img className={cx('img')} src={src ? `${process.env.REACT_APP_BACKEND}${src}` : imgs.avatarUnset} alt="" />;
}

export default ImgAvatar;
