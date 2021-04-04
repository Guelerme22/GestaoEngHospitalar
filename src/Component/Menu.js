import React from 'react';
//import { AuthContext } from '../Main/ProvedorAutenticacao';
import NavbarItem from './NavbarItem';
import { AuthContext } from '../Main/ProvedorAutenticacao';
import universidade from '../assets/universidade.png'



class Menu extends React.Component {


  state = {
    abrirMenu: false,

  };


  abrirMenu = () => {

    this.setState(state => {
      return {
        abrirMenu: !state.abrirMenu
      };
    });
  };


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
        <img style={{width:'130px', marginRight:'20px'}}src = {universidade}></img> 
          <button onClick={this.abrirMenu} className={this.state.abrirMenu ? "navbar-toggler" : "navbar-toggler collapsed"} type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation" >
            <span className="navbar-toggler-icon" />
          </button>
          <div className={this.state.abrirMenu ? "navbar-collapse collapse show" : "navbar-collapse collapse"} id="navbarColor01" >


            {this.context.isAuthenticated  ?
              <ul className="navbar-nav mr-auto" >
                <li className="nav-item">
                  <a className="nav-link" href="#/cadastro-fornecedor">Cadastrar Fornecedor</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#/cadastro-modelo">Cadastrar modelo</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#/cadastro-inventario">Cadastrar Inventário</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#/lista-inventario">Inventário</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#/cadastro-centro-de-custo">Cadastrar Centro de Custo</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#/cadastro-equipamento">Cadastrar Equipamento</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link"  onClick={this.encerrarSessao} href="#/login">Logout</a>
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