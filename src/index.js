import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import { Login, Register } from './auth';
import { Home } from './main';
import { AdminHome } from './admin';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<App />}/>
        </Route>

        <Route path="/home">
          <Route index element={<Home />}/>
        </Route>

        <Route path="/admin">
          <Route index element={<AdminHome />}/>
        </Route>

        <Route path="/auth">
          <Route path="login" element={<Login />}/>
          <Route path="register" element={<Register />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);