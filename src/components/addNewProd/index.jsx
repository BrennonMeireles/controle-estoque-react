import "./style.css"

export default function AddNew() {
    return(
        <section className="section-addProd">
                <article className="title">
                    <div className="div-input">
                        <label htmlFor="name">Name :</label>
                        <input className="add-input" type="text" name="name" id="name" placeholder="Type name product"/>
                    </div>
                    <div className="div-input">
                        <label className="sku-label" htmlFor="sku">SKU :</label>
                        <input className="sku-input" type="text" name="sku" id="sku" placeholder="Type SKU product" />
                    </div>
                </article>  
                <section>
                    <article className="banner-stock">
                        <div className="product-img">
                            <img src="/src/assets/upload_icon.svg" alt="" />
                            <input className="add-input-upload" type="text" name="img" id="name" placeholder="Paste here image URL" />
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
                                        <input className="add-input" type="text" name="estoque" id="estoque" placeholder="Type stock"/>
                                    </div>
                                    <button>Adjust Stock</button>
                                    <h4>Status <span>low stock</span></h4>
                                </div>
                            </div>
                            <div className="action-buttons">
                                <button className="btn-delete">Delete Product</button>
                                <button className="btn-add">Add Product</button>
                            </div>
                        </div>
                    </article>

                    <article className="input-list">
                        <ul className="list-product">
                            <div className="div-input-list"> 
                                <label htmlFor="custo">Purchase Coust:</label>
                                <input className="add-input" type="text" name="custo" id="custo" placeholder="Type purchase coust" />
                            </div>
                            <div className="div-input-list">
                                <label htmlFor="color">Color :</label>
                                <input className="add-input" type="text" name="color" id="color" placeholder="Type color product" />
                            </div>
                            <div className="div-input-list">
                                <label htmlFor="marca">Brand :</label>
                                <input className="add-input" type="text" name="marca" id="marca" placeholder="Type brand" />
                            </div> 
                            <div className="div-input-list">
                                <label htmlFor="descricao">Description :</label>
                                <input className="add-input" type="text" name="descricao" id="descricao" placeholder="Type description" />
                            </div>
                        </ul>
                    </article>
                </section>
        </section>
    )
}