import classNames from 'classnames/bind';
import styles from './Info.module.scss';
import Item from './Item';

const cx = classNames.bind(styles);

function Info() {
    return (
        <div className={cx('info')}>
            <h2 className={cx('title')}>Thong tin nguoi dung</h2>
            <p className={cx('sub-title')}>Dia chi va thong tin lien lac</p>
            <div className={cx('list')}>
                <div className="row row-cols-2 g-4">
                    <div className="col">
                        <Item />
                    </div>
                    <div className="col">
                        <Item />
                    </div>
                    <div className="col">
                        <Item />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Info;
