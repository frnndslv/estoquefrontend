import { Button, Form, Input, Modal, Space, Table } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

function CadastroCliente(props: any) {

    const [produtos, setProdutos] = useState([]);
    const [valueNome, setValueNome] = useState<string>("");
    const [valueDescricao, setValueDescricao] = useState<string>("");

    const [editId, setEditId] = useState<number>(0);
    const [editValueNome, setEditValueNome] = useState<string>("");
    const [editValueDescricao, setEditValueDescricao] = useState<string>("");

    const [form] = Form.useForm();

    const [isModalOpen, setIsModalOpen] = useState(false);

    const resetEditFields = () => {
        setEditId(0);
        setEditValueNome("");
        setEditValueDescricao("");
    }

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        putProdutos(editId, editValueNome, editValueDescricao);
        resetEditFields();
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        resetEditFields();
        setIsModalOpen(false);
    };

    const createModal = () => {
        return (
            <>
                <Modal title="Editar" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    <Input value={editValueNome} onChange={(value) => setEditValueNome(value.target.value)} />
                    <Input value={editValueDescricao} onChange={(value) => setEditValueDescricao(value.target.value)} />
                </Modal>
            </>
        );
    }

    const columns = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Nome do fornecedor',
            dataIndex: 'nome',
            key: 'nome',
        },
        {
            title: 'Produto comprado',
            dataIndex: 'produtoComprado',
            key: 'produtoComprado',
        },
        {
            title: 'Ações',
            key: 'action',
            render: (_: any, record: any) => (
                <Space size="middle">
                    <Button onClick={() => {
                        showModal();
                        setEditId(record.id);
                        setEditValueNome(record.nome);
                        setEditValueDescricao(record.produtoComprado);
                    }}>Editar</Button>
                    <Button danger onClick={() => deleteProdutos(record.id)}>Delete</Button>
                </Space>
            ),
        },
    ];


    const getProdutos = () => {
        axios.get("http://localhost:5214/cliente")
            .then((resposta) => {
                setProdutos(resposta.data);
            });
    }

    const postProdutos = (nome: string, descricao: string) => {
        const envio = {
            nome: nome,
            produtoComprado: descricao
        };
        axios.post("http://localhost:5214/cliente", envio).then(() => getProdutos());
    }

    const deleteProdutos = (id: number) => {
        axios.delete(`http://localhost:5214/cliente/${id}`).then(() => getProdutos());
    }

    const putProdutos = (id: number, nome: string, descricao: string) => {
        const envio = {
            nome: nome,
            produtoComprado: descricao
        };
        axios.put(`http://localhost:5214/cliente/${id}`, envio).then(() => getProdutos());
    }

    useEffect(() => {
        getProdutos();
    }, []);

    const saveBtn = () => {
        postProdutos(valueNome, valueDescricao);
    };

    return (
        <>
            <div>
                <Form
                    form={form}
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                    initialValues={{ remember: true }}
                    autoComplete="off"
                >
                    <Form.Item<string>
                        label="Nome do fornecedor"
                        name="nome"
                        id="nome"
                    >
                        <Input onChange={(value) => setValueNome(value.target.value)} />
                    </Form.Item>

                    <Form.Item<string>
                        label="Produto comprado"
                        name="descricao"
                        id="descricao"
                    >
                        <Input onChange={(value) => setValueDescricao(value.target.value)} />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit" onClick={saveBtn}>
                            Salvar
                        </Button>
                    </Form.Item>
                </Form>
            </div>
            <div>
                <h3>Clientes cadastrados</h3>
                <Table dataSource={produtos} columns={columns} />
                {createModal()}
            </div>
        </>
    );
}
export default CadastroCliente;