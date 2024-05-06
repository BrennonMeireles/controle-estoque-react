import "./style.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function ViewProduct() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [produto, setProduto] = useState(null);
    const [edicaoProduto, setEdicaoProduto] = useState(null);

    useEffect(() => {
        axios.get(`https://api-estoque-rh46.onrender.com/${id}`)
            .then((res) => {
                setProduto(res.data);
                setEdicaoProduto(res.data); // Inicializa o estado de edição com os valores atuais do produto
            })
            .catch((error) => {
                console.error("Erro ao buscar produto:", error);
            });
    }, [id]);

    const Quantidade = ({ qtdeProduto }) => {
        let qtdeProdutos = qtdeProduto.quantidade;
    
        let statusText = '';
        let statusStyle = {};
    
        if (qtdeProdutos == 0) {
            statusText = 'sold off';
            statusStyle = { color: '#800' };
        } else if (qtdeProdutos <= 25) {
            statusText = 'low stock';
            statusStyle = { color: '#f00' };
        } else if (qtdeProdutos <= 50) {
            statusText = 'medium stock';
            statusStyle = { color: '#ff0' };
        } else {
            statusText = 'full stock';
            statusStyle = { color: '#0f0', fontWeight: 'bold' };
        }
    
        return (
            <h4 style={statusStyle}><span>{statusText}</span></h4>
        );
    }  

    const handleDelete = () => {
        if (!window.confirm("Você tem certeza que deseja excluir este produto?")) {
            return;
        }

        axios.delete(`https://api-estoque-rh46.onrender.com/${id}`)
            .then((res) => {
                console.log("Produto deletado com sucesso:", res.data);
                navigate('/');
            })
            .catch((error) => {
                console.error("Erro ao deletar produto", error);
            });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEdicaoProduto({ ...edicaoProduto, [name]: value });
    };

    const handleAdjustStock = () => {
        // Verificar se algum campo obrigatório está vazio
        if (!edicaoProduto.nome || !edicaoProduto.sku || !edicaoProduto.descricao || !edicaoProduto.quantidade || !edicaoProduto.marca || !edicaoProduto.preco || !edicaoProduto.cor || !edicaoProduto.imagem ) {
            // Encontra o primeiro campo vazio
            const camposFaltando = Object.keys(edicaoProduto).find(key => !edicaoProduto[key]);

            // Exibe um alerta informando ao usuário qual campo está faltando
            alert(`Por favor, preencha o campo "${camposFaltando}"!`);
            
            // Retorna imediatamente para interromper o envio do formulário
            return;
        }
        axios.put(`https://api-estoque-rh46.onrender.com/${id}`, edicaoProduto)
            .then((res) => {
                console.log("Produto atualizado com sucesso:", res.data);
                // Atualize o estado do produto para refletir as edições
                setProduto(edicaoProduto);
            })
            .catch((error) => {
                console.error("Erro ao atualizar produto:", error);
            });

            navigate('/');
    };

    return (
        <main>
            {produto && (
                <article className="title">
                    <h1>
                        Nome
                        <input type="text" name="nome" value={edicaoProduto.nome} onChange={handleChange} />
                    </h1>
                    <h2>SKU <input type="text" name="sku" value={edicaoProduto.sku} onChange={handleChange} /></h2>
                </article>
            )}
            {produto && (
                <section>
                    <article className="banner-stock">
                        <div className="product-img">
                            <img className="product-img-view" src={produto.imagem} alt="" />
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
                                    <input type="number" name="quantidade" value={edicaoProduto.quantidade} onChange={handleChange} />
                                    <button onClick={handleAdjustStock}>Adjust</button>
                                    <h4>Status <Quantidade qtdeProduto={produto}  /></h4>
                                </div>
                            </div>
                            <div className="action-buttons">
                                <button className="btn-delete" onClick={handleDelete}>Delete Product</button>
                            </div>
                        </div>
                    </article>

                    <article className="article-list-product">
                        <ul className="list-product">
                            <li>Purchase Cost   <div className="precoo"> <b>R$</b> <input type="number" name="preco" value={edicaoProduto.preco}  onChange={handleChange} /> </div> </li>
                            <li>Brand           <input type="text" name="marca" value={edicaoProduto.marca}      onChange={handleChange} /></li>
                            <li>Color           <input type="text" name="cor"   value={edicaoProduto.cor}        onChange={handleChange} /></li>
                            <li>Description     <textarea name="descricao"      value={edicaoProduto.descricao}  onChange={handleChange} /></li>
                        </ul>
                    </article>
                </section>
            )}
        </main>
    );
} 