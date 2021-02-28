import React from 'react';

import { Redirect } from 'react-router';
import axios from 'axios'
class CadastroModelo extends React.Component {
    state = {
        listaDeMaquinas: [],
        idMaquinaSelecionada: 0,
        modelo: '',
        listaDeModelos: []

    }
    listarModelo = () => {
        axios.get("http://localhost:8080/modelo")
            .then(response => {
                this.setState({
                    listaDeModelos: response.data
                })

            })
            .catch(error => {

            })
    }
    deletarModelo = (idRecebido) =>{
        axios.post("http://localhost:8080/modelo/deletar", {
          id: idRecebido
        }).then(response=>{
          this.listarModelo()
    
        }).catch(error =>{
    
        })
      }
    cadastrar = () => {
        axios.post("http://localhost:8080/modelo", {
            modelo: this.state.modelo,
            maquina: {
                id: this.state.idMaquinaSelecionada
            }
        })
            .then(response => {
                this.listarModelo()

            })
            .catch(error => {

            })
    }


    handleModelo = (e) => {
        console.log("a maquina elecionada tem ID", e.target.value)
        this.setState({
            modelo: e.target.value
        })
    }

    componentDidMount() {
        this.listarMaquinas()
        this.listarModelo()
    }
    handleMaquina = (e) => {
        console.log("a maquina elecionada tem ID", e.target.value)
        this.setState({
            idMaquinaSelecionada: e.target.value
        })
    }
    listarMaquinas = () => {
        axios.get("http://localhost:8080/maquina")
            .then(response => {
                console.log("a resposta é", response.data)
                this.setState({
                    listaDeMaquinas: response.data
                })
            })
            .catch(error => {

            })
    }
    render() {
        return (
            <div>

                <div className="col-lg-12" style={{ marginTop: "30px", marginBottom: "30px" }}>
                    <h1>CADASTRAR MODELO</h1>
                </div>
                <div className="row">
                    <div className="col-lg-6" style={{ paddingLeft: "4%", paddingRight: "4%" }}>
                        <div className="form-group">
                            <label htmlFor="exampleSelect1">SELECIONE A MAQUINA</label>
                            <select onChange={(e) => this.handleMaquina(e)} className="form-control" id="exampleSelect1">
                                <option value={null}>Selecione a Maquina</option>

                                {this.state.listaDeMaquinas.map(maquinaAtual => (
                                    <option value={maquinaAtual.id}>{maquinaAtual.maquina}</option>
                                ))}
                            </select>
                        </div>
                        <div className="form-group" style={{ marginBottom: "30px", marginTop: "30px" }}>
                            <label htmlFor="exampleInputEmail1">Modelo</label>
                            <input onChange={(e) => this.handleModelo(e)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Modelo" />
                        </div>
                        <button onClick={(e) => this.cadastrar()} type="button" style={{ width: "100%" }} className="btn btn-outline-success">Cadastrar</button>

                    </div>
                    <div className="col-lg-6" style={{ paddingLeft: "4%", paddingRight: "4%" }}>

                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Modelo Cadastrados</th>
                                    <th scope="col">Maquina associada</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.listaDeModelos.map(modeloAtual => (
                                    <tr>
                                        <th scope="row">{modeloAtual.id}</th>
                                        <td>{modeloAtual.modelo}</td>
                                        <td>{modeloAtual.maquina.maquina}</td>
                                        <td > <svg onClick={(e) => this.deletarModelo(modeloAtual.id)} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
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
        )


    }


}
export default CadastroModelo