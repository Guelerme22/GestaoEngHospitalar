import React from 'react';

import { Redirect } from 'react-router';
import axios from 'axios'
import { AuthContext } from '../Main/ProvedorAutenticacao';

class ListaInventario extends React.Component {
  state = {
    listaInventario: [],
    listaInventarioFiltrado: [],
    id :'',
    equipamentoFilter:'',
    modeloFilter:'',
    fornecedorFilter:'',
    centroFilter:'',
    detalheFilter:'',
    numeroFilter:'',

  }

  componentDidMount() {
    this.listarInventario()

  }

 

  listarInventario = () => {
    axios.get(`https://engenharia-gestao-hospitalar.herokuapp.com/inventario/usuario/${this.context.user}`).then(response => {
      this.setState({
        listaInventario: response.data,
        listaInventarioFiltrado:response.data
      })
    }).catch(error => {

    })
  }
  redirecionar = (id) => {

    this.props.history.push(`/pagina-inventario/${id}`)



  }
  handleId (e){
    this.setState({
      id: e.target.value
    })
  }
  handleEquipamentoFilter (e){
    this.setState({
      equipamentoFilter: e.target.value
    })
  }

  handleModeloFilter (e){
    this.setState({
      modeloFilter: e.target.value
    })
  }

  handleFornecedorFilter (e){
    this.setState({
      fornecedorFilter: e.target.value
    })
  }

  handleCentroFilter (e){
    this.setState({
      centroFilter: e.target.value
    })
  }

  handleDetalheFilter (e){
    this.setState({
      detalheFilter: e.target.value
    })
  }

  handleNumeroFilter (e){
    this.setState({
      numeroFilter: e.target.value
    })
  }

  filtrar = () =>{
    console.log("entrouem filtrar")
    var listaPosFiltro= this.state.listaInventario;

    if (this.state.id != null && this.state.id != ''){
    listaPosFiltro = this.state.listaInventario.filter(item => (item.id == this.state.id))
    }

    if (this.state.equipamentoFilter != null && this.state.equipamentoFilter != ''){
      listaPosFiltro = listaPosFiltro.filter(item => (item.modelo.equipamento.equipamento.toUpperCase().includes(this.state.equipamentoFilter.toUpperCase())))
    }

    if (this.state.modeloFilter != null && this.state.modeloFilter != ''){
      listaPosFiltro = listaPosFiltro.filter(item => (item.modelo.modelo.toUpperCase().includes(this.state.modeloFilter.toUpperCase())))
    }

    if (this.state.fornecedorFilter != null && this.state.fornecedorFilter != ''){
      listaPosFiltro = listaPosFiltro.filter(item => (item.fornecedor.fornecedor.toUpperCase().includes(this.state.fornecedorFilter.toUpperCase())))
    }

    if (this.state.centroFilter != null && this.state.centroFilter != ''){
      listaPosFiltro = listaPosFiltro.filter(item => (item.centroDeCusto.bloco.toUpperCase().includes(this.state.centroFilter.toUpperCase())))
    }

    if (this.state.detalheFilter != null && this.state.detalheFilter != ''){
      listaPosFiltro = listaPosFiltro.filter(item => (item.centroDeCusto.detalhes.toUpperCase().includes(this.state.detalheFilter.toUpperCase())))
    }

    if (this.state.numeroFilter != null && this.state.numeroFilter != ''){
      listaPosFiltro = listaPosFiltro.filter(item => (item.numeroSerie.toUpperCase().includes(this.state.numeroFilter.toUpperCase())))
    }

    this.setState({
      listaInventarioFiltrado: listaPosFiltro
    })

  }

  deletarInventario = (idRecebido) => {
    axios.post("https://engenharia-gestao-hospitalar.herokuapp.com/inventario/deletar", {
      id: idRecebido
    }).then(response => {
      this.listarInventario()

    }).catch(error => {
      this.setState({
        menssagemDeErro: error.response.data.error
      })

    })
  }


