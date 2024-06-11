import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import CadastroProduto from './pages/cadastroProduto';
import Layout from './pages/layout';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/cadastroProduto" element={<Layout><CadastroProduto /></Layout>} />
      </Routes>
    </>
  );
}

export default App;
