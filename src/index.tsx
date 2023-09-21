import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './views/TodoList';
import { Provider } from 'react-redux';
import store from './store';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Todo from './views/Todo';

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/todo/:id" element={<Todo />} />
      </Routes>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);
