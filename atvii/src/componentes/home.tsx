import 'materialize-css/dist/css/materialize.min.css'
import { Component } from "react";
import BarraNavegacao from './barraNavegacao';

// type props = {
//     tema: string
// }

export default class Home extends Component<any> {
    render() {
        let barraNavegacao = <BarraNavegacao tema="purple lighten-4"/>
        return (
            <>
            {barraNavegacao}
            <div className="row" style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '50vh'}}>
                <div className="center-align">
                    <div className="card" style={{width:'70vh'}}>
                        <span className="card-title">Clientes</span>
                        <div className="card-content">
                            <a style={{margin:'5px'}} className="waves-effect waves-light btn" href="/listaCliente">Consultar clientes</a>
                            <a className="waves-effect waves-light btn" href="/formularioCadastroCliente">Cadastrar clientes</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row" style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '5vh'}}>
                <div className="center-align">
                    <div className="card" style={{width:'70vh'}}>
                        <span className="card-title">Produtos</span>
                        <div className="card-content">
                            <a style={{margin:'5px'}} className="waves-effect waves-light btn" href="/listaProduto">Consultar produtos</a>
                            <a className="waves-effect waves-light btn" href="/formularioCadastroProduto">Cadastrar produtos</a>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}