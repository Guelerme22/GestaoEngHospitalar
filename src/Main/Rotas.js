import React from 'react';
import { Redirect , BrowserRouter, Route, Switch, HashRouter  } from 'react-router-dom';

import Home from '../Views/Home';
import CadastroModelo from '../Views/CadastroModelo';
import Login from '../Views/Login';
import CadastroEquipamento from '../Views/CadastroEquipamento';
import CadastrarFornecedor from '../Views/CadastroFornecedor';
import CadastroInventario from '../Views/CadastroInventario';
import CadastrarUsuario from '../Views/CadastrarUsuario'
import ListaInventario from '../Views/ListaInventario';

function Rotas(props) {

    return (
    <HashRouter>
        <Switch>
        <Route exact path="/" component={Home} />
            <Route path="/cadastro-modelo" component={CadastroModelo} />
            <Route path="/login" component={Login} />
            <Route path="/cadastro-equipamento" component={CadastroEquipamento} />
            <Route path="/cadastro-fornecedor" component={CadastrarFornecedor} />
            <Route path="/cadastro-usuario" component={CadastrarUsuario} />
            <Route path="/lista-inventario" component={ListaInventario} />

            <Route path="/cadastro-inventario" component={CadastroInventario} />
        </Switch>
    </HashRouter>


   )
}

export default Rotas;