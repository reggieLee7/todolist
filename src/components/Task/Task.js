import React from 'react';
import './Task.css'

class Task extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: this.props.item
        }
    }
    render() {
        return (
            <div className="taskItem">
                <input type="checkbox" />
                {this.state.item.title}
                <button className="delete">-</button>
            </div>
        )
    }
}


export default Task;