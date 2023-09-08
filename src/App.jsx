import React from 'react';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import Wrapper from './components/views/Wrapper';

function App() {
  return (

    <ChakraProvider>
      <Wrapper />
    </ChakraProvider>
  );
}

export default App;
