import classNames from 'classnames/bind';
import styles from './NavItem.module.scss';
import { user } from '../../../../../../assets/Icons';
import Button from '../../../../../../components/Button/Button';

const cx = classNames.bind(styles);

function NavItem({ data }) {
    return (
        <div className={cx('nax-wrap')}>
            <p className={cx('title')}>{data.title}</p>
            <div className={cx('wrap-item')}>
                {data.children.map((item, index) => {
                    return (
                        <Button
                            to={item.href && `${process.env.REACT_APP_ROOT}/${item.href}`}
                            leftIcon={item.icon}
                            className={cx('btn')}
                            key={index}
                        >
                            {item.name}
                        </Button>
                    );
                })}
            </div>
        </div>
    );
}

export default NavItem;
