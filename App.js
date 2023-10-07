import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import Register from './components/Register';
import Login from './components/Login'; // Create this component for the login page
import Home from './components/Home';
function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/db" element={<Database />} /> */}
      </Routes>
    </Router>
  );
}

export default App;