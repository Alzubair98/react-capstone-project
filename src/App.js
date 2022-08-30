import './App.css';
import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Navbar from './component/navbar';
import { loadPhones } from './Redux/phones/phones';
import Fullphone from './component/fullPhone';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPhones());
  }, []);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Fullphone />} />
      </Routes>
    </>
  );
}

export default App;
