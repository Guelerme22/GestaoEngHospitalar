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
        axios.get("https://engenharia-gestao-hospitalar.herokuapp.com/modelo")
            .then(response => {
                this.setState({
                    listaDeModelos: response.data
                })

            })
            .catch(error => {

            })
    }
    deletarModelo = (idRecebido) =>{
        axios.post("https://engenharia-gestao-hospitalar.herokuapp.com/modelo/deletar", {
          id: idRecebido
        }).then(response=>{
          this.listarModelo()
    
        }).catch(error =>{
    
        })
      }
    cadastrar = () => {
        axios.post("https://engenharia-gestao-hospitalar.herokuapp.com/modelo", {
            modelo: this.state.modelo,
            equipamento: {
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
        console.log("a equipamento elecionada tem ID", e.target.value)
        this.setState({
            modelo: e.target.value
        })
    }

    componentDidMount() {
        this.listarMaquinas()
        this.listarModelo()
    }
    handleMaquina = (e) => {
        console.log("a equipamento elecionada tem ID", e.target.value)
        this.setState({
            idMaquinaSelecionada: e.target.value
        })
    }
    listarMaquinas = () => {
        axios.get("https://engenharia-gestao-hospitalar.herokuapp.com/equipamento")
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
                    <h2>CADASTRAR CENTRO DE CUSTO</h2>
                    <hr></hr>

                </div>
                <div className="row">
                    <div className="col-lg-6" style={{ paddingLeft: "4%", paddingRight: "4%" }}>
                        <div className="form-group">
                            <label htmlFor="exampleSelect1">BLOCO/CLINICA</label>
                            <select onChange={(e) => this.handleMaquina(e)} className="form-control" id="exampleSelect1">
                                <option value={null}>Bloco</option>

                                {this.state.listaDeMaquinas.map(maquinaAtual => (
                                    <option value={maquinaAtual.id}>{maquinaAtual.equipamento}</option>
                                ))}
                            </select>
                        </div>
                        <div className="form-group" style={{ marginBottom: "30px", marginTop: "30px" }}>
                            <label htmlFor="exampleInputEmail1">SALA (LABORATÓRIO)</label>
                            <input style={{border:"2px solid black"}} onChange={(e) => this.handleModelo(e)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="centro de custo" />
                        </div>

                        <div className="form-group" style={{ marginBottom: "30px", marginTop: "30px" }}>
                            <label htmlFor="exampleInputEmail1">LOCALIZAÇÃO</label>
                            <input style={{border:"2px solid black"}} onChange={(e) => this.handleModelo(e)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="centro de custo" />
                        </div>
                        <button onClick={(e) => this.cadastrar()} type="button" style={{ width: "100%" }} className="btn btn-outline-success">Cadastrar</button>

                    </div>
                    
                </div>
            </div>
        )


    }


}
export default CadastroModelo