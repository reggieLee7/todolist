import React from 'react';
import './Header.css';
import { Layout, Icon } from 'antd';

const AntdHeader = Layout.Header;

class Header extends React.Component {
    render() {
        return (
            <AntdHeader style={{ position: 'fixed', zIndex: 1, width: '100vw' }}>
                <div className='container'>
                    <h2>ToDoList</h2>
                    <Icon type="plus-square" onClick={this.props.toggleAddTodoModal} className="plusSquare" />
                </div>
            </AntdHeader>
        )
    }
}

export default Header;