import React from 'react';

import { Redirect } from 'react-router';
import axios from 'axios'
import { AuthContext } from '../Main/ProvedorAutenticacao';

class ListaInventario extends React.Component {
    state = {
        listaInventario:[],
    }

    componentDidMount() {
        this.listarInventario()

    }

    listarInventario = () => {
        axios.get(`https://engenharia-gestao-hospitalar.herokuapp.com/inventario/usuario/${this.context.user}`).then(response => {
            this.setState({
                listaInventario: response.data
            })
        }).catch(error => {

        })
    }
    redirecionar = (id) =>{
        
        this.props.history.push(`/pagina-inventario/${id}`)

    }

    deletarInventario = (idRecebido) =>{
      axios.post("https://engenharia-gestao-hospitalar.herokuapp.com/inventario/deletar", {
        id: idRecebido
      }).then(response=>{
        this.listarInventario()
  
      }).catch(error =>{
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
            <div className="row" style={{marginBottom:'100px'}}>
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
              {this.state.listaInventario.map(inventarioAtual => (
                <tr >
                  <th scope="row">{inventarioAtual.id}</th>
                  <td onClick = {(e) => this.redirecionar(inventarioAtual.id)}>{inventarioAtual.modelo.equipamento.equipamento}</td>
                  <td onClick = {(e) => this.redirecionar(inventarioAtual.id)}>{inventarioAtual.modelo.modelo}</td>
                  <td onClick = {(e) => this.redirecionar(inventarioAtual.id)}>{inventarioAtual.descricao}</td>
                  <td onClick = {(e) => this.redirecionar(inventarioAtual.id)}>{inventarioAtual.fornecedor.fornecedor}</td>
                  <td onClick = {(e) => this.redirecionar(inventarioAtual.id)}>{inventarioAtual.centroDeCusto.bloco} - {inventarioAtual.centroDeCusto.sala.sala}</td>
                  <td onClick = {(e) => this.redirecionar(inventarioAtual.id)}>{inventarioAtual.centroDeCusto.detalhes}</td>
                  <td onClick = {(e) => this.redirecionar(inventarioAtual.id)}>{inventarioAtual.numeroSerie}</td>
                  <td onClick = {(e) => this.redirecionar(inventarioAtual.id)}>{inventarioAtual.notaFiscal}</td>
                  <td onClick = {(e) => this.redirecionar(inventarioAtual.id)}>{inventarioAtual.valorCompra}</td>
                  <td onClick = {(e) => this.redirecionar(inventarioAtual.id)}>{inventarioAtual.anoAquisicao}</td>
                  <td onClick = {(e) => this.redirecionar(inventarioAtual.id)}>{inventarioAtual.inicioGarantia}</td>
                  <td onClick = {(e) => this.redirecionar(inventarioAtual.id)}>{inventarioAtual.quaisAcessorios}</td>
                  <td onClick = {(e) => this.redirecionar(inventarioAtual.id)}>{inventarioAtual.quaisGases}</td>
                  <td onClick = {(e) => this.redirecionar(inventarioAtual.id)}>{inventarioAtual.potencia}</td>
                  <td onClick = {(e) => this.redirecionar(inventarioAtual.id)}>{inventarioAtual.corrente}</td>
                  <td onClick = {(e) => this.redirecionar(inventarioAtual.id)}>{inventarioAtual.alimentacaoEletrica}</td>
                  <td onClick = {(e) => this.redirecionar(inventarioAtual.id)}>{inventarioAtual.altura}</td>
                  <td onClick = {(e) => this.redirecionar(inventarioAtual.id)}>{inventarioAtual.peso}</td>
                  <td onClick = {(e) => this.redirecionar(inventarioAtual.id)}>{inventarioAtual.largura}</td>
                  <td onClick = {(e) => this.redirecionar(inventarioAtual.id)}>{inventarioAtual.comprimento}</td>
                  <td>{inventarioAtual.observacao}</td>
                  <td > <svg onClick = {(e)=> this.deletarInventario(inventarioAtual.id)} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
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
