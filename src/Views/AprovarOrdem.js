import React from 'react';
import axios from 'axios'
import { Redirect } from 'react-router';
import GerarQr from '../Component/GerarQr'
import { AuthContext } from '../Main/ProvedorAutenticacao';

class AprovarOrdem extends React.Component {

  state = {
    inventario: null,
    manutencoes: [],
    instalacao: false,
    menssagemDeSucesso:null,
    manutencaoLocalRetiradaExterna: "Manutenção Externa",
    manutencaoEstado: "Equipamento Não Operante",
    tipoOs: "Baixa"
  }
  handleOperante = (e) =>{
    this.setState({
      manutencaoLocalRetiradaExterna: e
    })
  }
  handleTipo = (e) =>{
    this.setState({
      tipoOs: e
    })
  }
  handleEstado = (e) =>{
    this.setState({
      manutencaoEstado: e
    })
  }
  handleEquipamentoOperanteRessalvaNao = (e) =>{
    this.setState({
      equipamentoOperanteRessalvaNao: e
    })
  }
  componentDidMount() {
        this.consultarManutencoes()

  }
  consultarManutencoes = () => {
    axios.get(`https://engenharia-gestao-hospitalar.herokuapp.com/manutencao/${this.props.match.params.id}`).then(response => {
      this.setState({
        treinamento : response.data.treinamento,
        descricaoDetalhada: response.data.descricaoDetalhadaServico,
        falhaEquipamento: response.data.falhaEquipamento,
        falhaAcessorio: response.data.falhaAcessorio,
        manutencaoPreventiva: response.data.manutencaoPreventiva,
        manutencaoCorretiva: response.data.manutencaoCorretiva,
        calibracao: response.data.calibracao,
        instalacao: response.data.instalacao,
        segurancaEletrica: response.data.segurancaEletrica,
        inventarioId : response.data.inventario.id

      })
      
    }).catch(error => {

    })
  }

  aprovar = () => {
    axios.post("https://engenharia-gestao-hospitalar.herokuapp.com/manutencao/aprovar", {
      id: this.props.match.params.id,
      descricaoDetalhadaAprovador:this.state.descricaoDetalhadaAprovador,
      falhaEquipamento: this.state.falhaEquipamento,
      falhaAcessorio: this.state.falhaAcessorio,
      manutencaoPreventiva: this.state.manutencaoPreventiva,
      manutencaoCorretiva: this.state.manutencaoCorretiva,
      calibracao: this.state.calibracao,
      instalacao: this.state.instalacao,
      usuarioAprovador: this.context.user,
      usuarioExecutor: null,
      aprovado: 1,
      manutencaoLocalRetiradaExterna: this.state.manutencaoLocalRetiradaExterna,
      equipamentoOperanteRessalvaNao: this.state.manutencaoEstado,
      tipoOs: this.state.tipoOs,

    }).then(response => {
      this.setState({
        mensagemSucesso: "ORDEM DE SERVIÇO ATUALIZADA E APROVADA COM SUCESSO!!"
      })
    }).catch(error => {
      this.setState({
        mensagemErro: error.response.data.error
      })
    })
  }


