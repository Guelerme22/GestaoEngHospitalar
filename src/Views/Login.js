import React from 'react';

import { AuthContext } from '../Main/ProvedorAutenticacao';
import { Redirect } from 'react-router';

import axios from 'axios'
import NumberFormat from 'react-number-format'

class Login extends React.Component {
  state = {
    modelo: "",
    descricaoSimplificada: "",
    numeroDeSerie: "",
    centroDeCusto: "",
    notaFiscal: "",
    valorDaCompra: "",
    dataDaAquisicao: "",
    inicioDaGarantia: "",
    listaDeModelos: [],
    aprovado: 1,
    mensagemSucesso: null

  }

  componentDidMount() {

  }

  consultarAutorizacoes = (id) => {
console.log("entrou aqui ", id.replace(".","").replace(".","").replace(".","").replace("-",""))
    axios.get(`https://engenharia-gestao-hospitalar.herokuapp.com/usuario/${id.replace(".","").replace(".","").replace(".","").replace("-","")}`)
    .then(response => {
      this.setState({
        usuario: response.data
      }, ()=>{
 


       

        { this.context.pegarAutorizacoes(this.state.usuario.aprovado) }
      })


    }).catch(erro => {
      sessionStorage.clear()

    })

  }

  login = () => {

    if (this.state.cpf == '' || this.state.cpf == null) {
      this.setState({
        mensagemErro: "CPF obrigatório!"
      })
    } else {

      axios.post("https://engenharia-gestao-hospitalar.herokuapp.com/authenticate", {
        cpf: this.state.cpf.replace(".", "").replace(".", "").replace(".", "").replace("-", ""),
        senha: this.state.senha,
      }).then(response => {
        sessionStorage.setItem('app-token', response.data.token)
        this.consultarAutorizacoes(this.state.cpf)
        this.context.iniciarSessao()
        this.setState({
          redirect: true
        })

      }).catch(error => {
        this.setState({
          mensagemErro: error.response.data.error
        })
      })

    }
  }

  fecharAlertas = () => {
    this.setState({
      mensagemErro: null,
      mensagemSucesso: null
    })
  }


  handleSenha = (e) => {
    this.setState({
      senha: e.target.value
    })
  }

  handleCpf = (e) => {
    this.setState({
      cpf: e.target.value
    })
  }



  render() {

    if (this.state.redirect) {
      return <Redirect to="/home" />


    } else {
    return (<div className="fundo-cinza">
      <div className= "container-branco">
      <div className="col-lg-12" style={{  marginBottom: "30px" }}>
        <h2>Login</h2>
      

        
      </div>
      <div className="row espacamento" >
        <div className="col-lg-12" >

          <div  >


            <label htmlFor="exampleInputEmail1">CPF</label>
            <div className="form-group">
              <NumberFormat style={{ border: "2px solid black" }} format="###.###.###-##" type="text" onChange={(e) => this.handleCpf(e)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="CPF" />
            </div>



            <label htmlFor="exampleInputEmail1">Senha</label>
            <div className="form-group">
              <input style={{ border: "2px solid black" }} type="password" onChange={(e) => this.handleSenha(e)} className="form-control" id="exampleInputEmai3l1" aria-describedby="emailHelp" placeholder="Senha" />
            </div>

            <br></br>

            <button onClick={(e) => this.login()} type="button" style={{ width: "100%" }} className="btn btn-outline-success">Login</button>
          </div>
          <br></br>
          <div>
            {this.state.mensagemSucesso ? <div>

              <div className="alert alert-dismissible alert-success">
                <button type="button" onClick={(e) => this.fecharAlertas()} className="close" data-dismiss="alert">×</button>
                <strong>Bem Vindo(a)!</strong> Operação bem Sucedida! <a href="#" className="alert-link">{this.state.mensagemSucesso}</a>.
</div>
            </div>
              : false}

            {this.state.mensagemErro ? <div>
              <div className="alert alert-dismissible alert-danger">
                <button type="button" onClick={(e) => this.fecharAlertas()} className="close" data-dismiss="alert">×</button>
                <strong>Que pena!</strong> <a href="#" className="alert-link">Operação não sucedida!</a> {this.state.mensagemErro}
              </div>
            </div> : false}

          </div>
        </div>



      </div>




    </div>



    </div>






    )
            }

  }


}
Login.contextType = AuthContext;

export default Login;