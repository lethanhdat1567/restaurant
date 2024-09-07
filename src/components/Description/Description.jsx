import classNames from 'classnames/bind';
import styles from './Description.module.scss';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Description({ content }) {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className={cx('wrapper')}>
            <div
                className={cx('desc', {
                    expanded: expanded,
                })}
            >
                <div className="tox-tinymce">
                    <div dangerouslySetInnerHTML={{ __html: content }} />
                </div>
            </div>
            <button onClick={() => setExpanded(!expanded)} className={cx('btn-expand')}>
                Read {expanded ? 'less' : 'more'}
            </button>
        </div>
    );
}

export default Description;
