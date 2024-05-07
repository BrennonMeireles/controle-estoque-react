import "./style.css"
import axios from "axios"
import { useState, useEffect } from "react";

export default function Main() {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        axios.get('https://api-estoque-rh46.onrender.com/')
        .then((res) => {
            setProdutos(res.data);
        })
        .catch(error => {
            console.error('Erro ao buscar produtos:', error);
        });
    }, [produtos])

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


    return (
        <main>
            <article>
                <h1>
                    Showing
                    <span> All Products</span>
                </h1>
            </article>
            <table>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Product Name</th>
                        <th className="title-remove-mobile" >SKU</th>
                        <th>Brand</th>
                        <th className="title-remove-mobile" >Stock in Hand</th>
                        <th>Reorder Level</th>
                    </tr>
                </thead>
                <tbody>
                    {produtos.map(produto => (
                        <tr key={produto._id}>  
                        <td><img className="img-preview" src={produto.imagem} alt="product image" /></td>
                        <td><a href={`/product/${produto._id}`}>{produto.nome}</a></td>
                        <td className="title-remove-mobile" >{produto.sku}</td>
                        <td>{produto.marca}</td>
                        <td className="title-remove-mobile">{produto.quantidade}</td>
                        <td><Quantidade qtdeProduto={produto}/></td>
                    </tr>
                    ))}
                </tbody>

            </table>
        </main>
    )
}