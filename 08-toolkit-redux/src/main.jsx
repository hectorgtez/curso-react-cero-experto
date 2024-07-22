import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'

import { Provider } from 'react-redux';
import { store } from './store';
import { TodoApp } from './TodoApp.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={ store }>
      <TodoApp/>
    </Provider>
  </React.StrictMode>,
)
