import React from 'react';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Chat from './components/Chat/Chat';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.scss';

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Routes>
            <Route path='/' element={<Chat />} />
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
