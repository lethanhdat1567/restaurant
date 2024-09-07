import classNames from 'classnames/bind';
import styles from './InfoProd.module.scss';
import Comments from '../../../../components/Comments/Comments';
import Description from '../../../../components/Description/Description';
import { useState } from 'react';

const cx = classNames.bind(styles);

function InfoProd({ data }) {
    const dataComp = {
        nav: ['Description', 'Comments'],
        Description: {
            comp: <Description content={data.content} />,
        },
        Comments: {
            comp: <Comments />,
        },
    };
    const [active, setActive] = useState('Description');

    return (
        <section className={cx('info-prod')}>
            <div className="container">
                <div className={cx('wrapper')}>
                    <ul className={cx('list')}>
                        {dataComp.nav.map((item, index) => {
                            return (
                                <li
                                    className={cx('item', { active: active === item })}
                                    key={index}
                                    onClick={() => setActive(item)}
                                >
                                    {item}
                                </li>
                            );
                        })}
                    </ul>
                    {dataComp[active].comp}
                </div>
            </div>
        </section>
    );
}

export default InfoProd;
