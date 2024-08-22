import classNames from 'classnames/bind';
import styles from './Related.module.scss';
import MenuFood from '../../../../components/MenuFood/MenuFood';
import { fakeData } from '../../../../data/data';

const cx = classNames.bind(styles);

function Related() {
    return (
        <div className={cx('related')}>
            <div className="container">
                <div className={cx('wrapper')}>
                    <h3 className={cx('title')}>Related Items</h3>
                    <div className={cx('content')}>
                        {fakeData.relatedList.map((item, index) => {
                            return <MenuFood data={item} key={index} />;
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Related;
