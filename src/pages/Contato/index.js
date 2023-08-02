import { Link } from "react-router-dom";

function Contato(){

    return(
        <div>
            <h1>Página de Contato</h1>

            <Link to='/'>Home</Link>
            <Link to='/Sobre'>Sobre</Link>
            <Link to='/Produto'>Produto</Link>
        </div>
    );
}

export default Contato;