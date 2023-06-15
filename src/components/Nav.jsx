import SearchBar from "./SearchBar"
import { NavLink } from "react-router-dom"

export default function Nav({onSearch}) {
    return(
        <nav class="navContainer">
        <NavLink to="/home">
        <button>Home</button>
        </NavLink>
        <NavLink to="/about">
        <button>About</button>
        </NavLink>
        <SearchBar onSearch={onSearch}/>
        </nav>
    )
}