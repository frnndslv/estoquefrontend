import { Button, Form, Input, Table } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

function CadastroProduto(props: any) {

    const [produtos, setProdutos] = useState([]);

    const columns = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Nome do produto',
            dataIndex: 'nome',
            key: 'nome',
        },
        {
            title: 'Descrição do produto',
            dataIndex: 'descricao',
            key: 'descricao',
        },
    ];


    function getProdutos() {
        axios.get("http://localhost:5214/produto")
            .then((resposta) => {
                setProdutos(resposta.data);
            });
    }

    useEffect(getProdutos, []);

    return (
        <>
            <div>
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                    initialValues={{ remember: true }}
                    autoComplete="off"
                >
                    <Form.Item<any>
                        label="Nome do produto"
                        name="nome"
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item<any>
                        label="Descrição do produto"
                        name="descricao"
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
            <div>
                <h3>Produtos cadastrados</h3>
                <Table dataSource={produtos} columns={columns} />
            </div>
        </>
    );
}
export default CadastroProduto;