/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import BarraNavegacao from "./barraNavegacao";


// type props = {
//     tema: string
// }

export default class ListaCliente extends Component<any> {
    render() {
        let estilo = `collection-item active ${this.props.tema}`
        let barraNavegacao = <BarraNavegacao tema="purple lighten-4"/>
        return (
            <>
            {barraNavegacao}
            <div className="collection">
                <a className="collection-item">Cliente 1</a>
                <a className="collection-item">Cliente 2</a>
                <a className="collection-item">Cliente 3</a>
                <a className="collection-item">Cliente 4</a>
            </div>
            </>
        )
    }
}