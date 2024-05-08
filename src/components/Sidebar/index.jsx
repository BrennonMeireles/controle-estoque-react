import { LiaHomeSolid } from "react-icons/lia";
import { BsBox } from "react-icons/bs";

import "./style.css"

export default function Sidebar() {
    return (
        <section>
            <article className="sidebar">
                <ul className="sidebar-btn">
                    <li>
                        <a className="house-icon" href="/"><LiaHomeSolid /></a>
                        <a href="/" title="Home">Home</a>
                    </li>
                    <h4>INVENTORY</h4>
                    
                    <li>
                        <a  className="cub-icon" href="/add-product"><BsBox /></a>
                        <a href="/add-product">Add Product</a>
                    </li>
                </ul>
            </article>
        </section>
    )
}