import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainScreen from './screens/MainScreen';


function App() {
  return (
    <Routes>
      <Route path='/' element={<MainScreen/>} />
      <Route path='/example_1' />
      <Route path='/example_2' />
    </Routes>
  );
}

export default App;
