
import React from 'react';
import { AuthContext } from '../Main/ProvedorAutenticacao';
import { Redirect } from 'react-router';
import axios from 'axios'
class CadastroSala extends React.Component {
    state = {
        listaDeSala: [],
        equipamento: '',
        menssagemDeErro: null,
        menssagemSucesso: '',
        mensagemErro: ''
    }

    fecharAlertas = () => {
        console.log("entrou certo")
        this.setState({
            mensagemSucesso: '',
            menssagemDeErro: null
        })
    }

    
    componentDidMount() {
        this.listarSala()
    }

    listarSala = () => {

        console.log("entrou em listar Sala")
        axios.get(`https://engenharia-gestao-hospitalar.herokuapp.com/sala/${this.context.user}`)
            .then(response => {

                console.log("response:", response.data)

                this.setState({
                    listaDeSala: response.data
                })


            })
            .catch(erro => {
                console.log("A api não foi chamada com sucesso, deu erro")
            })
    }

    handleSala = (e) => {
        this.setState({
            sala: e.target.value
        })
        console.log("o valor da variavel sala:", this.state.sala)
    }

    deletarSala = (idRecebido) => {
        axios.post("https://engenharia-gestao-hospitalar.herokuapp.com/sala/deletar", {
            id: idRecebido
        }).then(response => {
            this.listarSala()

        }).catch(error => {
            this.setState({
                menssagemDeErro: "Erro ao deletar sala! Esta sendo usada por Centro de Custo."
              })


        })
    }

    cadastrarSala = (idRecebido) => {
        axios.post("https://engenharia-gestao-hospitalar.herokuapp.com/sala", {
            sala: this.state.sala,
            cnpj: this.context.user
        }).then(response => {
            this.listarSala()
            this.setState({
                mensagemSucesso: "parabens seu arrombado!!!"
            })

        }).catch(error => {
            this.setState({
                menssagemDeErro: error.response.data.error
            })

        })
    }


    render() {
        return (
            <div>
                <div className="col-lg-12" style={{ marginTop: "30px", marginBottom: "30px" }}>
                    <h2>CADASTRAR SALA</h2>
                    <hr></hr>

                </div>
                <div className="row">
                    <div className="col-lg-6" style={{ paddingLeft: "4%", paddingRight: "4%" }}>

                        <div className="form-group" style={{ marginBottom: "30px", marginTop: "30px" }}>
                            <label htmlFor="exampleInputEmail1">Sala</label>
                            <input style={{ border: "2px solid black" }} onChange={(e) => this.handleSala(e)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Sala" />
                        </div>
                        <button onClick={(e) => this.cadastrarSala()} type="button" style={{ width: "100%" }} className="btn btn-outline-success">Cadastrar</button>

                        {this.state.menssagemErro == null ? false :
                    <div className="alert alert-dismissible alert-danger">
                    <button onClick={(e) => this.fecharAlertadeErro()} type="button" className="close" data-dismiss="alert">×</button>
                                <strong></strong> <a href="#" className="alert-link">{this.state.menssagemErro}</a>
                            </div>
                        }

                        <div style={{ marginTop: "3%", marginBottom: "3%" }}>
                            {this.state.mensagemSucesso ? <div>

                                <div className="alert alert-dismissible alert-success">
                                    <button type="button" onClick={(e) => this.fecharAlertas()} className="close" data-dismiss="alert">×</button>
                                    <strong>Sala Cadastrada!</strong>  <a href="#" className="alert-link">{this.state.mensagemSucesso}</a>.
</div>
                            </div>
                                : false}

{this.state.menssagemDeErro == null? false :
          <div className="alert alert-dismissible alert-danger">
        <button onClick={(e) => this.fecharAlertas()} type="button" className="close" data-dismiss="alert">×</button>
        <strong></strong> <a href="#" className="alert-link">{this.state.menssagemDeErro}</a> 
      </div>
      }


                        </div>


                    </div>
                    <div className="col-lg-6" style={{ paddingLeft: "4%", paddingRight: "4%" }}>

                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Salas Cadastradas</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.listaDeSala.map(salaAtual => (
                                    <tr>
                                        <th scope="row">{salaAtual.id}</th>
                                        <td>{salaAtual.sala}</td>
                                        <td > <svg onClick={(e) => this.deletarSala(salaAtual.id)} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                        </svg></td>
                                    </tr>
                                ))}


                            </tbody>
                        </table>

                    </div>
                </div>
            </div>


        );
    }

}

CadastroSala.contextType = AuthContext;
export default CadastroSala;