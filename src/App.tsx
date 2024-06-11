import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import CadastroProduto from './pages/cadastroProduto';
import Layout from './pages/layout';
import CadastroFornecedor from './pages/cadastroFornecedor';
import CadastroCliente from './pages/cadastroCliente';
import CadastroFuncionario from './pages/cadastroFuncionario';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/cadastroProduto" element={<Layout><CadastroProduto /></Layout>} />
        <Route path="/cadastroFornecedor" element={<Layout><CadastroFornecedor /></Layout>} />
        <Route path="/cadastroCliente" element={<Layout><CadastroCliente /></Layout>} />
        <Route path="/cadastroFuncionario" element={<Layout><CadastroFuncionario /></Layout>} />
      </Routes>
    </>
  );
}

export default App;
