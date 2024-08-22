import classNames from 'classnames/bind';
import styles from './Comments.module.scss';
import Stars from '../Stars/Starts';
import { imgs } from '../../assets/Imgs/imgs';
import CommentForm from '../CommentForm/CommentForm';

const cx = classNames.bind(styles);

function Comments() {
    return (
        <section className={cx('wrap')}>
            <div className={cx('header-wrap')}>
                <img src={imgs.avatar} alt="" className={cx('avatar')} />
                <div className={cx('info')}>
                    <div className={cx('heading')}>
                        <p className={cx('name')}>Jamie Milson</p>
                        <span className={cx('separate')}>-</span>
                        <span className={cx('timer')}>March 18, 2022</span>
                    </div>
                    <p className={cx('comment')}>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                        Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                        mus.
                    </p>
                    <Stars />
                </div>
            </div>
            <div className={cx('form')}>
                <CommentForm />
            </div>
        </section>
    );
}

export default Comments;
