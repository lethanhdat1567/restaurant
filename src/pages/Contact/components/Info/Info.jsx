import classNames from 'classnames/bind';
import styles from './Info.module.scss';
import Button from '../../../../components/Button/Button';
import { gmail, map, phone } from '../../../../assets/Icons';

const cx = classNames.bind(styles);

function Info() {
    return (
        <div className={cx('info')}>
            <h2 className={cx('title')}>Where to find us</h2>
            <p className={cx('desc')}>
                The Patio Time Cafe is located on Silk Street, in the heart of London city, on the edge of Soho. Lorem
                ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa
            </p>
            <p className={cx('desc')}>
                Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper
                nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu.
            </p>
            <div className={cx('contact')}>
                <Button leftIcon={map} className={cx('btn')} text>
                    Silk St, Barbican, London EC2Y 8DS, UK
                </Button>
                <Button leftIcon={gmail} className={cx('btn')} text>
                    gmail1234@gmail.com
                </Button>
                <Button leftIcon={phone} className={cx('btn')} text>
                    +00-0000-00000
                </Button>
            </div>
            <Button large primary>
                View on google map
            </Button>
        </div>
    );
}

export default Info;
