import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import TaskList from './components/TaskList/TaskList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      TaskList: [
        {
          title: 'Test task',
          date: '2019-06-22',
          finished: false,
        },
        {
          title: 'Test task 2',
          date: '2019-06-23',
          finished: false,
        },
        {
          title: 'Test task3',
          date: '2019-06-20',
          finished: true,
        }
      ]
    }
  }
  render() {
    return (
      <div className="app">
        <Header />
        <div className="main">
          <div className="container">
            <TaskList title="未完成" items={this.state.TaskList.filter(t=>t.finished===false)} />
            <TaskList title="已完成" items={this.state.TaskList.filter(t=>t.finished===true)} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
