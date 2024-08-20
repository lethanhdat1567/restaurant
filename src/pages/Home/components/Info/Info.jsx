import InfoItem from '../../../../components/InfoItem/InfoItem';
import { fakeData } from '../../../../data/data';
import styles from './Info.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Info() {
    return (
        <section className={cx('info')}>
            <div className={cx('wrap', 'container')}>
                {fakeData.infoData.map((item, index) => {
                    return <InfoItem data={item} key={index} />;
                })}
            </div>
        </section>
    );
}

export default Info;
