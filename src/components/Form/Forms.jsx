import { Button, Form, Input } from 'antd';
import './Form.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import TextArea from 'antd/es/input/TextArea';

function Forms({ data }) {
    return (
        <Form className="form" layout="vertical">
            {data.map((item, index) => {
                if (item.type === 'input') {
                    return (
                        <Form.Item label={item.label} key={index}>
                            <Input suffix={item.icon} />
                        </Form.Item>
                    );
                } else if (item.type === 'area') {
                    return (
                        <Form.Item label={item.label} key={index}>
                            <TextArea rows={10} className="area" />
                        </Form.Item>
                    );
                }
            })}
            <Form.Item style={{ textAlign: 'right' }}>
                <Button type="primary" htmlType="submit">
                    Send
                </Button>
            </Form.Item>
        </Form>
    );
}

export default Forms;
