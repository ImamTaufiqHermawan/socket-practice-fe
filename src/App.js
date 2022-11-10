import React from 'react';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Chat from './components/Chat/Chat';
import ProtectedRoute from './components/Router/ProtectedRoute';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.scss';

import { library } from '@fortawesome/fontawesome-svg-core';

import { faSmile, faImage } from '@fortawesome/free-solid-svg-icons';
import { faSpinner, faEllipsisV, faUserPlus, faTrash, faCaretDown, faUpload, faTimes, faBell } from '@fortawesome/free-solid-svg-icons'

library.add(faSmile, faImage, faSpinner, faEllipsisV, faUserPlus, faTrash, faCaretDown, faUpload, faTimes, faBell);

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Routes>
            <Route element={<ProtectedRoute />}>
              <Route path='/' element={<Chat />} />
            </Route>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
          {/* <Route render={() => <h1>404 page not found</h1>} /> */}
        </div>
      </Router>
    </>
  );
}

export default App;
