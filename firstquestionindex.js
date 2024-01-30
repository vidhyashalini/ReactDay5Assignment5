import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Register from './Components/Register';
import Student from './Components/Student';
import NotFound from './Components/NotFound';
import Details from './Components/Details';
import Login from './Components/Login';
import ProtectedRoute from './Components/ProtectedRoute';


const routing = (
  <Router>
    <h3 style={{ textAlign: "center" }}>Routing Implementation using React JS Applications</h3>
    <hr />
    <div style={{ textAlign: "center" }}>
      <Link to="/">Home</Link> |
      <Link to="/Login">Login</Link> |
      <Link to="/Register">Register</Link> |
      <Link to="/Student">Student</Link> |
      <Link to="/Hello">Invalid Route</Link> |
    </div>
    <hr />
    <Routes>
      <Route path="/" element={<App />} />


      <Route path="/Register" element={
        <ProtectedRoute  returnUrl="/Register">
          <Register />
        </ProtectedRoute>
      } />

      <Route path="/Student" element={
        <ProtectedRoute  returnUrl="/Student">
          <Student />
        </ProtectedRoute>
      } />



      
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Details/:id" element={<Details />} />

      <Route path="*" element={<NotFound />} />
    </Routes>



  </Router>
);




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {routing}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();