  render() {


    return (<div style={{ paddingLeft: "10%", paddingBottom: "10%", paddingRight: "10%", paddingTop: "10%", backgroundColor: "#e0e0d1", marginTop: "-30px", height: "100", backgroundSize: "cover", }} >
      <div className="col-lg-12" style={{ marginTop: "30px", marginBottom: "30px" }}>

      </div>
        <div style={{ border: "1px solid #e0e0d1", borderRadius: "20px", backgroundColor: "white", }} >
          {<div className="col-lg-12" style={{ marginTop: "-50px" }}>

            <GerarQr idInventario={this.props.match.params.id} tamanho="100"></GerarQr>
          </div>}


          <div className="col-lg-12" style={{ paddingTop: "2%", marginBottom: '5%' }}>
            <h2>Ordem de Serviço : </h2>
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
        <legend className="mt-4">Manutenção</legend>
        <div className="form-check">
          <label className="form-check-label">
            <input type="radio" className="form-check-input" name="1" value = "Manutenção no Local"  onClick = {(e)=> this.handleOperante(e.target.value)} id="optionsRadios1" defaultValue="option1" defaultChecked />
          Manutenção no Local
          </label>
          </div>
          <div class="form-check">
          <label className="form-check-label">
            <input type="radio" className="form-check-input" name="1" id="optionsRadios1" value = "Retirada do Equipamento" onClick = {(e)=> this.handleOperante(e.target.value)} defaultValue="option1" defaultChecked />
          Retirada do Equipamento
          </label>
          </div>
          <div class="form-check">
          <label className="form-check-label">
            <input type="radio" className="form-check-input" name="1" id="optionsRadios1" value = "Manutenção Externa" onClick = {(e)=> this.handleOperante(e.target.value)} defaultValue="option1" defaultChecked />
          Manutenção Externa
          </label>
        </div>
      </div>

      <div style={{paddingTop: '10%'}}>
        <legend className="mt-4">Estado do Equipamento</legend>
        <div className="form-check">
        <div class="form-check">
          <label className="form-check-label">
            <input type="radio" value = "Equipamento Operante" onClick = {(e)=> this.handleEstado(e.target.value)} className="form-check-input" name="2"  id="optionsRadios2" defaultValue="option2" defaultChecked />
          Equipamento Operante
          </label>
          </div>
          <div class="form-check">
          <label className="form-check-label">
            <input type="radio" value = "Equipamento com Ressalva" className="form-check-input" onClick = {(e)=> this.handleEstado(e.target.value)} name="2" id="optionsRadios2" defaultValue="option2" defaultChecked />
          Equipamento com Ressalva
          </label>
          </div>
          <div class="form-check">
          <label className="form-check-label">
            <input type="radio" value = "Equipamento Não Operante" className="form-check-input" name="2"  onClick = {(e)=> this.handleEstado(e.target.value)}id="optionsRadios2" defaultValue="option2" defaultChecked />
          Equipamento não Operante
          </label>
          </div>
        </div>
      </div>

      <div style={{paddingTop: '10%'}}>
        <legend className="mt-4">Tipo de Ordem de Serviço</legend>
        <div className="form-check">
          <label className="form-check-label">
            <input type="radio" value = "Emergente" onClick = {(e) => this.handleTipo(e.target.value)} className="form-check-input" name="3" id="optionsRadios3" defaultValue="option3" defaultChecked />
          Emergente
          </label>
          </div>
          <div class="form-check">
          <label className="form-check-label">
            <input type="radio" className="form-check-input" value = "Urgente" onClick = {(e) => this.handleTipo(e.target.value)} name="3" id="optionsRadios3" defaultValue="option3" defaultChecked />
          Urgente
          </label>
          </div>
          <div class="form-check">
          <label className="form-check-label">
            <input type="radio" className="form-check-input"value = "Alta" onClick = {(e) => this.handleTipo(e.target.value)} name="3" id="optionsRadios3" defaultValue="option3" defaultChecked />
          Alta
          </label>
          </div>
          <div class="form-check">
          <label className="form-check-label">
            <input type="radio" className="form-check-input" value = "Média" onClick = {(e) => this.handleTipo(e.target.value)} name="3" id="optionsRadios3" defaultValue="option3" defaultChecked />
          Média
          </label>
          </div>
          <div class="form-check">
          <label className="form-check-label">
            <input type="radio" className="form-check-input" name="3" value = "Baixa" onClick = {(e) => this.handleTipo(e.target.value)} id="optionsRadios3" defaultValue="option3" defaultChecked />
          Baixa
          </label>
        </div>
      </div>

            <div style={{paddingTop: '10%'}}>
              <legend>Observações Aprovador</legend>
              <hr style={{ color: 'gray' }}></hr>
              <div className="form-group">
                <textarea rows="3" style={{ border: "1px solid black", borderRadius: '10px' }} type="email" onChange={(e) => this.setState({
                  descricaoDetalhadaAprovador: e.target.value
                })} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Observaçoes" />
              </div>


<div style={{paddingTop: '5%', marginBottom: '5%'}}> 
              <button  type="button" onClick={()=> this.aprovar()} className="btn btn-dark">Editar e Aprovar Ordem</button>
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




           
          </div>
         

        </div>

    </div>
    );
  }

}

AprovarOrdem.contextType = AuthContext;
export default AprovarOrdem;