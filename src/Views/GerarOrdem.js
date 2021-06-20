import React from 'react';
import axios from 'axios'
import { Redirect } from 'react-router';
import GerarQr from '../Component/GerarQr'
import { AuthContext } from '../Main/ProvedorAutenticacao';

class GerarOrdem extends React.Component {

  state = {
    inventario: null,
    manutencoes: [],
    instalacao: false,
    menssagemDeSucesso:null

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

  cadastrar = () => {
    axios.post("https://engenharia-gestao-hospitalar.herokuapp.com/manutencao", {
      inventario:{
        id:this.props.match.params.id
      },
      descricaoDetalhadaServico: this.state.descricaoDetalhada,
      descricaoDetalhadaAprovador:null,
      descricaoDetalhadaExecutor:null,
      falhaEquipamento: this.state.falhaEquipamento,
      falhaAcessorio: this.state.falhaAcessorio,
      manutencaoPreventiva: this.state.manutencaoPreventiva,
      manutencaoCorretiva: this.state.manutencaoCorretiva,
      calibracao: this.state.calibracao,
      instalacao: this.state.instalacao,
      usuarioServico: this.context.user,
      treinamento:this.state.treinamento,
      segurancaEletrica: this.state.segurancaEletrica,
      usuarioAprovador: null,
      usuarioExecutor: null,
      aprovado: 0,
      manutencaoLocalRetiradaExterna: null,
      equipamentoOperanteRessalvaNao: null,
      tipoOs: null,

    }).then(response => {
      this.setState({
        mensagemSucesso: "ORDEM DE SERVIÇO ENVIADA COM SUCESSO!!"
      })
      this.consultarManutencoes()
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

  render() {


    return (<div style={{ paddingLeft: "10%", paddingBottom: "10%", paddingRight: "10%", paddingTop: "10%", backgroundColor: "#e0e0d1", marginTop: "-30px", height: "100", backgroundSize: "cover", }} >
      <div className="col-lg-12" style={{ marginTop: "30px", marginBottom: "30px" }}>

      </div>{this.state.inventario != null ?
        <div style={{ border: "1px solid #e0e0d1", borderRadius: "20px", backgroundColor: "white", }} >
          {<div className="col-lg-12" style={{ marginTop: "-50px" }}>

            <GerarQr idInventario={this.props.match.params.id} tamanho="100"></GerarQr>
          </div>}


          <div className="col-lg-12" style={{ paddingTop: "2%", marginBottom: '5%' }}>
            <h2>Ordem de Serviço : {this.state.inventario.modelo.equipamento.equipamento} {this.state.inventario.modelo.modelo} </h2>
          </div>


          <div className="col-lg-12" style={{ paddingTop: "2%", paddingBottom: "2%", paddingLeft: '10%', paddingRight: '10%' }}>
            <legend>Serviço Solicitado</legend>
            <hr style={{ color: 'gray' }}></hr>
            <div className="row">
              <div className="form-check espacamento-form">
                <input className="form-check-input" checked={this.state.instalacao} onChange={(e) => this.setState({ instalacao: e.target.checked })} type="checkbox" defaultValue id="flexCheckDefaultInstalacao" />
                <label className="form-check-label" htmlFor="flexCheckDefaultInstalacao">
                  Instalação
                </label>
              </div>

              <div className="form-check espacamento-form">
                <input className="form-check-input" checked={this.state.manutencaoPreventiva} onChange={(e) => this.setState({ manutencaoPreventiva: e.target.checked })} type="checkbox" defaultValue id="flexCheckDefaultManutencaoPreventiva" />
                <label className="form-check-label" htmlFor="flexCheckDefaultManutencaoPreventiva">
                  Manutenção Preventiva
                </label>
              </div>


              <div className="form-check espacamento-form">
                <input className="form-check-input" checked={this.state.treinamento} onChange={(e) => this.setState({ treinamento: e.target.checked })} type="checkbox" defaultValue id="flexCheckDefaultTreinamento" />
                <label className="form-check-label" htmlFor="flexCheckDefaultTreinamento">
                  Treinamento
                </label>
              </div>


              <div className="form-check espacamento-form">
                <input className="form-check-input" checked={this.state.manutencaoCorretiva} onChange={(e) => this.setState({ manutencaoCorretiva: e.target.checked })} type="checkbox" defaultValue id="flexCheckDefaultManutencaoCorretiva" />
                <label className="form-check-label" htmlFor="flexCheckDefaultManutencaoCorretiva">
                  Manutenção Corretiva
                </label>
              </div>


              <div className="form-check espacamento-form">
                <input className="form-check-input" checked={this.state.calibracao} onChange={(e) => this.setState({ calibracao: e.target.checked })} type="checkbox" defaultValue id="flexCheckDefaultCalibracao" />
                <label className="form-check-label" htmlFor="flexCheckDefaultCalibracao">
                  Calibração
                </label>
              </div>


              <div className="form-check espacamento-form">
                <input className="form-check-input" checked={this.state.segurancaEletrica} onChange={(e) => this.setState({ segurancaEletrica: e.target.checked })} type="checkbox" defaultValue id="flexCheckDefaultSegurancaEletrica" />
                <label className="form-check-label" htmlFor="flexCheckDefaultSegurancaEletrica">
                  Segurança Elétrica
                </label>
              </div>
            </div>

            <div style={{paddingTop: '10%'}}>
            <legend>Falha Apresentada</legend>
          <hr style={{ color: 'gray' }}></hr>
            <div className="row" style={{ paddingLeft:'35%'}}>
              <div className="form-check espacamento-form">
                <input className="form-check-input" checked={this.state.falhaEquipamento} onChange={(e) => this.setState({ falhaEquipamento: e.target.checked })} type="checkbox" defaultValue id="flexCheckDefaultEquipamento" />
                <label className="form-check-label" htmlFor="flexCheckDefaultEquipamento">
                  Equipamento
                </label>
              </div>

              <div className="form-check espacamento-form">
                <input className="form-check-input" checked={this.state.falhaAcessorio} onChange={(e) => this.setState({ falhaAcessorio: e.target.checked })} type="checkbox" defaultValue id="flexCheckDefaultFalhaAcessorio" />
                <label className="form-check-label" htmlFor="flexCheckDefaultFalhaAcessorio">
                  Acessório
                </label>
              </div>

              </div>

             
            </div>

            <div style={{paddingTop: '10%'}}>
              <legend>Descrição Detalhada</legend>
              <hr style={{ color: 'gray' }}></hr>
              <div className="form-group">
                <textarea rows="3" style={{ border: "1px solid black", borderRadius: '10px' }} type="email" onChange={(e) => this.setState({
                  descricaoDetalhada: e.target.value
                })} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Observaçoes" />
              </div>


<div style={{paddingTop: '8%'}}> 
              <button  type="button" onClick={()=> this.cadastrar()} className="btn btn-dark">Cadastrar Ordem</button>
</div>
            </div>
            <div>
              <br></br>
                {this.state.mensagemSucesso ? <div>

                    <div className="alert alert-dismissible alert-success">
                        <button type="button" onClick={(e) => this.fecharAlertas()} className="close" data-dismiss="alert">×</button>
                         Operação bem Sucedida! <a href="#" className="alert-link">{this.state.mensagemSucesso}</a>.
</div>
                </div>
                    : false}

                {this.state.mensagemErro ? <div>
                    <div className="alert alert-dismissible alert-danger">
                        <button type="button" onClick={(e) => this.fecharAlertas()} className="close" data-dismiss="alert">×</button>
                        <strong>Que pena!</strong> <a href="#" className="alert-link">Operação não sucedida!</a> {this.state.mensagemErro}
                    </div>
                </div> : false}

            </div>


            <div style={{paddingTop: '5%', paddingBottom:'10%'}}>
              <h2>ORDENS DE SERVIÇO</h2>
            </div>
          </div>
          <div style={{ paddingLeft: "5%", paddingRight: "5%", paddingBottom: "5%" }}>
            <table className="table table-active" style={{ borderRadius: "20px" }}>

              <tbody >
                <tr style={{ borderStyle: "hidden", }}>
                  <th scope="row">ID</th>
                  <td>DATA</td>
                  <td>STATUS</td>
                  <td>TIPO DE O.S</td>
                </tr>

                {this.state.manutencoes.map(manutencaoAtual => (
                  <tr style={{ borderStyle: "hidden" }}>
                    <th scope="row">{manutencaoAtual.id}</th>
                    <td>{manutencaoAtual.data}</td>
                    <td>{manutencaoAtual.aprovado == 0 ? "Pendente Aprovação": manutencaoAtual.aprovado == 1 ? "Pendente Manutenção" : manutencaoAtual.aprovado == "2"? "Finalizado": manutencaoAtual.aprovado == 3 ? "Cancelado": "Outro"  }</td>
                    <td>{manutencaoAtual.tipoOs}</td>

                  </tr>
                ))}

              </tbody>
            </table>
          </div>

        </div> : false}

    </div>
    );
  }

}

GerarOrdem.contextType = AuthContext;
export default GerarOrdem;