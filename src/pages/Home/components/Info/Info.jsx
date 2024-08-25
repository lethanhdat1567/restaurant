import InfoItem from '../../../../components/InfoItem/InfoItem';
import { fakeData } from '../../../../data/data';
import styles from './Info.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Info() {
    return (
        <section className={cx('info')}>
            <div className={cx('wrap', 'container')}>
                <div className={cx('row row-cols-md-3 row-cols-1')}>
                    {fakeData.infoData.map((item, index) => {
                        return (
                            <div className="col" key={index}>
                                <InfoItem data={item} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Info;
