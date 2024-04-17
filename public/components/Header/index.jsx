
import { HiMiniMagnifyingGlass } from "react-icons/hi2";

import "./style.css"

export default function navbar(){
    return (
            <header>
                <nav>
                    <h4>The Boys System</h4>
                    <div>
                        <div className="search-img-box">
                            <HiMiniMagnifyingGlass />
                        </div>
                        <input type="text" name="search-box" id="search-box" placeholder="Type to search"/>
                    </div>
                </nav>
            </header>   
    )
}