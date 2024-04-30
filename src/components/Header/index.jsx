import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { useState } from "react";
import { useNavigate } from "react-router-dom"

import "./style.css"

export default function navbar(){
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault(); // é chamado para prevenir o comportamento padrão de submissão do formulário, que é recarregar a página 

        if(!search) return

        // o navigate redireciona para uma rota quando a função é submetida 
        navigate(`/controle-estoque-react-omega.vercel.app/search/${search}`, { replace: true });
        setSearch("");
    }

    return (
            <header>
                <nav>
                    <img src="/src/assets/logo.png"></img>
                    <h4><a href="/">The Boys System</a></h4>
                    <div>
                        <div className="search-img-box">
                            <HiMiniMagnifyingGlass />
                        </div>
                        <form onSubmit={ handleSubmit }>
                            <input type="text" name="search-box" id="search-box" 
                            placeholder="Type to search" onChange={(e) => setSearch(e.target.value)}/>
                        </form>  
                    </div>
                </nav>
            </header>   
    )
}