import classNames from 'classnames/bind';
import styles from './Table.module.scss';
import Deposite from '../Deposite/Deposite';
import { imgs } from '../../assets/Imgs/imgs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';

const cx = classNames.bind(styles);

function Table() {
    return (
        <div className={cx('wrapper')}>
            <table className={cx('table-wrap', 'table')}>
                <thead className={cx('thead')}>
                    <tr className={cx('tr')}>
                        <th className={cx('head-item')}></th>
                        <th className={cx('head-item')}>Food</th>
                        <th className={cx('head-item')}>Price</th>
                        <th className={cx('head-item')}>Quantity</th>
                        <th className={cx('head-item')}>Subtotal</th>
                    </tr>
                </thead>
                <tbody className={cx('tbody')}>
                    <tr className={cx('tr')}>
                        <td className={cx('body-item')}>
                            <div className={cx('item-wrap')}>
                                <FontAwesomeIcon
                                    icon={faTrashAlt}
                                    className={cx('trash', 'fa-lg')}
                                    style={{ color: '#ccc' }}
                                />
                                <img src={imgs.dinner2} alt="" className={cx('img')} />
                            </div>
                        </td>
                        <td className={cx('body-item')}>Crispy chicken breasts</td>
                        <td className={cx('body-item')}> $24.99</td>
                        <td className={cx('body-item')}>
                            <Deposite />
                        </td>
                        <td className={cx('body-item')}>$24.99</td>
                    </tr>
                </tbody>
            </table>
            <div className={cx('btn-wrap')}>
                <div className={cx('left')}>
                    <Button btn>Copon code</Button>
                    <Button primary>Apply coupon</Button>
                </div>
                <div className={cx('right')}>
                    <Button primary>Update Cart</Button>
                </div>
            </div>
        </div>
    );
}

export default Table;
