import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-dom/client';

import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';


import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { amber } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Typography } from '@mui/material';



const theme = createTheme({
  palette: {
    primary: {
      main: amber[500],
    },
    secondary: {
      main: '#F2CC8F',
    }

  }
});


ReactDOM.render(
  <React.StrictMode>
  <HashRouter>
  <Routes>
  <Route path="/" element={
  <ThemeProvider theme={theme}><App /></ThemeProvider>
  } />

  <Route path="/about" component={<Home />} />
  </Routes> 
  </HashRouter> 
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
