import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/todoList';
import * as serviceWorker from './serviceWorker';

const baseStore = localStorage.getItem('todoList') ? JSON.parse(localStorage.getItem('todoList')) : []
let store = createStore(reducer, baseStore);
window.onbeforeunload = (e) => {
  const state = store.getState();
  localStorage.setItem('todoList', JSON.stringify(state))
};

// const unsubscribe = store.subscribe(() =>
//   console.log(store.getState())
// )

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
