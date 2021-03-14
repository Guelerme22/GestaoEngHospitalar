import React from 'react';
import { Redirect , BrowserRouter, Route, Switch, HashRouter  } from 'react-router-dom';

import Home from '../Views/Home';
import CadastroModelo from '../Views/CadastroModelo';
import Login from '../Views/Login';
import CadastroMaquina from '../Views/CadastroMaquina';
import CadastrarFornecedor from '../Views/CadastroFornecedor';
import CadastroEquipamento from '../Views/CadastroEquipamento';


function Rotas(props) {

    return (
    <HashRouter>
        <Switch>
        <Route exact path="/" component={Home} />
            <Route path="/cadastro-modelo" component={CadastroModelo} />
            <Route path="/login" component={Login} />
            <Route path="/cadastro-maquina" component={CadastroMaquina} />
            <Route path="/cadastro-fornecedor" component={CadastrarFornecedor} />
            <Route path="/cadastro-equipamento" component={CadastroEquipamento} />
        </Switch>
    </HashRouter>


   )
}

export default Rotas;