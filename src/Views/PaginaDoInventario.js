import React from 'react';
import axios from 'axios'
import { Redirect } from 'react-router';
import GerarQr from '../Component/GerarQr'
class PaginaDoInventario extends React.Component {

  state = {
    inventario :null,
    manutencoes: [],

  }
  componentDidMount() {
    this.consutarInventario()
    this.consultarManutencoes()

  }
  consultarManutencoes = () => {
    axios.get(`https://engenharia-gestao-hospitalar.herokuapp.com/manutencao/inventario/${this.props.match.params.id}`).then(response => {
      this.setState({
        manutencoes: response.data,
      })
    }).catch(error => {

    })
  }

  consutarInventario = () => {
    axios.get(`https://engenharia-gestao-hospitalar.herokuapp.com/inventario/${this.props.match.params.id}`).then(response => {
      this.setState({
        inventario: response.data,
      })
    }).catch(error => {

    })
  }

  redirecionar = () =>{
    this.props.history.push(`/gerar-ordem/${this.props.match.params.id}`)

  }

  render() {


    return (<div style={{paddingLeft: "10%", paddingBottom:"10%", paddingRight:"10%" , paddingTop:"10%", backgroundColor:"#e0e0d1" , marginTop:"-30px", height:"100" , backgroundSize:"cover", }} >
      <div className="col-lg-12" style={{ marginTop: "30px", marginBottom: "30px" }}>

      </div>{this.state.inventario != null ?
      <div  style={{ border:"1px solid #e0e0d1" ,  borderRadius:"20px", backgroundColor:"white",  }} >
        { <div className="col-lg-12" style={{marginTop:"-100px"}}>

          <GerarQr idInventario={this.props.match.params.id}  tamanho="200"></GerarQr>
        </div> } 
        <div style={{paddingTop:"2%"}}>
        <button type="button" className="btn btn-dark">IMPRIMIR QR-CODE</button>
        <button type="button" onClick={()=> this.redirecionar()} className="btn btn-dark">GERAR ORDEM</button>

        </div>
        
        <div className="col-lg-12" style={{paddingTop:"2%"}}>
          <h2>{this.state.inventario.modelo.equipamento.equipamento} {this.state.inventario.modelo.modelo} </h2>
          </div>
        <div className="col-lg-12>" style={{paddingTop:"2%", paddingBottom:"2%"}}>
          {this.state.inventario.descricao}
   
          </div> 
          <div style={{paddingLeft:"5%"}}>
          <ul>
          <div className = "row">
          <div className="col-lg-6" style={{paddingBottom:"2%"}}>
          
            {this.state.inventario.centroDeCusto.bloco}, {this.state.inventario.centroDeCusto.sala.sala}, {this.state.inventario.centroDeCusto.detalhes ? <li>Centro de Custo: {this.state.inventario.centroDeCusto.bloco}, {this.state.inventario.centroDeCusto.sala.sala}, {this.state.inventario.centroDeCusto.detalhes}</li>:false}

            {this.state.inventario.observacao ? <li>Observações: {this.state.inventario.observacao}</li>:false}

            {this.state.inventario.modelo.modelo ? <li>Modelo / Marca:  {this.state.inventario.modelo.modelo}</li>:false}

            {this.state.inventario.fornecedor.fornecedor ?  <li>Fornecedor: {this.state.inventario.fornecedor.fornecedor}</li>:false}

            {this.state.inventario.numeroSerie ? <li>Numero de Série: {this.state.inventario.numeroSerie}</li>:false}

            {this.state.inventario.notaFiscal ? <li>Nota Fiscal: {this.state.inventario.notaFiscal}</li>:false}

            {this.state.inventario.valorCompra ? <li>Valor da Compra: {this.state.inventario.valorCompra}</li>:false}

            {this.state.inventario.anoAquisicao ? <li>Data de Aquisição: {this.state.inventario.anoAquisicao}</li>:false}
           </div>
           <div className="col-lg-6">
            {this.state.inventario.inicioGarantia ? <li>Inicio da Garantia: {this.state.inventario.inicioGarantia}</li>:false}

            {this.state.inventario.potencia ? <li>Potencia: {this.state.inventario.potencia}</li>:false}

            {this.state.inventario.altura ? <li>Altura: {this.state.inventario.altura}</li>:false}

            {this.state.inventario.largura ? <li>Largura: {this.state.inventario.largura}</li>:false}

            {this.state.inventario.comprimento ? <li>Comprimento: {this.state.inventario.comprimento}</li>:false}

            {this.state.inventario.alimentacaoHidraulica ? <li>Alimentação Hidraulica: {this.state.inventario.alimentacaoHidraulica}</li>:false}

            {this.state.inventario.quaisGases ? <li>Gases: {this.state.inventario.quaisGases}</li>:false}

            {this.state.inventario.quaisAcessorios ? <li>Acessorios: {this.state.inventario.quaisAcessorios}</li>:false}
          </div>
          </div>
            




          </ul>
          
        
        <div style={{paddingBottom:"1%"}}>
          <h2>MANUTENÇÕES</h2>
        </div>
        </div>
        <div style={{paddingLeft:"5%", paddingRight:"5%", paddingBottom:"5%"}}>
         <table className="table table-active" style={{ borderRadius:"20px"}}>
        
        <tbody >
          <tr style={{borderStyle:"hidden",}}>
            <th scope="row">ID</th>
            <td>FUNCIONÁRIO</td>
            <td>DATA</td>
            <td>TIPO</td>
            <td>OBSERVAÇÕES</td>
            <td>EDITAR</td>
          </tr>
  
          {this.state.manutencoes.map(manutencaoAtual => (
        <tr style={{borderStyle:"hidden"}}>
        <th scope="row">{manutencaoAtual.id}</th>
        <td>{"fgg"}</td>
        <td>{manutencaoAtual.data}</td>
        <td>{manutencaoAtual.tipoManutencao}</td>
        <td>{manutencaoAtual.observacoes}</td>
        <td><button  type="button" onClick={()=>this.props.history.push(`/aprovar-ordem/${manutencaoAtual.id}`)} className="btn btn-dark">Aprovar</button>
</td>
      </tr>              
      ))}
          
        </tbody>
      </table>
      </div>
        
      </div>:false}
      
    </div>
    );
  }

}

export default PaginaDoInventario;