import React from 'react';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles'; // Import createTheme
import BusinessCard from './views/BusinessCard.jsx';

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BusinessCard />
    </ThemeProvider>
  );
}

export default App;
