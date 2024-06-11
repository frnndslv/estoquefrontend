import React from 'react';

function Header(props: any) {
    return (
        <>
            <header style={{ paddingBottom: "10px" }}>
                <a href='/' style={{ marginRight: "10px" }}>Home</a>
                <a href='/cadastroProduto' style={{ marginRight: "10px" }}>Produtos</a>
                <a href='/cadastroFornecedor' style={{ marginRight: "10px" }}>Fornecedor</a>
                <a href='/cadastroCliente' style={{ marginRight: "10px" }}>Cliente</a>
                <a href='/cadastroFuncionario' style={{ marginRight: "10px" }}>Funcionario</a>
            </header>
        </>
    );
}
export default Header;