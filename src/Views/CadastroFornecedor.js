import React from 'react';

import { Redirect } from 'react-router';
import axios from 'axios';
class CadastrarFornecedor extends React.Component {

  state = {
    fornecedor: ''
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
      <div className="col-lg-12" style={{ paddingLeft: "40%", paddingRight: "40%" }}>

        <div className="form-group" style={{ marginBottom: "30px", marginTop: "30px" }}>
          <label htmlFor="exampleInputEmail1">Fornecedor</label>
          <input onChange={(e) => this.handleFornecedor(e)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Fornecedor" />
        </div>
        <button onClick={(e) => this.cadastrar()} type="button" style={{ width: "100%" }} className="btn btn-outline-success">Cadastrar</button>

      </div>



    </div>

    );
  }

}

export default CadastrarFornecedor;