import React from 'react';
import './TodoList.css';
import Todo from '../../containers/Todo';

class TodoList extends React.Component {
    render() {
        const { todoList, title, isFinished } = this.props;
        return (
            <div className="todoList">
                <div className="listTitle">
                    <span>{title}</span>
                </div>
                {todoList.filter(item=>(item.isFinished===isFinished)).map(item =>(<Todo item={item} key={item.id} />))}
            </div>
        )
    }
}

export default TodoList;