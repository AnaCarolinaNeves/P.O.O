/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'
import RemovedorClienteLocal from "../removedores/removedorClienteLocal";
import BuscadorClientes from "../buscadores/buscadorClientes";
import RemovedorCliente from "../removedores/removedorCliente";
import Endereco from "./endereco";
import Cliente from "./cliente";
import Telefone from "./telefone";


type state = {
    clientes: any[]
}

function collapsible() {
    document.addEventListener('DOMContentLoaded', function () {
        var elems = document.querySelectorAll('.collapsible');
        M.Collapsible.init(elems);
    });
}

class ListaCliente extends Component<{}, state> {
    constructor(props) {
        super(props)
        this.state = { clientes: [] }
        this.excluirLocal = this.excluirLocal.bind(this)
    }

    public buscarClientes() {
        let buscadorClientes = new BuscadorClientes()
        const clientes = buscadorClientes.buscar()
        clientes.then(clientes => {
            this.setState({ clientes })
        })
    }

    public excluirRemoto(idCliente: string) {
        let removedor = new RemovedorCliente()
        removedor.remover({ id: idCliente })
    }

    public excluirLocal(id: string, e: any) {
        e.preventDefault()
        let removedorLocal = new RemovedorClienteLocal()
        let clientes = removedorLocal.remover(this.state.clientes, id)
        this.setState({
            clientes: clientes
        })
        this.excluirRemoto(id)
    }

    componentDidMount() {
        this.buscarClientes()
    }

    render() {
        collapsible()
        return (
            <table className="highlight responsive-table">
                <thead>
                    <tr>
                        <th className="center-align">Nome</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.clientes.map(item => {
                        let endereco = new Endereco(item.endereco.cidade, item.endereco.estado, item.endereco.rua, item.endereco.bairro, item.endereco.numero, item.endereco.informacoesAdicionais, item.endereco.codigoPostal)
                        endereco.id = item.endereco.id
                        let cliente = new Cliente(item.nome, item.sobreNome, item.email, endereco)
                        cliente.id = item.id
                        return (
                            <tr>
                                <td>
                                    <details className="collapse">
                                        <summary>{item.nome}</summary>
                                        <div className="row">
                                                <div className="col">
                                                    <h6 id="nome_cliente">{item.nome}</h6>
                                                    <label htmlFor="nome_cliente">Nome</label>
                                                </div>
                                                <div className="col">
                                                    <h6 id="sobrenome_clienet">{item.sobreNome}</h6>
                                                    <label htmlFor="sobrenome_cliente">Sobrenome</label>
                                                </div>
                                                <div className="col">
                                                    <h6 id="email_cliente">{item.email}</h6>
                                                    <label htmlFor="email_cliente">Email</label>
                                                </div>
                                                {item.telefones.map(t => {
                                                    let tel = new Telefone()
                                                    tel.ddd = t.ddd
                                                    tel.numero = t.numero
                                                    cliente.telefones.push(tel)
                                                    return (
                                                        <>
                                                            <div className="col">
                                                                <h6 id="ddd_cliente">{t.ddd}</h6>
                                                                <label htmlFor="ddd_cliente">DDD</label>
                                                            </div>
                                                            <div className="col">
                                                                <h6 id="numeroTel_cliente">{t.numero}</h6>
                                                                <label htmlFor="numeroTel_cliente">Número</label>
                                                            </div>
                                                        </>
                                                    )
                                                })}
                                        </div>
                                            <div className="row">
                                                <div className="col">
                                                    <h6 id="estado_cliente">{item.endereco.estado}</h6>
                                                    <label color="red" htmlFor="estado_cliente">Estado</label>
                                                </div>
                                                <div className="col">
                                                    <h6 id="cidade_cliente">{item.endereco.cidade}</h6>
                                                    <label htmlFor="cidade_cliente">Cidade</label>
                                                </div>
                                                <div className="col">
                                                    <h6 id="bairro_cliente">{item.endereco.bairro}</h6>
                                                    <label htmlFor="bairro_cliente">Bairro</label>
                                                </div>
                                                <div className="col">
                                                    <h6 id="rua_cliente">{item.endereco.rua}</h6>
                                                    <label htmlFor="rua_cliente">Rua</label>
                                                </div>
                                                <div className="col">
                                                    <h6 id="numeroCasa_cliente">{item.endereco.numero}</h6>
                                                    <label htmlFor="numeroCasa_cliente">N°</label>
                                                </div>
                                                <div className="col">
                                                    <h6 id="codigoPostal_cliente">{item.endereco.codigoPostal}</h6>
                                                    <label htmlFor="codigoPostal_cliente">Código postal</label>
                                                </div>
                                                <div className="col">
                                                    <h6 id="informacoesAdicionais_cliente">{item.endereco.informacoesAdicionais}</h6>
                                                    <label htmlFor="informacoesAdicionais_cliente">Informações adicionais</label>
                                                </div>
                                            </div>
                                        
                                        <div className="row">
                                            <div className="col">
                                                <a className="btn waves-effect #f06292 pink lighten-2" href='/edicaoCliente'>Atualizar
                                                    <i className="small material-icons right">border_color</i>
                                                </a>

                                            </div>
                                            <div className="col">
                                                <a className="btn waves-effect #f06292 pink lighten-2" href="" target={"_self"} 
                                                onClick={(e) => this.excluirLocal(cliente['id'], e)}>Excluir
                                                    <i className="small material-icons right">delete</i>
                                                    
                                                </a>
                                            </div>
                                        </div>
                                    </details>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table >
        );
    }
}
export default ListaCliente