import React from 'react';

import { Redirect } from 'react-router';
import axios from 'axios'
class CadastroEquipamento extends React.Component {
  state = {
    equipamento: '',
    listaDeMaquinas: [],
    menssagemDeErro:''
  }

  componentDidMount() {
    this.listarMaquinas()
  }

  listarMaquinas = () => {

    console.log("entrou em listar equipamento")
    axios.get("https://engenharia-gestao-hospitalar.herokuapp.com/equipamento")
      .then(response => {

          console.log("response:", response.data)

          this.setState({
            listaDeMaquinas: response.data
          })


      })
      .catch(erro => {
        console.log("A api não foi chamada com sucesso, deu erro")
      })
  }
  handleMaquinas = (e) => {
    this.setState({
      maquinas: e.target.value
    })
    console.log("o valor da variavel fornecer:", this.state.maquinas)
  }

  cadastrar = () => {
    console.log("botão clicado")

    axios.post("https://engenharia-gestao-hospitalar.herokuapp.com/equipamento", {
      equipamento: this.state.maquinas

    }).then(response => {
      console.log("A api foi chamada com sucesso")
      this.listarMaquinas()
    }).catch(erro => {
      console.log("A api não foi chamada com sucesso, deu erro")
      this.setState({
        menssagemDeErro:"ocorreu erro no cadastramento"       
      })

    })
    console.log("saiuu")

  }

  deletarMaquinas = (idRecebido) =>{
    axios.post("https://engenharia-gestao-hospitalar.herokuapp.com/equipamento/deletar", {
      id: idRecebido
    }).then(response=>{
      this.listarMaquinas()

    }).catch(error =>{
      this.setState({
        menssagemDeErro: "Erro ao deletar máquina! Esta sendo usada por modelos e equipamentos."
      })

    })
  }

  render() {


    return (
    <div>
     <div className="col-lg-12" style={{ marginTop: "30px", marginBottom: "30px" }}>
        <h2>CADASTRAR EQUIPAMENTO</h2>
        <hr></hr>

      </div>
      <div className="row">
        <div className="col-lg-6" style={{ paddingLeft: "4%", paddingRight: "4%" }}>

          <div className="form-group" style={{ marginBottom: "30px", marginTop: "30px" }}>
            <label htmlFor="exampleInputEmail1">Equipamento</label>
            <input style={{border:"2px solid black"}} onChange={(e) => this.handleMaquinas(e)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Equipamentos" />
          </div>
          <button onClick={(e) => this.cadastrar()} type="button" style={{ width: "100%" }} className="btn btn-outline-success">Cadastrar</button>

     
    </div>
    <div className="col-lg-6" style={{ paddingLeft: "4%", paddingRight: "4%" }}>

<table className="table table-hover">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Equipamentos Cadastrados</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    {this.state.listaDeMaquinas.map(maquinaAtual => (
      <tr>
        <th scope="row">{maquinaAtual.id}</th>
        <td>{maquinaAtual.equipamento}</td>
        <td > <svg onClick = {(e)=> this.deletarMaquinas(maquinaAtual.id)} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
<path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
<path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg></td>
      </tr>
    ))}


  </tbody>
</table>
<br>
</br><p style={{color: "red"}}>
{this.state.menssagemDeErro}
</p>
    </div>
    </div>
    </div>


    );
  }

}

export default CadastroEquipamento;