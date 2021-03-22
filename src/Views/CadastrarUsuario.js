import React from 'react';

import { Redirect } from 'react-router';
import axios from 'axios'
import NumberFormat from 'react-number-format'

class CadastrarUsuario extends React.Component {
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
    cadastrarUsuario = () => {

        if (this.state.cpf == '' || this.state.cpf == null){
            this.setState({
                mensagemErro: "CPF obrigatório!"
            })
        } else {
    
        axios.post("https://engenharia-gestao-hospitalar.herokuapp.com/usuario", {
            nomeCompleto: this.state.nomeCompleto,
            cpf: this.state.cpf.replace(".", "").replace(".", "").replace(".", "").replace("-", ""),
            celular: this.state.celular,
            senha: this.state.senha,
            senhaConfirm: this.state.senhaConfirm,
            email: this.state.email,
            aprovado: this.state.aprovado
        }).then(response => {
            this.setState({
                mensagemSucesso: "Cadastrado com sucesso"
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

    handleNome = (e) => {
        this.setState({
            nomeCompleto: e.target.value
        })
    }

    handleSenhaConfirmacao = (e) => {
        this.setState({
            senhaConfirm: e.target.value
        })
    }
    handleSenha = (e) => {
        this.setState({
            senha: e.target.value
        })
    }
    handleEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    }
    handleCelular = (e) => {
        this.setState({
            celular: e.target.value
        })
    }
    handleCpf = (e) => {
        this.setState({
            cpf: e.target.value
        })
    }
    handleAprovado = (e) => {
        this.setState({
            aprovado: e.target.value
        })
    }


    render() {
        return (<div>
            <div className="col-lg-12" style={{ marginTop: "30px", marginBottom: "30px" }}>
                <h1>Cadastre-se</h1>
            </div>
            <div className="row espacamento" >
                <div className="col-lg-12" >

                    <div  >

                        <label htmlFor="exampleInputEmail1">Nome Completo</label>
                        <div className="form-group">
                            <input style={{ border: "2px solid black" }} type="text" onChange={(e) => this.handleNome(e)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nome Completo" />
                        </div>
                        <label htmlFor="exampleInputEmail1">CPF</label>
                        <div className="form-group">
                            <NumberFormat style={{ border: "2px solid black" }} format="###.###.###-##" type="text" onChange={(e) => this.handleCpf(e)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="CPF" />
                        </div>
                        <label htmlFor="exampleInputEmail1">Email</label>
                        <div className="form-group">
                            <input style={{ border: "2px solid black" }} type="text" onChange={(e) => this.handleEmail(e)} className="form-control" id="exampleInputEmail21" aria-describedby="emailHelp" placeholder="Email" />
                        </div>

                        <label htmlFor="exampleInputEmail1">Celular</label>
                        <div className="form-group">
                            <input style={{ border: "2px solid black" }} type="text" onChange={(e) => this.handleCelular(e)} className="form-control" id="exampleInputEmail21" aria-describedby="emailHelp" placeholder="Celular" />
                        </div>
                        <label htmlFor="exampleInputEmail1">Senha</label>
                        <div className="form-group">
                            <input style={{ border: "2px solid black" }} type="password" onChange={(e) => this.handleSenha(e)} className="form-control" id="exampleInputEmai3l1" aria-describedby="emailHelp" placeholder="Senha" />
                        </div>
                        <label htmlFor="exampleInputEmail1">Confirmação de Senha</label>
                        <div className="form-group">
                            <input style={{ border: "2px solid black" }} type="password" onChange={(e) => this.handleSenhaConfirmacao(e)} className="form-control" id="exam2pleInputEmail1" aria-describedby="emailHelp" placeholder="Confirmação de Senha" />
                        </div>
                        <br></br>

                        <button onClick={(e) => this.cadastrarUsuario()} type="button" style={{ width: "100%" }} className="btn btn-outline-success">Cadastrar</button>
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









        )


    }


}
export default CadastrarUsuario