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
                        <div className="row row-cols-1 row-cols-md-3">
                            {fakeData.relatedList.map((item, index) => {
                                return (
                                    <div className="col" key={index}>
                                        <MenuFood data={item} />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Related;
