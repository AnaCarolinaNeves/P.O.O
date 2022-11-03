import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from "./componentes/home";
import ListaCliente from "./componentes/listaCliente";
import FormularioCadastroCliente from "./componentes/formularioCadastroCliente";
import ListaProduto from "./componentes/listaProduto";
import FormularioCadastroProduto from "./componentes/formularioCadastroProduto";

  function App() {
    return (
      <BrowserRouter>
      <Routes>
      <Route index element={<Home/>}/>
      <Route path="*" element={<Navigate to="/"/>}/>
      <Route path="/listaCliente" element={<ListaCliente/>}/>
      <Route path="/formularioCadastroCliente" element={<FormularioCadastroCliente/>}/>
      <Route path="/listaProduto" element={<ListaProduto/>}/>
      <Route path="/formularioCadastroProduto" element={<FormularioCadastroProduto/>}/>
      </Routes>
      </BrowserRouter>
    );
  }
  export default App;

