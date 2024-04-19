import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home    from "./pages/Home"
import Product from "./pages/Product";

export default function Rotas() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="https://controle-estoque-react-omega.vercel.app/product" element={<Product />} />
            </Routes>
        </BrowserRouter>
    )
}