import { LiaHomeSolid } from "react-icons/lia";
import { BsBox } from "react-icons/bs";


import "./style.css"

export default function Sidebar() {
    return (
        <section>
            <article>
                <ul>
                    <li><LiaHomeSolid />Home</li>
                    <h4>INVENTORY</h4>
                    <li><BsBox />Products</li>
                    <li><BsBox />New Products</li>
                </ul>
            </article>
        </section>
    )
}