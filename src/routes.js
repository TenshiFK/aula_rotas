import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home/index'
import Contato from './pages/Contato/index'
import Sobre from './pages/Sobre/index'
import Produto from './pages/Produto/index'
import Erro from './pages/Erro/index'

import Header from './components/Header/index'

function RoutesApp(){

    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Contato" element={<Contato/>}/>
                <Route path="/Sobre" element={<Sobre/>}/>
                <Route path="/Produto" element={<Produto/>}/>
                <Route path="*" element={<Erro/>}/>
            </Routes>
        </BrowserRouter> 
    );
}

export default RoutesApp;