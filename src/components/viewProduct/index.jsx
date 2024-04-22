import "./style.css"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react"

export default function ViewProduct() {

    const {id} = useParams();
    const navigate = useNavigate(); // Adicione useNavigate aqui
    const [produto, setProduto] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:3000/${id}`)
        .then((res) => {
            setProduto(res.data);
        })
    }, [id]); // Adicione id como dependência para reexecutar o efeito quando o ID mudar

    const handleDelete = () => {
        if (!window.confirm("Você tem certeza que deseja excluir este produto?")) {
            return;
        }
    
        axios.delete(`http://localhost:3000/${id}`)
            .then((res) => {
                console.log("Produto deletado com sucesso:", res.data);
                // Aqui você pode adicionar qualquer lógica adicional após a exclusão do produto, se necessário

                navigate('/');
            })
            .catch((error) => {
                console.error("Erro ao deletar produto", error);
            });
    };

    return (
        <main>
            {produto && (
                <article className="title">
                    <h1>
                        Nome
                        <span> {produto.nome}</span>
                    </h1>
                    <h2>SKU {produto.sku}</h2>
                </article>
            )}
            {produto && (
                <section>
                    <article className="banner-stock">
                        <div className="product-img">
                            <img src="/src/assets/tenis-modelo.svg" alt="" />
                            {/* img src={produto.imagem} alt="" /> */}
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
                                    <p>{ produto.quantidade }</p>
                                    <button>Adjust Stock</button>
                                    <h4>Status <span>low stock</span></h4>
                                </div>
                            </div>
                            <div className="action-buttons">
                                <button className="btn-delete" onClick={handleDelete}>Delete Product</button>
                                <button className="btn-add">Add Product</button>
                            </div>
                        </div>
                    </article>
    
                    <article>
                        <ul className="list-product">
                            <li>Purchase Cost<p>{ produto.preco }</p></li>
                            <li>Brand<p>{ produto.marca }</p></li>
                            <li>Color<p>{ produto.cor }</p></li>
                            <li>Description<p className="description">{ produto.descricao }</p></li>
                        </ul>
                    </article>
                </section>
            )}
        </main>
    );
}    