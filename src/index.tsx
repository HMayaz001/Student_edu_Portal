import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import store from './state/store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddStudent from './components/form/AddStudent';
import StudentFormContainer from './containers/StudentFormContainer';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/AddStudent' element={<StudentFormContainer />} />
          <Route path='/AddStudent/:student_id' element={<StudentFormContainer />} />
          <Route path='*' element={<h1>Error 404 Page not found!!</h1>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
