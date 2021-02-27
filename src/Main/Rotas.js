import React from 'react';
import { Redirect , BrowserRouter, Route, Switch, HashRouter  } from 'react-router-dom';

import Home from '../Views/Home';
import Login from '../Views/Login';
import CadastroMaquina from '../Views/CadastroMaquina';
import CadastrarFornecedor from '../Views/CadastroFornecedor';



function Rotas(props) {

    return (
    <HashRouter>
        <Switch>
        <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/cadastro-maquina" component={CadastroMaquina} />
            <Route path="/cadastro-fornecedor" component={CadastrarFornecedor} />

        </Switch>
    </HashRouter>


   )
}

export default Rotas;