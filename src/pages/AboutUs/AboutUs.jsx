import classNames from 'classnames/bind';
import styles from './AboutUs.module.scss';
import AboutInfo from './components/AboutInfo/AboutInfo';
import Vision from './components/Vision/Vision';
import SubscibeNew from '../../components/SubscribeNew/SubscibeNew';

const cx = classNames.bind(styles);

const leftInfo = {
    title: 'We are a mexican restaurant makes delicious.',
    desc: 'Hi! Our Restaurant has been present for over 20 years in the market. We make the most of all our customers. Hi! Our Restaurant has been present for over 20 years in the market. We make the most of all our customers. Hi! Our Restaurant has been present for over 20 years in the market. We make the most of all our customers.',
};
const leftBanner = {
    img: 'about2',
};
const rightInfo = {
    title: 'The story of our first restaurant branch',
    desc: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
};
const rightBanner = {
    img: 'about1',
};

function AboutUs() {
    return (
        <div className={cx('aboutus')}>
            <AboutInfo leftInfo={leftInfo} rightBanner={rightBanner} />
            <AboutInfo leftBanner={leftBanner} rightInfo={rightInfo} />
            <Vision />
            <SubscibeNew />
        </div>
    );
}

export default AboutUs;
