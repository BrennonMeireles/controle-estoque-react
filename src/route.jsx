import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home    from "./pages/Home"
import Product from "./pages/Product";

export default function Rotas() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="controle-estoque-react-omega.vercel.app/product/:id" element={<Product />} />
            </Routes>
        </BrowserRouter>
    )
}