import React from 'react';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import BusinessCard from './components/views/BusinessCard';

function App() {
  return (

    <ChakraProvider>
      <BusinessCard />
    </ChakraProvider>
  );
}

export default App;
