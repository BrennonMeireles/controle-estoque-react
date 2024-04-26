import React, { useState } from 'react';
import axios from 'axios';
import "./style.css";
import { useNavigate } from 'react-router-dom';

export default function AddNew() {
    const navigate = useNavigate(); // Inicialize useHistory

    const [produto, setProduto] = useState({
        nome: '',
        sku: '',
        descricao: '',
        quantidade: '',
        marca: '',
        preco: '',
        cor: '',
        imagem: ''
    });

    // Função para lidar com mudanças nos campos de formulário
    const handleChange = (e) => {
        // Extrai o nome e o valor do campo de formulário que acionou o evento
        const { name, value } = e.target;

        // Atualiza o estado 'produto' com as novas informações do campo de formulário
        // Clona o objeto 'produto' existente e atualiza a propriedade 'name' com o valor 'value
        setProduto({ ...produto, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

            // Verifica se algum campo está vazio
        if (!produto.nome || !produto.sku || !produto.descricao || !produto.quantidade || !produto.marca || !produto.preco || !produto.cor || !produto.imagem) {
            // Encontra o primeiro campo vazio
            const camposFaltando = Object.keys(produto).find(key => !produto[key]);
            // Exibe um alerta informando ao usuário qual campo está faltando
            alert(`Por favor, preencha o campo "${camposFaltando}"!`);
            // Retorna imediatamente para interromper o envio do formulário

            return;
        }
        try {
            const response = await axios.post('http://localhost:3000/', produto); // criando o post pelo axios
            console.log('Produto adicionado:', response.data);
            // Limpar os campos do formulário após o envio bem-sucedido, se necessário
            setProduto({
                nome: '',
                sku: '',
                descricao: '',
                quantidade: '',
                marca: '',
                preco: '',
                cor: '',
                imagem: ''
            });

            // Redireciona para a página inicial após o envio bem-sucedido
            navigate('/'); // Redireciona para a página inicial
        } catch (error) {
            alert('Erro ao adicionar produto:', error);
        }
    };

    return (
        <section className="section-addProd">
            <article className="title">
                <div className="div-input">
                    <label htmlFor="name">Name :</label>
                    <input className="add-input" type="text" name="nome" value={produto.nome} onChange={handleChange} placeholder="Type the name product" required />
                </div>
                <div className="div-input">
                    <label className="sku-label" htmlFor="sku">SKU :</label>
                    <input className="sku-input" type="text" name="sku" value={produto.sku} onChange={handleChange} placeholder="Type the product SKU" required />
                </div>
            </article>
            <section>
                <article className="banner-stock">
                    <div className="product-img">
                        <img width="50px" height="50px" src="/src/assets/upload_icon.svg" alt="imagem icon de upload" />
                        <input className="add-input-upload" type="text" name="imagem" value={produto.imagem} onChange={handleChange} placeholder="Paste here the image URL" required />
                    </div>
                    <div className="area-stock">
                        <div className="bar-code">
                            <img src="/src/assets/codigo-de-barras.svg" alt="codigo-de-barras" />
                        </div>
                        <div className="stock-card">
                            <div className="title-stock">
                                <h2>Stock</h2>
                            </div>
                            <div className="data-stock">
                                <h3>QUANTITY AT HAND</h3>
                                <div className="div-stock-input">
                                    <label htmlFor="estoque">Stock :</label>
                                    <input className="add-input" type="text" name="quantidade" value={produto.quantidade} onChange={handleChange} placeholder="Type the stock" required />
                                </div>
                            </div>
                        </div>
                        <div className="action-buttons">
                            {/* Adicionei o evento onClick para chamar a função handleSubmit quando o botão for clicado */}
                            <button className="btn-add" onClick={handleSubmit}>Add Product</button>
                        </div>
                    </div>
                </article>

                <article className="input-list">
                    <ul className="list-product">
                        <div className="div-input-list">
                            <label htmlFor="custo">Purchase Coust:</label>
                            <input className="add-input" type="text" name="preco" value={produto.preco} onChange={handleChange} placeholder="Type the purchase coust" required />
                        </div>
                        <div className="div-input-list">
                            <label htmlFor="color">Color :</label>
                            <input className="add-input" type="text" name="cor" value={produto.cor} onChange={handleChange} placeholder="Type the color product" required />
                        </div>
                        <div className="div-input-list">
                            <label htmlFor="marca">Brand :</label>
                            <input className="add-input" type="text" name="marca" value={produto.marca} onChange={handleChange} placeholder="Type the brand" required />
                        </div>
                        <div className="div-input-list">
                            <label htmlFor="descricao">Description :</label>
                            <input className="add-input" type="text" name="descricao" value={produto.descricao} onChange={handleChange} placeholder="Type the description" required />
                        </div>
                    </ul>
                </article>
            </section>
        </section>
    );
}
