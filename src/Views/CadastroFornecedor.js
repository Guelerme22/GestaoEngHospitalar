import React from 'react';

import { Redirect } from 'react-router';
import axios from 'axios';
class CadastrarFornecedor extends React.Component {

  state = {
    fornecedor: '',
    //variavel
    email:'',
    endereco:'',
    listaDeFornecedores: [],
    menssagemDeErro:null
  }

  //funcao que é chamada quando o programa inicia
  componentDidMount() {
    this.listarFornecedores()
  }

  listarFornecedores = () => {

    //chamada da api
    console.log("entrou em listar fornecedores")
    axios.get("https://engenharia-gestao-hospitalar.herokuapp.com/fornecedor")
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

  handleEmail = (e) => {
    console.log("entrou no handleemail")
    this.setState({
      email: e.target.value
    })
  }

  handleEndereco = (e) => {
    console.log("entrou no handleendereço")
    this.setState({
      endereco: e.target.value
    })
  }

  fecharAlertadeErro = () =>{
    this.setState({
      menssagemDeErro: null
    })
  }

  cadastrar = () => {
    console.log("botão clicado")

    axios.post("https://engenharia-gestao-hospitalar.herokuapp.com/fornecedor", {
      fornecedor: this.state.fornecedor,
      email: this.state.email,
      endereco: this.state.endereco

    }).then(response => {
      console.log("A api foi chamada com sucesso")
      this.listarFornecedores()
    }).catch(erro => {
      console.log("A api não foi chamada com sucesso, deu erro")
      this.setState({
        menssagemDeErro:"ocorreu erro no cadastramento"       
      })

    })
    console.log("saiuu")

  }

  deletarFornecedor = (idRecebido) =>{
    axios.post("https://engenharia-gestao-hospitalar.herokuapp.com/fornecedor/deletar", {
      id: idRecebido
    }).then(response=>{
      this.listarFornecedores()

    }).catch(error =>{
      this.setState({
        menssagemDeErro: error.response.data.error
      })

    })
  }


  render() {


    return (<div>

      <div className="col-lg-12" style={{ marginTop: "30px", marginBottom: "30px" }}>
        <h2>CADASTRAR FORNECEDOR</h2>
        <hr></hr>

      </div>
      <div className="row">
        <div className="col-lg-5" style={{ paddingLeft: "4%", paddingRight: "4%" }}>

          <div className="form-group" style={{ marginBottom: "30px", marginTop: "30px" }}>
            <label htmlFor="exampleInputEmail1">Fornecedor</label>
            <input style={{border:"2px solid black"}} onChange={(e) => this.handleFornecedor(e)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Fornecedor" />
          </div>

          <div className="form-group" style={{ marginBottom: "30px", marginTop: "30px" }}>
            <label htmlFor="exampleInputEmail1">Endereço</label>
            <input style={{border:"2px solid black"}} onChange={(e) => this.handleEndereco(e)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Endereço" />
          </div>

          <div className="form-group" style={{ marginBottom: "30px", marginTop: "30px" }}>
            <label htmlFor="exampleInputEmail1">Email</label>
            <input style={{border:"2px solid black"}} onChange={(e) => this.handleEmail(e)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
          </div>

          <div className="col-lg-5" style={{ paddingLeft: "4%", paddingRight: "4%" }}>
          <div className="row" style={{ paddingLeft: "4%", paddingRight: "4%" }}>
          <div className="form-group" style={{ marginBottom: "20px", marginTop: "20px" }}>
            <label htmlFor="exampleInputEmail1">Telefone</label>
            <input style={{border:"2px solid black"}} onChange={(e) => this.handleTelefone(e)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Telefone" />
          </div>

          <div className="form-group" style={{ marginBottom: "20px", marginTop: "20px" }}>
            <label htmlFor="exampleInputEmail1">WhatsApp</label>
            <input style={{border:"2px solid black"}} onChange={(e) => this.handleWhatsApp(e)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="WhatsApp" />
          </div>

          <div className="form-group" style={{ marginBottom: "20px", marginTop: "20px" }}>
            <label htmlFor="exampleInputEmail1">Pessoa de Contato</label>
            <input style={{border:"2px solid black"}} onChange={(e) => this.handlePessoa(e)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Pessoa de Contato" />
          </div>
          </div>
          </div>


          <button onClick={(e) => this.cadastrar()} type="button" style={{ width: "100%" }} className="btn btn-outline-success">Cadastrar</button>
          

        </div>
        <div className="col-lg-6" style={{ paddingLeft: "4%", paddingRight: "4%" }}>

          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Fornecedores Cadastrados</th>
                <th scope="col">Endereços Cadastrados</th>
                <th scope="col">Email Cadastrado</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {this.state.listaDeFornecedores.map(fornecedorAtual => (
                <tr>
                  <th scope="row">{fornecedorAtual.id}</th>
                  <td>{fornecedorAtual.fornecedor}</td>
                  <td>{fornecedorAtual.endereco}</td>
                  <td>{fornecedorAtual.email}</td>
                  <td > <svg onClick = {(e)=> this.deletarFornecedor(fornecedorAtual.id)} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg></td>
                </tr>
              ))}


            </tbody>
          </table>

          {this.state.menssagemDeErro == null? false :
          <div className="alert alert-dismissible alert-danger">
        <button onClick={(e) => this.fecharAlertadeErro()} type="button" className="close" data-dismiss="alert">×</button>
        <strong></strong> <a href="#" className="alert-link">{this.state.menssagemDeErro}</a> 
      </div>
      }

          
        </div>
      </div>
    </div>

    );
  }

}

export default CadastrarFornecedor;