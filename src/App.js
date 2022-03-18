import React from 'react';
import { useState } from 'react';
import Header from './features/Header/Header';
import Content from './features/Content/Content';
import Footer from './features/Footer/Footer';
import { useSelector } from 'react-redux';
import { status } from './redux/reducers/statusReducer';
import './App.css';

function App() {
  const status = useSelector((state) => state.status.navStatus); 
  return (
    <div className="App">
      <Header></Header>
      {status === 'all' ?
        (<Content></Content>) : (<div className="blank-content"></div>)
      }
      <Footer></Footer>
    </div>
  );
}

export default App;
