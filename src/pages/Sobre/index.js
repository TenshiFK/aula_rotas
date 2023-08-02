import { Link } from "react-router-dom";

function Sobre(){

    return(
        <div>
            <h1>Página sobre a empresa</h1>

            <Link to='/'>Home</Link>
            <Link to='/Contato'>Contato</Link>
            <Link to='/Produto'>Produto</Link>
        </div>
    );
}

export default Sobre;