import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from 'react-router-dom';
import {PlayListProvider} from "./Context/PlaylistContext"
import { AuthProvider } from './Context/AuthContext';
import {LoginBoxProvider} from "./Context/LoginBoxContext";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <LoginBoxProvider>
        <AuthProvider>
          <PlayListProvider>
            <App />
          </PlayListProvider>
        </AuthProvider>
      </LoginBoxProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals())
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
