import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Chat from './components/Auth/Chat';

import './App.css';

function App() {
  return (
    <div className="App">
      <Chat/>
      <Login/>
      <Register/>
    </div>
  );
}

export default App;
