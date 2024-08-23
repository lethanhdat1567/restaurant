import classNames from 'classnames/bind';
import styles from './Contact.module.scss';
import Button from '../../components/Button/Button';
import Info from './components/Info/Info';
import { imgs } from '../../assets/Imgs/imgs';
import ContactInfo from './components/ContactInfo/ContactInfo';
import ContactForm from './components/ContactForm/ContactForm';

const cx = classNames.bind(styles);

function Contact() {
    return (
        <div className={cx('contact')}>
            <div className="container">
                <div className={cx('wrapper')}>
                    <div className="row row-cols-2">
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
                        <div className="row">
                            <div className="col-5">
                                <ContactInfo />
                            </div>
                            <div className="col-7">
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
