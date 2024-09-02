import classNames from 'classnames/bind';
import styles from './Profile.module.scss';
import Left from './components/Left/Left';
import Right from './components/Right/Right';

const cx = classNames.bind(styles);

function Profile() {
    return (
        <div className={cx('profile')}>
            <div className="container">
                <div className={cx('wrapper')}>
                    <div className="row g-5">
                        <div className="col-12 col-md-5 col-lg-3">
                            <Left />
                        </div>
                        <div className="col-12 col-md-7 col-lg-9">
                            <Right />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
