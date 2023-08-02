import { Link } from "react-router-dom";

function Home(){

    return(
        <div>
            <h1>Bem-vindo(a) a página HOME</h1>
            <span>Usuário</span>
            <br/>
            <br/>

            <Link to='/Sobre'>Sobre</Link>
            <Link to='/Contato'>Contato</Link>
            <Link to='/Produto'>Produto</Link>
        </div>
    );
}

export default Home;