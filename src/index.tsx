import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import store from './state/store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddStudent from './components/form/AddStudent';
import App from './App';
import StudentFormContainer from './containers/StudentFormContainer';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />}></Route>
          <Route path='/AddStudent' element={<StudentFormContainer />}></Route>
          <Route path='/EditStudent' element={<StudentFormContainer />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
