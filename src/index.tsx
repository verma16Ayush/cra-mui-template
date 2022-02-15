import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import React from 'react';
import ReactDOM from 'react-dom';
import { THEME } from './config';
import { Routes_ } from './routes';

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline/>
    <ThemeProvider theme={THEME}>
      <Routes_ />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);