import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles.css';
// import { HooksApp } from './HooksApp.jsx';
// import { CounterApp } from './01-useState/CounterApp.jsx';
// import { CounterAppWithCustomHook } from './01-useState/CounterAppWithCustomHook.jsx';
// import { SimpleForm } from './02-useEffect/SimpleForm.jsx';
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook.jsx';
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
// import { FocusScreen } from './04-useRef/FocusScreen';
// import { Layout } from './05-useLayoutEffect/Layout';
// import { Memorize } from './06-memos/Memorize';
// import { MemoHook } from './06-memos/MemoHook';
// import { CallbackHook } from './06-memos/CallbackHook';
// import { Father } from './07-tarea-memo/Father';
import { TodoApp } from './08-useReducer/TodoApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TodoApp/>
  </React.StrictMode>,
)
