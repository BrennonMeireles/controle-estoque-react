import "./style.css"

export default function ViewProduct() {
    return (
        <main>
            <article className="title">
                    <h1>
                        Nome
                        <span> do Produto</span>
                    </h1>
                    <h2>SKU 1233421</h2>
            </article>
            <section>
                <article className="banner-stock">
                    <div className="product-img">
                        <img src="/src/assets/tenis-modelo.svg" alt="" />
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
                                    <p>9</p>
                                    <button>Adjust Stock</button>
                                    <h4>Status <span>low stock</span></h4>
                                </div>
                            </div>
                                <div className="action-buttons">
                                    <button className="btn-delete">Delete Product</button>
                                    <button className="btn-add">   Add Product</button>
                                </div>
                        </div>
                </article>
                  
                <article>
                    <ul className="list-product">
                        <li>Purchase Cost<p>$50,00</p></li>
                        <li>Brand<p>Nike</p></li>
                        <li>Color<p>Black</p></li>
                        <li>Description<p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p></li>
                    </ul>
                </article>
            </section>
        </main>
    )
}