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
                <Route path="/product/:id"  element={<Product />} />
                <Route path="/add-product" element={<AddProduct />} />
                <Route path="/search/:search"  element={<Search />} />
            </Routes>
        </BrowserRouter>
    )
}