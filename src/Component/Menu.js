import React from 'react';
//import { AuthContext } from '../Main/ProvedorAutenticacao';
import NavbarItem from './NavbarItem';
import { AuthContext } from '../Main/ProvedorAutenticacao';
import universidade from '../assets/universidade.png'



class Menu extends React.Component {


  state = {
    abrirMenu: false,
    abrirCaixa: false,

  };


  abrirMenu = () => {

    this.setState(state => {
      return {
        abrirMenu: !state.abrirMenu
      };
    });
  };

  handleClicCaixa = () => {
    this.setState({
      abrirCaixa: !this.state.abrirCaixa
    })
  }



  handleClickOutside = event => {

    this.setState({
      abrirMenu: false,

    });

  };
  componentDidMount() {
    document.addEventListener("mousedown", this.handleClick, false);
  }
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClick, false);
  }

  handleClick = (e) => {
    if (this.node.contains(e.target)) {
      return
    }
    this.handleClickOutside()
  }


  encerrarSessao = () => {

    this.context.encerrarSessao()
  }





  render() {



    return (
      <div ref={node => this.node = node}>
        <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: 'black' }} >
          <img style={{ width: '130px', marginRight: '20px' }} src={universidade}></img>
          <button onClick={this.abrirMenu} className={this.state.abrirMenu ? "navbar-toggler" : "navbar-toggler collapsed"} type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation" >
            <span className="navbar-toggler-icon" />
          </button>
          <div className={this.state.abrirMenu ? "navbar-collapse collapse show" : "navbar-collapse collapse"} id="navbarColor01" >
          

            {this.context.isAuthenticated ?
              this.context.autorizado == 1 ?
                <ul className="navbar-nav mr-auto" >
                  <li className="nav-item">
                    <a className="nav-link" href="#/cadastro-fornecedor">Cadastrar Fornecedor</a>
                  </li>
                  <li className="nav-item">
                  <li onClick={(e) => this.handleClicCaixa()} className="nav-item dropdown">
        <a className={this.state.abrirCaixa == true ? "nav-link dropdown-toggle show" : "nav-link dropdown-toggle"} data-bs-toggle="INVENTARIO" href="" role="button" aria-haspopup="true" aria-expanded={this.state.abrirCaixa== true ? "true" : "false"}>Dropdown</a>
        <div className={this.state.abrirCaixa == true? "dropdown-menu show" : "dropdown-menu"} style={{}}>
          <a className="dropdown-item" href="#/cadastro-equipamento">Cadastrar Equipamento</a>
          <a className="dropdown-item" href="#/cadastro-modelo">Cadastrar Modelo</a>
          <a className="dropdown-item" href="#/cadastro-fornecedor">Cadastrar Fornecedor</a>
          <a className="dropdown-item" href="#/cadastro-sala">Cadastrar Sala</a>
          <a className="dropdown-item" href="#/cadastro-centro-de-custo">Cadastrar Centro de Custo</a>
          <a className="dropdown-item" href="#/cadastro-inventario">Cadastrar Inventario</a>
          <div className="dropdown-divider" />
          <a className="dropdown-item" href="#/lista-inventario">Seu Inventario</a>
        </div>
      </li>
      </li>
                  <li>
                    <a className="nav-link" href="#/cadastro-modelo">Cadastrar modelo</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#/cadastro-inventario">Cadastrar Inventário</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#/lista-inventario">Seu Inventário</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#/cadastro-centro-de-custo">Cadastrar Centro de Custo</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#/cadastro-sala">Cadastrar Sala</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#/lista-inventario">Ordens de Serviço</a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link" href="#/cadastro-usuario-de-servico">Cadastrar Usuario de Serviço</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#/cadastro-equipamento">Cadastrar Equipamento</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" onClick={this.encerrarSessao} href="#/login">Logout</a>
                  </li>

                </ul>
                :

                <ul className="navbar-nav mr-auto" >

                  <li className="nav-item">
                    <a className="nav-link" href="#/lista-inventario-usuario">Inventário</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#/lista-inventario">Ordens de Serviço</a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link" onClick={this.encerrarSessao} href="#/login">Logout</a>
                  </li>

                </ul>

              :
              <ul className="navbar-nav mr-auto" >

                <li className="nav-item">
                  <a className="nav-link" href="#/cadastro-usuario">Cadastrar-se</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#/login">Login</a>
                </li>


              </ul>
            }



          </div>
        </nav>
      </div>

    );

  }
}

Menu.contextType = AuthContext;

export default Menu;