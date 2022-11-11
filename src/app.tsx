import { Navigate, Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import FormularioCadastroCliente from "./paginas/formularioCadastroCliente";
import FormularioCadastroProduto from "./paginas/formularioCadastroProduto";
import FormularioCadastroServico from "./paginas/formularioCadastroServico";
import ListaCliente from "./paginas/listaCliente";
import Listagem from "./paginas/listagem";
import ListaProduto from "./paginas/listaProduto";
import ListaServico from "./paginas/listaServico";
import NavBar from "./paginas/navBar";
import RegistrarCompra from "./paginas/registrarCompra";

function App() {
    return (
        <><NavBar /><BrowserRouter>
            <Routes>
                <Route index element={<ListaCliente />} />
                <Route path="*" element={<Navigate to="/" />} />
                <Route path="/formularioCadastroCliente" element={<FormularioCadastroCliente />} />
                <Route path="/formularioCadastroProduto" element={<FormularioCadastroProduto />} />
                <Route path="/formularioCadastroServico" element={<FormularioCadastroServico />} />
                <Route path="/listaCliente" element={<ListaCliente />} />
                <Route path="/listagem" element={<Listagem />} />
                <Route path="/listaProduto" element={<ListaProduto />} />
                <Route path="/listaServico" element={<ListaServico />} />
                <Route path="/registrarCompra" element={<RegistrarCompra />} />
            </Routes>
        </BrowserRouter></>
    );
  }

export default App