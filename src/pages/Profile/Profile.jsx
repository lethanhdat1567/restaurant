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
                    <div className="row">
                        <div className="col-3">
                            <Left />
                        </div>
                        <div className="col-9">
                            <Right />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
