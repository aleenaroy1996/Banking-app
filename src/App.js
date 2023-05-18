import React from "react";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import './App.css';
import {Login} from './Login';
import {Register} from './Register';
import {Dashboard} from './Dashboard';
import {Account} from './Account';
import {Loan} from './Loan';
import { Deposit } from "./Deposit";

function App() {

  return (
    <div className="App">
        <Router>
          <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/dashboard" element={<Dashboard/>} />
              <Route path="/loan" element={<Loan/>} />
              <Route path="/account" element={<Account/>} />
              <Route path="/deposit" element={<Deposit/>} />
d          </Routes>
        </Router>
    </div>
  );
}

export default App;
