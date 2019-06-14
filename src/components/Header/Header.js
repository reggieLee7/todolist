import React from 'react';
import './Header.css'

class Header extends React.Component{
    render(){
        return (
            <div className="header">
                <div className='container'>
                    <h2>ToDoList</h2>
                    <button>+</button>
                </div>
            </div>
        )
    }
}

export default Header;