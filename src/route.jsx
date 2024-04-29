import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home       from "./pages/Home"
import Product    from "./pages/Product";
import AddProduct from "./pages/AddProduct";
import Search from "./pages/Search";

export default function Rotas() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="controle-estoque-react-omega.vercel.app/product/:id"  element={<Product />} />
                <Route path="controle-estoque-react-omega.vercel.app/add-product"  element={<AddProduct />} />
                <Route path="controle-estoque-react-omega.vercel.app/search/:search"  element={<Search />} />
            </Routes>
        </BrowserRouter>
    )
}