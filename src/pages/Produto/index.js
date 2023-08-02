import { Link } from "react-router-dom";

function Produto(){

    return(
        <div>
            <h1>Página de Produto</h1>

            <Link to='/'>Home</Link>
            <Link to='/Contato'>Contato</Link>
            <Link to='/Sobre'>Sobre</Link>
        </div>
    );
}

export default Produto;