  render() {
    return (<div>
      <div className="col-lg-12" style={{ marginTop: "30px", marginBottom: "30px" }}>
        <h2>SEU INVENTÁRIO</h2>
        <hr></hr>

      </div>
      <div className="row" style={{ marginBottom: '100px' }}>
        <div className="col-lg-12" style={{ paddingLeft: "4%", paddingRight: "4%" }}>

          <div className="scroll-box" style={{ maxWidth: '100%' }}>
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Equipamento</th>
                  <th scope="col">Modelo</th>
                  <th scope="col">Descrição Simplificada</th>
                  <th scope="col">Fornecedor</th>
                  <th scope="col">Centro De Custo</th>
                  <th scope="col">Detalhe (CC)</th>
                  <th scope="col">Numero de Serie</th>
                  <th scope="col">Nota Fiscal</th>
                  <th scope="col">Valor da Compra</th>
                  <th scope="col">Data da Aquisição</th>
                  <th scope="col">Inicio da Garantia</th>
                  <th scope="col">Acessorios</th>
                  <th scope="col">Gases</th>
                  <th scope="col">Potencia</th>
                  <th scope="col">Corrente</th>
                  <th scope="col">Alimentação Eletrica</th>
                  <th scope="col">Altura</th>
                  <th scope="col">Peso</th>
                  <th scope="col">Largura</th>
                  <th scope="col">Comprimento</th>
                  <th scope="col">Observaçoes</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                <tr >
                <th scope="row"><input type="text" onChange ={(e) => this.handleId(e)} value = {this.state.id} className= "input-search"  onKeyPress={event => {
                if (event.key === 'Enter') {
                  this.filtrar()
                }
              }}placeholder="ID"></input></th>

             <th scope="row"><input type="text" onChange ={(e) => this.handleEquipamentoFilter(e)} value = {this.state.equipamentoFilter} className= "input-search"  onKeyPress={event => {
                if (event.key === 'Enter') {
                  this.filtrar()
                }
              }}placeholder="Equipamento"></input></th> 

              <th scope="row"><input type="text" onChange ={(e) => this.handleModeloFilter(e)} value = {this.state.modeloFilter} className= "input-search"  onKeyPress={event => {
                if (event.key === 'Enter') {
                  this.filtrar()
                }
              }}placeholder="Modelo"></input></th>

              <td></td>

              <th scope="row"><input type="text" onChange ={(e) => this.handleFornecedorFilter(e)} value = {this.state.fornecedorFilter} className= "input-search"  onKeyPress={event => {
                if (event.key === 'Enter') {
                  this.filtrar()
                }
              }}placeholder="Fornecedor"></input></th>

               <th scope="row"><input type="text" onChange ={(e) => this.handleCentroFilter(e)} value = {this.state.centroFilter} className= "input-search"  onKeyPress={event => {
                if (event.key === 'Enter') {
                  this.filtrar()
                }
              }}placeholder="BLOCO"></input></th>

               <th scope="row"><input type="text" onChange ={(e) => this.handleDetalheFilter(e)} value = {this.state.detalheFilter} className= "input-search"  onKeyPress={event => {
                if (event.key === 'Enter') {
                  this.filtrar()
                }
              }}placeholder="Detalhe (CC)"></input></th>

              <th scope="row"><input type="text" onChange ={(e) => this.handleNumeroFilter(e)} value = {this.state.numeroFilter} className= "input-search"  onKeyPress={event => {
                if (event.key === 'Enter') {
                  this.filtrar()
                }
              }}placeholder="Numero de Serie"></input></th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                {this.state.listaInventarioFiltrado.map(inventarioAtual => (
                  <tr >
                    <th scope="row">{inventarioAtual.id}</th>
                    <td onClick={(e) => this.redirecionar(inventarioAtual.id)}>{inventarioAtual.modelo.equipamento.equipamento}</td>
                    <td onClick={(e) => this.redirecionar(inventarioAtual.id)}>{inventarioAtual.modelo.modelo}</td>
                    <td onClick={(e) => this.redirecionar(inventarioAtual.id)}>{inventarioAtual.descricao}</td>
                    <td onClick={(e) => this.redirecionar(inventarioAtual.id)}>{inventarioAtual.fornecedor.fornecedor}</td>
                    <td onClick={(e) => this.redirecionar(inventarioAtual.id)}>{inventarioAtual.centroDeCusto.bloco} - {inventarioAtual.centroDeCusto.sala.sala}</td>
                    <td onClick={(e) => this.redirecionar(inventarioAtual.id)}>{inventarioAtual.centroDeCusto.detalhes}</td>
                    <td onClick={(e) => this.redirecionar(inventarioAtual.id)}>{inventarioAtual.numeroSerie}</td>
                    <td onClick={(e) => this.redirecionar(inventarioAtual.id)}>{inventarioAtual.notaFiscal}</td>
                    <td onClick={(e) => this.redirecionar(inventarioAtual.id)}>{inventarioAtual.valorCompra}</td>
                    <td onClick={(e) => this.redirecionar(inventarioAtual.id)}>{inventarioAtual.anoAquisicao}</td>
                    <td onClick={(e) => this.redirecionar(inventarioAtual.id)}>{inventarioAtual.inicioGarantia}</td>
                    <td onClick={(e) => this.redirecionar(inventarioAtual.id)}>{inventarioAtual.quaisAcessorios}</td>
                    <td onClick={(e) => this.redirecionar(inventarioAtual.id)}>{inventarioAtual.quaisGases}</td>
                    <td onClick={(e) => this.redirecionar(inventarioAtual.id)}>{inventarioAtual.potencia}</td>
                    <td onClick={(e) => this.redirecionar(inventarioAtual.id)}>{inventarioAtual.corrente}</td>
                    <td onClick={(e) => this.redirecionar(inventarioAtual.id)}>{inventarioAtual.alimentacaoEletrica}</td>
                    <td onClick={(e) => this.redirecionar(inventarioAtual.id)}>{inventarioAtual.altura}</td>
                    <td onClick={(e) => this.redirecionar(inventarioAtual.id)}>{inventarioAtual.peso}</td>
                    <td onClick={(e) => this.redirecionar(inventarioAtual.id)}>{inventarioAtual.largura}</td>
                    <td onClick={(e) => this.redirecionar(inventarioAtual.id)}>{inventarioAtual.comprimento}</td>
                    <td>{inventarioAtual.observacao}</td>
                    <td > <svg onClick={(e) => this.deletarInventario(inventarioAtual.id)} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
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
    </div>






    )


  }


}
ListaInventario.contextType = AuthContext;
export default ListaInventario;
