import React from 'react';

import { Redirect } from 'react-router';
import axios from 'axios'
class CadastroEquipamento extends React.Component {
    state = {
modelo:"",
descricaoSimplificada:"",
numeroDeSerie:"",
centroDeCusto:"",
notaFiscal:"",
valorDaCompra:"",
dataDaAquisicao:"",
inicioDaGarantia:"",
listaDeModelos:[],
mensagemSucesso:null

    }

    componentDidMount(){
        this.listarModelos()

    }
    cadastraModelo=()=>{
        axios.post("http://localhost:8080/equipamento",{
            
        }).then(response=>{
                this.setState({
                    mensagemSucesso:"Cadastrado com sucesso"
                })
        })
    }
    listarModelos=()=>{
        axios.get("http://localhost:8080/modelo").then(response=>{
        this.setState({
            listaDeModelos: response.data
        })
        console.log("deu certo chamar", this.state.listaDeModelos)
        }).catch(error=>{
            console.log("deu erro")
        })
    }
    handleDescricao=(e)=>{
    console.log("entrou na descrição")
    this.setState({
        descricaoSimplificada: e.target.value
    })
    }

    handleModelo=(e)=>{
        console.log("entrou no modelo",e.target.value)
        this.setState({
            modelo: e.target.value
        })
    }

    handleNserie=(e)=>{
        console.log("entrou no numero de serie")
        this.setState({
            numeroDeSerie: e.target.value
    })
    }

    handleCentro=(e)=>{
        console.log("entrou no centro de custo")
        this.setState({
            centroDeCusto: e.target.value
    })
    }
    
    handleNotafiscal=(e)=>{
        console.log("entrou na descrição")
        this.setState({
            notaFiscal: e.target.value
    })
    }

    handleValorcompra=(e)=>{
        console.log("entrou na descrição")
        this.setState({
            valorDaCompra: e.target.value
        })
        }

    handleDataaquisicao=(e)=>{
        console.log("entrou na descrição")
        this.setState({
            dataDaAquisicao: e.target.value
    })
    }

    handleDatagarantia=(e)=>{
        console.log("entrou na descrição")
        this.setState({
            handleDatagarantia: e.target.value
        })
        }

    mostrarValorDasVariaveis=()=>{
        console.log("as variavesis sao", this.state.descricaoSimplificada, this.state.numeroDeSerie, this.state.centroDeCusto)

    }

    render() {
        return (<div>
            <div className="col-lg-12" style={{ marginTop: "30px", marginBottom: "30px" }}>
        <h1>CADASTRAR EQUIPAMENTO</h1>
         </div>
          <div className="row">
          <div className="col-lg-12" style={{ paddingLeft: "4%", paddingRight: "4%" }}>

<div className="form-group" style={{ marginBottom: "30px", marginTop: "30px" }}>
<div className="form-group">
        <label htmlFor="exampleSelect1">EQUIPAMENTO</label>
        <select onChange={(e)=>this.handleModelo(e)} style={{border:"2px solid black"}}className="form-control" id="exampleSelect1">
        <option>Selecione a maquina e modelo</option>
        {this.state.listaDeModelos.map(modeloAtual=>(

          <option value={modeloAtual.id}>{modeloAtual.maquina.maquina} {modeloAtual.modelo}</option>
        ))}
        
        </select>
      </div>
  <label htmlFor="exampleInputEmail1">DESCRIÇÃO SIMPLIFICADA</label>
  <div className="form-group">
  <input style={{border:"2px solid black"}} type="email" onChange={(e)=>this.handleDescricao(e)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Descrição Simplificada" />
  </div>
  <label htmlFor="exampleInputEmail1">NUMERO DE SERIE</label>
  <div className="form-group">
  <input style={{border:"2px solid black"}} type="email" onChange={(e)=>this.handleNserie(e)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Numero de Série" />
  </div>
  <label htmlFor="exampleInputEmail1">CENTRO DE CUSTO</label>
  <div className="form-group">
  <input style={{border:"2px solid black"}} type="email" onChange={(e)=>this.handleCentro(e)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Centro de Custo" />
  </div>
  <label htmlFor="exampleInputEmail1">NOTA FISCAL</label>
  <div className="form-group">
  <input style={{border:"2px solid black"}} type="email" onChange={(e)=>this.handleNotafiscal(e)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nota Fiscal" />
  </div>
  <label htmlFor="exampleInputEmail1">VALOR DA COMPRA</label>
  <div className="form-group">
  <input style={{border:"2px solid black"}} type="email" onChange={(e)=>this.handleValorcompra(e)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Valor da Compra" />
  </div>
  <label htmlFor="exampleInputEmail1">DATA DE AQUISIÇÃO</label>
  <div className="form-group" style={{border:"2px solid black"}}>
        <input type="date" onChange={(e)=>this.handleDataaquisicao(e)} className="form-control" ></input>
  </div>

      <label htmlFor="exampleInputEmail1">INICIO DA GARANTIA</label>
  <div className="form-group" style={{border:"2px solid black"}}>
        <input type="date" onChange={(e)=>this.handleDatagarantia(e)} className="form-control" ></input>
      </div>

    

</div>

<button onClick={(e) => this.mostrarValorDasVariaveis()} type="button" style={{ width: "100%" }} className="btn btn-outline-success">Cadastrar</button>
{this.state.mensagemSucesso}

          </div>
          </div>
          </div>
          





        )


    }


}
export default CadastroEquipamento