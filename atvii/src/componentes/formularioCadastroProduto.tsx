import { Component } from "react";
import BarraNavegacao from "./barraNavegacao";

type props = {
    tema: string
}

export default class FormularioCadastroProduto extends Component<any, props> {

    render() {
        let estiloBotao = `btn waves-effect waves-light ${this.props.tema}`
        let barraNavegacao = <BarraNavegacao tema="purple lighten-4"/>
        return (
            <>
            {barraNavegacao}
                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s6">
                                <input id="nome_produto" type="text" className="validate" />
                                <label htmlFor="nome_produto">Nome</label>
                            </div>
                            <div className="input-field col s6">
                                <input id="preco" type="text" className="validate" />
                                <label htmlFor="preco">Preço</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12">
                                <button className={estiloBotao} type="submit" name="action">Submit
                                    <i className="material-icons right">send</i>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </>
        )
    }
}