import classNames from 'classnames/bind';
import styles from './ContactInfo.module.scss';
import Item from './Item';
import Button from '../../../../components/Button/Button';

const cx = classNames.bind(styles);

const itemData = [
    {
        title: 'For general enquiries please email',
        sub: ' info@gmail.com',
    },
    {
        title: 'Reserve by email',
        sub: ' gmail1234@gamil.com',
    },
    {
        title: 'Tel',
        sub: '+00 000 0000',
    },
    {
        title: 'subList',
        children: [
            { title: 'Mon – Thu', sub: '10.00 am – 01:00 am' },
            {
                title: 'Fri – Sun',
                sub: '10:00 am – 02:00 am',
            },
        ],
    },
];

function ContactInfo() {
    return (
        <div className={cx('wrap')}>
            <h3 className={cx('title')}>Contact Us</h3>
            <div className={cx('list')}>
                {itemData.map((item, index) => {
                    if (item.title === 'subList') {
                        return (
                            <div key={index}>
                                <span className={cx('sub-list')}>Opening hours:</span>
                                {item.children.map((item, index) => {
                                    return <Item key={index} data={item} />;
                                })}
                            </div>
                        );
                    } else {
                        return <Item key={index} data={item} />;
                    }
                })}
            </div>
            <Button text>Online Reservation</Button>
        </div>
    );
}

export default ContactInfo;
