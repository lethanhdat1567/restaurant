import classNames from 'classnames/bind';
import styles from './Modal.module.scss';
import { request } from '../../../../utils/request';

const cx = classNames.bind(styles);

function Modal({ modal, setModal, comment, trigger, setTrigger }) {
    function handleDelete() {
        request
            .delete(`comments/${comment.id}`)
            .then((res) => {
                console.log(res.data);
                setModal(false);
                setTrigger(!trigger);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <div className={cx('modal', { active: modal })}>
            <div className={cx('bg')}></div>
            <div className={cx('content')}>
                <h3 className={cx('title')}>Do you want to delete</h3>
                <p className={cx('desc')}>Your comment will be deleted forever!</p>
                <div className={cx('btn-wrap')}>
                    <p className={cx('btn-wrap')} onClick={() => setModal(false)}>
                        Cancle
                    </p>
                    <p className={cx('btn-wrap')} onClick={handleDelete}>
                        Delete
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Modal;
