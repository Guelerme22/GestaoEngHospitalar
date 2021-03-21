import React from 'react';

import { Redirect } from 'react-router';

class Menu extends React.Component {

  render() {


      return (
        <div>

<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <a className="navbar-brand" href="#" _msthash={1453933} _msttexthash={75387}>Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation" _msthidden="A" _msthiddenattr={1374854} _mstaria-label={320099}>
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarColor01">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#"><font _mstmutation={1} _msthash={573742} _msttexthash={42250}>Casa </font><span className="sr-only" _msthash={869765} _msttexthash={80158}>(atual)</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#/cadastro-fornecedor" _msthash={574119} _msttexthash={313612}>Cadastrar Fornecedor</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#/cadastro-modelo" _msthash={574496} _msttexthash={94796}>Cadastrar modelo</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#/cadastro-inventario" _msthash={574496} _msttexthash={94796}>Inventario</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#/cadastro-equipamento" _msthash={574873} _msttexthash={59826}>Cadastrar Equipamento</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false" _msthash={575250} _msttexthash={117338}>Dropdown</a>
        <div className="dropdown-menu" _msthidden={4}>
          <a className="dropdown-item" href="#" _msthash={811850} _msttexthash={76466} _msthidden={1}>Action</a>
          <a className="dropdown-item" href="#" _msthash={812357} _msttexthash={232752} _msthidden={1}>Another action</a>
          <a className="dropdown-item" href="#" _msthash={812864} _msttexthash={349791} _msthidden={1}>Something else here</a>
          <div className="dropdown-divider" />
          <a className="dropdown-item" href="#" _msthash={813878} _msttexthash={230529} _msthidden={1}>Separated link</a>
        </div>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="text" placeholder="Busca" _mstplaceholder={58370} />
      <button className="btn btn-secondary my-2 my-sm-0" type="submit" _msthash={727987} _msttexthash={58370}>Busca</button>
    </form>
  </div>
</nav>
        </div>
      );
    }
  
}

export default Menu;