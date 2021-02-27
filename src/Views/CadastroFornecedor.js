import React from 'react';

import { Redirect } from 'react-router';
import axios from 'axios';
class CadastrarFornecedor extends React.Component {

  state = {
    fornecedor: '',
    //variavel
    listaDeFornecedores: []
  }

  //funcao que é chamada quando o programa inicia
  componentDidMount() {
    this.listarFornecedores()
  }

  listarFornecedores = () => {

    //chamada da api
    console.log("entrou em listar fornecedores")
    axios.get("http://localhost:8080/fornecedor")
      .then(response => {

          console.log("response:", response.data)

          this.setState({
            listaDeFornecedores: response.data
          })


      })
      .catch(erro => {
        console.log("A api não foi chamada com sucesso, deu erro")
      })
  }
  handleFornecedor = (e) => {
    this.setState({
      fornecedor: e.target.value
    })
    console.log("o valor da variavel fornecer:", this.state.fornecedor)
  }

  cadastrar = () => {
    console.log("botão clicado")

    axios.post("http://localhost:8080/fornecedor", {
      fornecedor: this.state.fornecedor

    }).then(response => {
      console.log("A api foi chamada com sucesso")
      this.listarFornecedores()
    }).catch(erro => {
      console.log("A api não foi chamada com sucesso, deu erro")

    })
    console.log("saiuu")

  }


  render() {


    return (<div>

      <div className="col-lg-12" style={{ marginTop: "30px", marginBottom: "30px" }}>
        <h1>CADASTRAR FORNECEDOR</h1>
      </div>
      <div className="row">
        <div className="col-lg-6" style={{ paddingLeft: "4%", paddingRight: "4%" }}>

          <div className="form-group" style={{ marginBottom: "30px", marginTop: "30px" }}>
            <label htmlFor="exampleInputEmail1">Fornecedor</label>
            <input onChange={(e) => this.handleFornecedor(e)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Fornecedor" />
          </div>
          <button onClick={(e) => this.cadastrar()} type="button" style={{ width: "100%" }} className="btn btn-outline-success">Cadastrar</button>

        </div>
        <div className="col-lg-6" style={{ paddingLeft: "4%", paddingRight: "4%" }}>

          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Fornecedores Cadastrados</th>
              </tr>
            </thead>
            <tbody>
              {this.state.listaDeFornecedores.map(fornecedorAtual => (
                <tr>
                  <th scope="row">{fornecedorAtual.id}</th>
                  <td>{fornecedorAtual.fornecedor}</td>
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

export default CadastrarFornecedor;