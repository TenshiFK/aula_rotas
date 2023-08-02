import { Link } from "react-router-dom";

function Erro(){
    
    return(
        <div>
            <h2>Ops! Parece que essa página não existe!</h2>
            <span>Encontramos essas páginas aqui</span> 

            <Link to='/'>Home</Link>
            <Link to='/Sobre'>Sobre</Link>
            <Link to='/Contato'>Contato</Link>
            <Link to='/Produto'>Produto</Link>
        </div>
        
    )
}

export default Erro;