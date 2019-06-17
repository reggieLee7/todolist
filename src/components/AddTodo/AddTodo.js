import React from 'react';
import { Modal, Form, Input } from 'antd';
import { addTodo } from '../../actions/index';

class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.handleModalCancel.bind(this);
        this.handleModalOk.bind(this);
    }
    handleModalOk = e => {
        e.preventDefault();
        this.props.form.validateFields((err, value) => {
            if (!err) {
                this.props.dispatch(addTodo(value.text));
                this.props.toggleAddTodoModalFn();
                this.props.form.resetFields();
            }
        })
    }
    handleModalCancel = e => {
        e.preventDefault();
        this.props.toggleAddTodoModalFn();
        this.props.form.resetFields();
    }
    render() {
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 4 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 20 },
            },
        };
        const getFieldDecorator = this.props.form.getFieldDecorator;
        return (
            <Modal title="Add a to-do" visible={this.props.modalVisible} onOk={this.handleModalOk} onCancel={this.handleModalCancel}>
                <Form {...formItemLayout} onSubmit={this.handleModalOk} className="addTodoForm">
                    <Form.Item label="Content">
                        {getFieldDecorator('text', { rules: [{ required: true, message: 'please input your todo content!' }] })(<Input />)}
                    </Form.Item>
                </Form>
            </Modal>
        )
    }
}
AddTodo = Form.create({})(AddTodo);
export default AddTodo;