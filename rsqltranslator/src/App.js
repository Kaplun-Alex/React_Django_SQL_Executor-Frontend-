import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainScreen from './screens/MainScreen';
import SignIn from './components/SignIn';


function App() {
  return (
    <Routes>
      <Route path='/' element={<MainScreen/>} />
      <Route path='/login/' element={<SignIn/>}/>
      <Route path='/example_2' />
    </Routes>
  );
}

export default App;
