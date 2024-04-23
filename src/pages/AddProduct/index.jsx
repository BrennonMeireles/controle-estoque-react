import Header     from "../../components/Header"
import Sidebar    from "../../components/Sidebar"
import AddNew     from "../../components/addNewProd"

import "./style.css"

export default function AddProduct() {
    return(
        <div>
            <Header  />
            <section className="home-add">
                <Sidebar />
                <AddNew  />
            </section>
        </div>
    )
}   