import { LiaHomeSolid } from "react-icons/lia";
import { BsBox } from "react-icons/bs";

import "./style.css"

export default function Sidebar() {
    return (
        <section>
            <article className="sidebar">
                <ul className="sidebar-btn">
                    <li><LiaHomeSolid /> <a href="/">Home</a></li>
                    <h4>INVENTORY</h4>
                    <li><BsBox />Link</li>
                    <li><BsBox /><a href="/controle-estoque-react-omega.vercel.app/add-product">Add Product</a></li>
                </ul>
            </article>
        </section>
    )
}