import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Dashboard from './components/pages/Dashboard';
import Login from './components/pages/Login';

function App() {
  return (
    <div className="App">
      <Dashboard />
      <Login />
      
    </div>
  );
}

export default App;
