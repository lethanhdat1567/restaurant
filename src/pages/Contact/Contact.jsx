import classNames from 'classnames/bind';
import styles from './Contact.module.scss';
import Info from './components/Info/Info';
import { imgs } from '../../assets/Imgs/imgs';
import ContactInfo from './components/ContactInfo/ContactInfo';
import Forms from '../../components/Form/Forms';
import { message } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser } from '@fortawesome/free-regular-svg-icons';
const cx = classNames.bind(styles);

function Contact() {
    const dataInput = [
        {
            label: 'Your name',
            name: 'fullname',
            icon: <FontAwesomeIcon icon={faUser} />,
            type: 'input',
            rules: [
                {
                    required: true,
                    message: 'Please enter you input',
                },
            ],
        },
        {
            label: 'Your email',
            name: 'email',
            icon: <FontAwesomeIcon icon={faEnvelope} />,

            type: 'input',
            rules: [
                {
                    required: true,
                    message: 'Please enter your email',
                },
                {
                    type: 'email',
                    message: 'The input is not valid E-mail!',
                },
            ],
        },
        {
            label: 'Write review',
            name: 'review',
            type: 'area',
            rules: [
                {
                    required: true,
                    message: 'Please enter you input',
                },
            ],
        },
    ];

    return (
        <div className={cx('contact')}>
            <div className="container">
                <div className={cx('wrapper')}>
                    <div className="row row-cols-1 row-cols-lg-2 g-5 ">
                        <div className="col">
                            <Info />
                        </div>
                        <div className="col">
                            <div className={cx('banner')}>
                                <img src={imgs.contactBanner} alt="" className={cx('img')} />
                            </div>
                        </div>
                    </div>
                    <div className={cx('form-contact')}>
                        <div className="row row-cols-1 row-cols-lg-2 g-5">
                            <div className="col col-lg-5">
                                <ContactInfo />
                            </div>
                            <div className="col col-lg-7">
                                <Forms data={dataInput} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
