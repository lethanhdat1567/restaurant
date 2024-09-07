import React from 'react';
import classNames from 'classnames/bind';
import styles from './TextEditor.module.scss';
import { Editor } from '@tinymce/tinymce-react';

const cx = classNames.bind(styles);

function TextEditor({ value, onChange }) {
    return (
        <div className="row row-cols-1 g-5">
            <div className="col">
                <div className={cx('editor-container')}>
                    <Editor
                        apiKey="1svn5the5puxyamclv7h0n2ga11ph7oglnkhoi34fr2vxn35"
                        value={value}
                        onEditorChange={onChange}
                        init={{
                            content_style: 'body { background-color: #000; color: #fff; }', // Set background color to black and text color to white
                        }}
                    />
                </div>
            </div>
            <div className="col">
                <div className={cx('editor-wrap')}>
                    <span className={cx('sub')}>Your content:</span>
                    <div className={cx('content')}>
                        <div className="tox-tinymce">
                            <div dangerouslySetInnerHTML={{ __html: value }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TextEditor;
