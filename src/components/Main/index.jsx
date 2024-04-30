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
                        <th>Product Name</th>
                        <th>SKU</th>
                        <th>Brand</th>
                        <th>Stock in Hand</th>
                        <th>Reorder Level</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {produtos.map(produto => (
                        <tr key={produto._id}>  
                        <td><img className="img-preview" src={produto.imagem} alt="product image" /></td>
                        <td><a href={`controle-estoque-react-omega.vercel.app/product/${produto._id}`}>{produto.nome}</a></td>
                        <td>{produto.sku}</td>
                        <td>{produto.marca}</td>
                        <td>{produto.quantidade}</td>
                        <td>10</td>
                    </tr>
                    ))}
                </tbody>

            </table>
        </main>
    )
}