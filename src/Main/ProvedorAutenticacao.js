import React from 'react';

import axios from 'axios';
import AuthService from '../Service/AuthService';
export const AuthContext = React.createContext({});

export const AuthConsumer = AuthContext.Consumer;

const AuthProvider = AuthContext.Provider;



async function funcionarioAutorizacao(cpf) {
    console.log("funcionarioAutorizacao", cpf)

    var token = 0;

    var response  = await axios.get(`https://engenharia-gestao-hospitalar.herokuapp.com/usuario/${cpf}`)


    if (response.data.aprovado == 3){
        token = 3;
       

    } else if ( response.data.aprovado == 1){
        token = 1;
    } else {
        token = 2;

    }
    
    console.log("retorno de autorização," ,token)

    return token;
  }

class ProvedorAutenticacao extends React.Component {


    state = {
        isAuthenticated: AuthService.isUsuarioAutenticado(),
        user: AuthService.userId(),

    }

    componentDidMount = () => {
        this.iniciarSessao()

    }

    iniciarSessao = () => {
        this.setState({ isAuthenticated: AuthService.isUsuarioAutenticado() })
       // this.setState({ autorizado: AuthService.isUsuarioAutorizado() })
        console.log("observe", this.state.user)
        this.setState({ user: AuthService.userId() }, () => {
        
            funcionarioAutorizacao(this.state.user).then(result => this.setState({autorizado : result}, ()=>{
         
            }));

        })
    }

    encerrarSessao = () => {

        sessionStorage.clear();
        this.setState({ isAuthenticated: AuthService.isUsuarioAutenticado() })

    }

    pegarAutorizacoes = (id) => {

        return id;

    }

    defineUser = (e) => {
        this.setState({
            user: e
        })

    }






    render() {
        const contexto = {
            iniciarSessao: this.iniciarSessao,
            encerrarSessao: this.encerrarSessao,
            pegarAutorizacoes: this.pegarAutorizacoes,
            defineUser: this.defineUser,
            timeLineMotoristaHandler: this.timeLineMotoristaHandler,
            timeLineTransportadoraHandler: this.timeLineTransportadoraHandler,
            isAuthenticated: this.state.isAuthenticated,
            autorizado: this.state.autorizado,
            comite: this.state.comite,

            user: this.state.user,
            timeLineCadastroMotorista: this.state.timeLineCadastroMotorista,
            timeLineCadastroTransportadora: this.state.timeLineCadastroTransportadora,
            transformY: this.state.transformY
        }
        return (
            <AuthProvider value={contexto}>
                {this.props.children}
            </AuthProvider>

        )
    }

}

export default ProvedorAutenticacao;