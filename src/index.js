import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ParallaxProvider } from 'react-scroll-parallax';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MatrixApi from './components/MatrixApi';



ReactDOM.render(
<BrowserRouter>
  <React.StrictMode>
    <ParallaxProvider>
       <div className="App" style={{ height: "100vh", width: "100vw" }}>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/matrixapi" element={<MatrixApi />} />

    </Routes>
      </div>
    </ParallaxProvider>
  </React.StrictMode>
</BrowserRouter>,
  document.getElementById('root')
);
