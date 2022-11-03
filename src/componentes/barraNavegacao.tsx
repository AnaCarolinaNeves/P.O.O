/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'

type props = {
    tema: string,
}

export default class BarraNavegacao extends Component<props> {

    render() {
        let estilo = `${this.props.tema}`
        return (
            <>
                <nav className={estilo}>
                    <div className="nav-wrapper">
                        <a className="brand-logo center">WB</a>
                        <a data-target="mobile-menu btn" style={{marginLeft:'15px'}} href="/Home">Página Principal</a>
                    </div>
                </nav>
            </>
        )
    }
}