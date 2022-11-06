/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'

export default class ListaCliente extends Component<any> {
    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.collapsible');
            M.Collapsible.init(elems);
        });
    }
    render() {
        let estilo = `collection-item active ${this.props.tema}`
        let estiloBotao = `btn waves-effect waves-light ${this.props.tema}`
        return (

            <>
                <table className="highlight responsive-table centered">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Qtd produtos comprados</th>
                            <th>Qtd serviços utilizados</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>
                                <details className="collapse">
                                    <summary>Jeniffer</summary>
                                    <div className="row">
                                        <form className="col">
                                            <div className="input-field col s6">
                                                <input id="nome_cliente" type="text" className="validate" />
                                                <label htmlFor="nome_cliente">Nome</label>
                                            </div>
                                            <div className="input-field col s6">
                                                <input id="nome_social" type="text" className="validate" />
                                                <label htmlFor="nome_social">Nome social</label>
                                            </div>
                                            <div className="input-field col s6">
                                                <input id="" type="text" className="validate" />
                                                <label htmlFor=""></label>
                                            </div>
                                            <div className="input-field col s6">
                                                <input id="" type="text" className="validate" />
                                                <label htmlFor=""></label>
                                            </div>
                                            <div className="row">
                                                <div className="col">
                                                    <button className={estiloBotao} type="submit" name="action">Atualizar
                                                        <i className="small material-icons right">border_color</i>
                                                    </button>
                                                </div>
                                                <div className="col">
                                                    <button className={estiloBotao} type="submit" name="action">Excluir
                                                        <i className="small material-icons right">delete</i>
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </details>
                            </td>
                            <td>15</td>
                            <td>4</td>
                            <td>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <details className="collapse">
                                    <summary>Ana</summary>
                                    <div className="row">
                                        <form className="col">
                                            <div className="input-field col s6">
                                                <input id="nome_cliente" type="text" className="validate" />
                                                <label htmlFor="nome_cliente">Nome</label>
                                            </div>
                                            <div className="input-field col s6">
                                                <input id="nome_social" type="text" className="validate" />
                                                <label htmlFor="nome_social">Nome social</label>
                                            </div>
                                            <div className="input-field col s6">
                                                <input id="" type="text" className="validate" />
                                                <label htmlFor=""></label>
                                            </div>
                                            <div className="input-field col s6">
                                                <input id="" type="text" className="validate" />
                                                <label htmlFor=""></label>
                                            </div>
                                            <div className="row">
                                                <div className="col">
                                                    <button className={estiloBotao} type="submit" name="action">Atualizar
                                                        <i className="small material-icons right">border_color</i>
                                                    </button>
                                                </div>
                                                <div className="col">
                                                    <button className={estiloBotao} type="submit" name="action">Excluir
                                                        <i className="small material-icons right">delete</i>
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </details>
                            </td>
                            <td>10</td>
                            <td>3</td>
                        </tr>
                    </tbody>
                </table>
            </>
        )
    }
}