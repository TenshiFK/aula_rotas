import { Link } from "react-router-dom";
import './style.css';

function Header(){

    return(
        <header>
            <h2>Formatura - 2026</h2>

            <div className="">
                <Link to='/'>Home</Link>
                <Link to='/Sobre'>Sobre</Link>
                <Link to='/Contato'>Contato</Link>
                <Link to='/Produto'>Produto</Link>
            </div>
        </header>
    );
}

export default Header;