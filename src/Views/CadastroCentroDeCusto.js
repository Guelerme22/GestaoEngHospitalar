import React from 'react';

import { Redirect } from 'react-router';
import axios from 'axios';
import { AuthContext } from '../Main/ProvedorAutenticacao';

class CadastroCentroDeCusto extends React.Component {
    state = {
        listaDeSalas: [],
        bloco: null,
        idSala: 0,
        bloco: null,
        mensagemSucesso: null,
        mensagemErro: null,
        listaDeCentros: [],
        menssagemDeErroTabela:null,

    }

    fecharAlertas = () => {
        this.setState({
            mensagemSucesso: null,
            mensagemErro: null,
            menssagemDeErroTabela:null
        })


    }

    cadastrar = () => {
        this.fecharAlertas()
        if (this.state.bloco == null || this.state.bloco == '') {
            this.setState({
                mensagemErro: "Valor de bloco é obrigatório!"
            })
        } else if (this.state.idSala == null || this.state.idSala == '') {
            this.setState({
                mensagemErro: "A sala é obrigatória!"
            })
        } else {


            axios.post("https://engenharia-gestao-hospitalar.herokuapp.com/centro-de-custo", {
                bloco: this.state.bloco,
                sala: {
                    id: this.state.idSala
                },
                detalhes: this.state.detalhes,
                cnpj: this.context.user

            })
                .then(response => {
                    this.listarCentroDeCusto()
                    this.setState({
                        mensagemSucesso: 'Parabéns!'
                    })

                })
                .catch(error => {
                    this.setState({
                        mensagemErro: 'Erro ao cadastrar! Tente novamente!'
                    })
                })
        }
    }


    handleSala = (e) => {
        this.setState({
            idSala: e.target.value
        })
    }

    handleBloco = (e) => {
        this.setState({
            bloco: e.target.value
        })
    }
    handleDetalhes = (e) => {
        this.setState({
            detalhes: e.target.value
        })
    }
    componentDidMount() {
        this.listarCentroDeCusto()
        this.listarSalas()

    }

    listarSalas = () => {
        axios.get(`https://engenharia-gestao-hospitalar.herokuapp.com/sala/${this.context.user}`)
            .then(response => {
                this.setState({
                    listaDeSalas: response.data
                })
            })
            .catch(error => {

            })
    }

    deletarCentroDeCusto = (idRecebido) =>{
        axios.post("https://engenharia-gestao-hospitalar.herokuapp.com/centro-de-custo/deletar", {
          id: idRecebido
        }).then(response=>{
          this.listarCentroDeCusto()
    
        }).catch(error =>{
          this.setState({
            menssagemDeErroTabela: error.response.data.error
          })
    
        })
      }
    listarCentroDeCusto = () => {
        axios.get(`https://engenharia-gestao-hospitalar.herokuapp.com/centro-de-custo/${this.context.user}`)
            .then(response => {
                this.setState({
                    listaDeCentros: response.data
                })
            })
            .catch(error => {

            })
    }
    render() {
        return (
            <div>

                <div className="col-lg-12" style={{ marginTop: "30px", marginBottom: "30px" }}>
                    <h2>CADASTRAR CENTRO DE CUSTO</h2>
                    <hr></hr>

                </div>
                <div className="row">
                    <div className="col-lg-6" style={{ paddingLeft: "4%", paddingRight: "4%" }}>
                        <div className="form-group">
                            <label htmlFor="exampleSelect1">BLOCO/CLINICA</label>
                            <select onChange={(e) => this.handleBloco(e)} className="form-control" id="exampleSelect1">
                                <option value={null}>Selecionar Bloco/Clínica</option>

                                <option value={"Bloco 1"}>Bloco 1</option>
                                <option value={"Bloco 2"}>Bloco 2</option>
                                <option value={"Bloco 3"}>Bloco 3</option>
                                <option value={"Bloco 4"}>Bloco 4</option>
                                <option value={"Bloco 5"}>Bloco 5</option>
                                <option value={"Bloco 6"}>Bloco 6</option>
                                <option value={"Bloco 7"}>Bloco 7</option>
                                <option value={"Bloco 8"}>Bloco 8</option>
                                <option value={"Bloco 9"}>Bloco 9</option>
                                <option value={"Bloco 10"}>Bloco 10</option>
                            </select>
                        </div>
                        <div className="form-group" style={{ marginBottom: "30px", marginTop: "30px" }}>
                            <label htmlFor="exampleInputEmail1">SALA/LABORATÓRIO</label>
                            <select onChange={(e) => this.handleSala(e)} className="form-control" id="exampleSelect1">
                                <option value={null}>Selecionar Sala</option>

                                {this.state.listaDeSalas.map(salaAtual => (
                                    <option value={salaAtual.id}>{salaAtual.sala}</option>
                                ))}
                            </select>                        </div>

                        <div className="form-group" style={{ marginBottom: "30px", marginTop: "30px" }}>
                            <label htmlFor="exampleInputEmail1">LOCALIZAÇÃO</label>
                            <input style={{ border: "2px solid black" }} onChange={(e) => this.handleDetalhes(e)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Detalhes da Localização" />
                        </div>
                        <button onClick={(e) => this.cadastrar()} type="button" style={{ width: "100%" }} className="btn btn-outline-success">Cadastrar</button>


                        {this.state.mensagemErro == null ? false :
                            <div>
                                <br></br>
                                <div className="alert alert-dismissible alert-danger">

                                    <button onClick={(e) => this.fecharAlertas()} type="button" className="close" data-dismiss="alert">×</button>
                                    <strong></strong> <a href="#" className="alert-link">{this.state.mensagemErro}</a>
                                </div>
                            </div>
                        }

                        {this.state.mensagemSucesso ? <div>
                            <br></br>
                            <div className="alert alert-dismissible alert-success">
                                <button type="button" onClick={(e) => this.fecharAlertas()} className="close" data-dismiss="alert">×</button>
                                <strong>Centro de Custo Cadastrado!</strong><a href="#" className="alert-link">{this.state.mensagemSucesso}</a>.
</div>
                        </div>
                            : false}

                    </div>
                    <div className="col-lg-6" style={{ paddingLeft: "4%", paddingRight: "4%" }}>
                        <div className="scroll-box" style={{ maxWidth: '100%' }}>
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">Bloco/Clínica</th>
                                        <th scope="col">SALA/LABORATÓRIO</th>
                                        <th scope="col">LOCALIZAÇÃO</th>

                                        <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.listaDeCentros.map(fornecedorAtual => (
                                        <tr>
                                            <th scope="row">{fornecedorAtual.id}</th>
                                            <td>{fornecedorAtual.bloco}</td>
                                            <td>{fornecedorAtual.sala.sala}</td>
                                            <td>{fornecedorAtual.detalhes}</td>

                                            <td > <svg onClick={(e) => this.deletarCentroDeCusto(fornecedorAtual.id)} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                            </svg></td>
                                        </tr>
                                    ))}


                                </tbody>
                            </table>
                        </div>
                        <br></br>

                        {this.state.menssagemDeErroTabela == null ? false :
                            <div className="alert alert-dismissible alert-danger">
                                <button onClick={(e) => this.fecharAlertadeErro()} type="button" className="close" data-dismiss="alert">×</button>
                                <strong></strong> <a href="#" className="alert-link">{this.state.menssagemDeErroTabela}</a>
                            </div>
                        }

                    </div>

                </div>
            </div>
        )


    }


}
CadastroCentroDeCusto.contextType = AuthContext;
export default CadastroCentroDeCusto;