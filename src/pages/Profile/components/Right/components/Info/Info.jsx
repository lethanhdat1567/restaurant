import classNames from 'classnames/bind';
import styles from './Info.module.scss';
import Item from './Item';
import { useStateContext } from '../../../../../../contexts/ContextProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser } from '@fortawesome/free-regular-svg-icons';
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';

const cx = classNames.bind(styles);

function Info() {
    // redux
    const user = useSelector((state) => state.user.user);

    const infoUser = [
        {
            label: 'Fullname',
            value: user?.fullname,
            icon: <FontAwesomeIcon icon={faUser} className="fa-lg" />,
        },
        {
            label: 'Email',
            value: user?.email,
            icon: <FontAwesomeIcon icon={faEnvelope} className="fa-lg" />,
        },
        {
            label: 'Phone Number',
            value: user?.phone_number,
            icon: <FontAwesomeIcon icon={faPhone} className="fa-lg" />,
        },
        {
            label: 'Address',
            value: user?.address,
            icon: <FontAwesomeIcon icon={faLocationDot} className="fa-lg" />,
        },
    ];
    return (
        <div className={cx('info')}>
            <h2 className={cx('title')}>Thong tin nguoi dung</h2>
            <p className={cx('sub-title')}>Dia chi va thong tin lien lac</p>
            <div className={cx('list')}>
                <div className="row row-cols-2 g-4">
                    {infoUser.map((item, index) => {
                        return (
                            <div className="col" key={index}>
                                <Item data={item} id={user?.id} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Info;
