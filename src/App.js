import './App.css';
import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Navbar from './component/navbar';
import { loadPhones } from './Redux/phones/phones';
import Fullphone from './component/fullPhone';
import Details from './component/details';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPhones());
  }, []);

  const [id, setId] = useState(1);

  const handelid = (e) => {
    const button = e.target;
    setId(Number(button.id));
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Fullphone handelid={handelid} />} />
        <Route path="/Details" element={<Details buttonId={id} />} />
      </Routes>
    </>
  );
}

export default App;
