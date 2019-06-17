import React from 'react';
import { Icon, Checkbox } from 'antd';
import './Todo.css';
import { toggleTodo, deleteTodo } from '../../actions/index';

class Todo extends React.Component {
    render() {
        const { item, dispatch } = this.props;
        return (
            <div className="todoItem">
                <Checkbox checked={item.isFinished} onChange={(e) => {
                    e.preventDefault();
                    dispatch(toggleTodo(item.id))
                }}
                >{item.text}</Checkbox>
                <Icon type="close-circle" onClick={
                    (e) => {
                        e.preventDefault();
                        dispatch(deleteTodo(item.id));
                    }
                } />
            </div>
        )
    }
}


export default Todo;