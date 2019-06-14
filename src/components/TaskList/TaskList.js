import React from 'react';
import './TaskList.css';
import Task from '../Task/Task';

class TaskList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="taskList">
                <div className="listTitle">
                    <span>{this.props.title}</span>
                    <button>∨</button>
                </div>
                {this.props.items.map((item,index) => {
                    return (<Task item={item} key={index} />)
                })}
            </div>
        )
    }
}

export default TaskList;