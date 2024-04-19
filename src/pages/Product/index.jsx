import Header      from "../../components/Header"
import Sidebar     from "../../components/Sidebar"
import ViewProduct from "../../components/viewProduct"

import "./style.css"

export default function Product() {
    return (
      <div>
          <Header />
          <section>
            <Sidebar />
            <ViewProduct />
          </section>
      </div>
    )
}