import "./style.css"
import axios from "axios"
import { useState, useEffect } from "react";

export default function Main() {
    const [produtos, setProdutos] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true);

        axios.get('https://api-estoque-rh46.onrender.com/')
        .then((res) => {
            setLoading(false)
            setProdutos(res.data);
        })
        .catch(error => {
            console.error('Erro ao buscar produtos:', error);
        });

    }, [])

    return (
        <main>
            <article>
                <h1>
                    Showing
                    <span> All Products</span>
                </h1>
            </article>
            {loading && <h1>Loading...</h1>}
                {!loading && 
                <table>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>SKU</th>
                            <th>Brand</th>
                            <th>Stock in Hand</th>
                            <th>Reorder Level</th>
                        </tr>
                    </thead>
                    <tbody> 
                        {produtos.map(produto => (
                            <tr key={produto._id}>  
                            <td><img className="img-preview" src={produto.imagem} alt="product image" /></td>
                            <td><a href={`/product/${produto._id}`}>{produto.nome}</a></td>
                            <td>{produto.sku}</td>
                            <td>{produto.marca}</td>
                            <td>{produto.quantidade}</td>
                            <td>10</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            }
        </main>
    )
}