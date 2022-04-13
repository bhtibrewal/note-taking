import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { ThemeProvider, AuthProvider, ToastProvider } from './context';
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router >
      <ThemeProvider>
        <ToastProvider>
          <AuthProvider>
            <App />
          </AuthProvider>
        </ToastProvider>
      </ThemeProvider>
    </Router >
  </React.StrictMode>,
  document.getElementById("root")
);
