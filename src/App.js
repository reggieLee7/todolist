import React from 'react';
import 'antd/dist/antd.css'
import { Layout } from 'antd';
import Header from './components/Header/Header';
import TodoList from './containers/TodoList';
import AddTodoForm from './containers/AddTodo';
import './App.css';

const Content = Layout.Content;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false
    }
    this.toggleAddTodoModal.bind(this);
  }
  toggleAddTodoModal = () => {
    this.setState({ modalVisible: !this.state.modalVisible });
  }

  render() {
    return (
      <div className="app">
        <Layout>
          <Header toggleAddTodoModal={this.toggleAddTodoModal} />
          <Content>
            <div className="container">
              <TodoList title="未完成" isFinished={false} />
              <TodoList title="已完成" isFinished={true} />
            </div>
          </Content>
          <AddTodoForm modalVisible={this.state.modalVisible} toggleAddTodoModalFn={this.toggleAddTodoModal} />
        </Layout>
      </div>
    );
  }
}

export default App;
