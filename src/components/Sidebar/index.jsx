import { LiaHomeSolid } from "react-icons/lia";
import { BsBox } from "react-icons/bs";

import "./style.css"

export default function Sidebar() {
    return (
        <section>
            <article className="sidebar">
                <ul className="sidebar-btn">
                    <li>
                        <a href="/"><LiaHomeSolid /></a>
                        <a href="/" title="Home">Home</a>
                    </li>
                    <h4>INVENTORY</h4>
                    
                    <li>
                        <a href="/add-product"><BsBox /></a>
                        <a href="/add-product">Add Product</a>
                    </li>
                </ul>
            </article>
        </section>
    )
}