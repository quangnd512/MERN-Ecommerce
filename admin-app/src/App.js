import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Signup from './containers/Signup';
import Signin from './containers/Signin';
import Home from './containers/Home';

function App() {
  return (
    <Router>
      <div className="App">
          <Routes>
            {/* exact: chỉ hoạt động khi đường dẫn chính xác */}
              <Route path="/" element={<Home/>} />
              <Route path="/signin" element={<Signin/>} />
              <Route path="/signup" element={<Signup/>} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
