import React from 'react';

import { Redirect } from 'react-router';
import axios from 'axios'
import { AuthContext } from '../Main/ProvedorAutenticacao';

class CadastroInventario extends React.Component {
    state = {
        modelo: "",
        fornecedor: "",
        descricaoSimplificada: "",
        numeroDeSerie: "",
        centroDeCusto: "",
        notaFiscal: "",
        valorDaCompra: "",
        dataDaAquisicao: "",
        inicioDaGarantia: "",
        listaDeModelos: [],
        mensagemSucesso: null,
        utilizaAcessorios: true,
        listaDeFornecedores: [],
        utilizaGases: true,
        alimentacaoHidraulica: true,

    }

    componentDidMount() {
        this.listarModelos()
        this.listarFornecedores()

    }
    cadastrarInventario = () => {
        axios.post('https://engenharia-gestao-hospitalar.herokuapp.com/inventario', {
            inventario: this.state.inventario,
            descricao: this.state.descricaoSimplificada,
            modelo: {
                id: this.state.modeloIdEscolhido
            },
            fornecedor: {
                id: this.state.fornecedorIdEscolhido
            },
            fabricante: this.state.fabricante,
            centroCusto: this.state.centroCusto,
            valorCompra: this.state.valorDaCompra,
            taxaDepreciacao: this.state.taxaDepreciacao,
            notaFiscal: this.state.notaFiscal,
            codigoProduto: this.state.codigoProduto,
            numeroSerie: this.state.numeroDeSerie,
            anoAquisicao: this.state.dataDaAquisicao,
            inicioGarantia: this.state.dataGarantia,
            expiracaoGarantia: this.state.expiracaoGarantia,
            registroAnvisa: this.state.registroAnvisa,
            anoFabricacao: this.state.anoFabricacao,
            dataCompra: this.state.dataCompra,
            peso: this.state.peso,
            largura: this.state.largura,
            comprimento: this.state.comprimento,
            altura: this.state.altura,
            potencia: this.state.potencia,
            corrente: this.state.corrente,
            utilizaGases: this.state.utilizaGases,
            quaisGases: this.state.quaisGases,
            alimentacaoHidraulica: this.state.alimentacaoHidraulica,
            utilizaAcessorios: this.state.utilizaAcessorios,
            quaisAcessorios: this.state.quaisAcessorios,
            alimentacaoEletrica: this.state.alimentacaoEletrica,
            usuario: {
                cpf: this.context.user
            }


        }).then(response => {
            this.setState({
                mensagemSucesso: "Cadastrado com sucesso"
            })
        }).catch(error => {
            this.setState({
                mensagemErro: error.response.data.error
            })
        })


    }

    cadastraModelo = () => {
        axios.post("https://engenharia-gestao-hospitalar.herokuapp.com/equipamento", {

        }).then(response => {
            this.setState({
                mensagemSucesso: "Cadastrado com sucesso"
            })
        })
    }
    listarModelos = () => {
        axios.get("https://engenharia-gestao-hospitalar.herokuapp.com/modelo").then(response => {
            this.setState({
                listaDeModelos: response.data
            })
            console.log("deu certo chamar", this.state.listaDeModelos)
        }).catch(error => {
            console.log("deu erro")
        })
    }
    listarFornecedores = () => {
        axios.get("https://engenharia-gestao-hospitalar.herokuapp.com/fornecedor").then(response => {
            this.setState({
                listaDeFornecedores: response.data
            })
            console.log("deu certo chamar", this.state.listaDeFornecedores)
        }).catch(error => {
            console.log("deu erro")
        })
    }

    handleFornecedor = (e) => {
        this.setState({
            fornecedor: e.target.value
        }, () => {
            this.setState({
                fornecedorIdEscolhido: e.target.value
            })
        })
        console.log("o valor da variavel fornecer:", this.state.fornecedor)
    }


    handleDescricao = (e) => {
        console.log("entrou na descrição")
        this.setState({
            descricaoSimplificada: e.target.value
        })
    }

    fecharAlertas = () => {
        this.setState({
            mensagemErro: null,
            mensagemSucesso: null
        })
    }


    handleModelo = (e) => {
        console.log("entrou no modelo", e.target.value)
        this.setState({
            modelo: e.target.value
        }, () => {
            this.setState({
                modeloIdEscolhido: e.target.value
            })
        })
    }

    handleNserie = (e) => {
        console.log("entrou no numero de serie")
        this.setState({
            numeroDeSerie: e.target.value
        })
    }

    handleCentro = (e) => {
        console.log("entrou no centro de custo")
        this.setState({
            centroDeCusto: e.target.value
        })
    }


    handleNotafiscal = (e) => {
        console.log("entrou na descrição")
        this.setState({
            notaFiscal: e.target.value
        })
    }

    handleQuaisAcessorios = (e) => {
        console.log("entrou na descrição")
        this.setState({
            quaisAcessorios: e.target.value
        })
    }

    handleQuaisGases = (e) => {
        console.log("entrou na descrição")
        this.setState({
            quaisGases: e.target.value
        })
    }

    handleAcessorios = (e) => {
        if (e == true) {
            this.setState({
                utilizaAcessorios: true
            })
        } else {
            this.setState({
                utilizaAcessorios: false
            })

        }
    }

    handleUtilizaGases = (e) => {
        if (e == true) {
            this.setState({
                utilizaGases: true
            })
        } else {
            this.setState({
                utilizaGases: false
            })

        }
    }

    handleAlimentacaoHidraulica = (e) => {
        if (e == true) {
            this.setState({
                alimentacaoHidraulica: true
            })
        } else {
            this.setState({
                alimentacaoHidraulica: false
            })

        }
    }

    handleValorcompra = (e) => {
        console.log("entrou na descrição")
        this.setState({
            valorDaCompra: e.target.value
        })
    }

    handleDataaquisicao = (e) => {
        console.log("entrou na descrição")
        this.setState({
            dataDaAquisicao: e.target.value
        })
    }

    handleDatagarantia = (e) => {
        console.log("entrou na descrição")
        this.setState({
            dataGarantia: e.target.value
        })
    }

    handlePotencia = (e) => {
        console.log("entrou na descrição")
        this.setState({
            potencia: e.target.value
        })
    }

    handleCorrente = (e) => {
        console.log("entrou na descrição")
        this.setState({
            corrente: e.target.value
        })
    }

    handleAlimentacaoEletrica = (e) => {
        console.log("entrou na descrição")
        this.setState({
            alimentacaoEletrica: e.target.value
        })
    }

    handlePeso = (e) => {
        console.log("entrou na descrição")
        this.setState({
            peso: e.target.value
        })
    }

    handleAltura = (e) => {
        console.log("entrou na descrição")
        this.setState({
            altura: e.target.value
        })
    }

    handleLargura = (e) => {
        console.log("entrou na descrição")
        this.setState({
            largura: e.target.value
        })
    }

    handleComprimento = (e) => {
        console.log("entrou na descrição")
        this.setState({
            comprimento: e.target.value
        })
    }

    mostrarValorDasVariaveis = () => {
        console.log("as variavesis sao", this.state.descricaoSimplificada, this.state.numeroDeSerie, this.state.centroDeCusto)

    }

    render() {
        return (<div>
            <div className="col-lg-12" style={{ marginTop: "30px", marginBottom: "30px" }}>
                <h2>CADASTRO DE INVENTÁRIO</h2>
                <hr></hr>

            </div>
            <div className="row" style={{ marginBottom: '100px' }}>
                <div className="col-lg-12" style={{ paddingLeft: "4%", paddingRight: "4%" }}>

                    <div className="form-group" style={{ marginBottom: "30px", marginTop: "30px" }}>
                        <div className="form-group">
                            <label htmlFor="exampleSelect1">EQUIPAMENTO</label>
                            <select onChange={(e) => this.handleModelo(e)} style={{ border: "2px solid black" }} className="form-control" id="exampleSelect1">
                                <option>Selecione o Equipamento e modelo</option>
                                {this.state.listaDeModelos.map(modeloAtual => (

                                    <option value={modeloAtual.id}>{modeloAtual.equipamento.equipamento} {modeloAtual.modelo}</option>
                                ))}

                            </select>
                        </div>
                        <label htmlFor="exampleInputEmail1">DESCRIÇÃO SIMPLIFICADA</label>
                        <div className="form-group">
                            <input style={{ border: "2px solid black" }} type="email" onChange={(e) => this.handleDescricao(e)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Descrição Simplificada" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleSelect1">FORNECEDOR</label>
                            <select onChange={(e) => this.handleFornecedor(e)} style={{ border: "2px solid black" }} className="form-control" id="exampleSelect1">
                                <option>Selecione o Fornecedor</option>
                                {this.state.listaDeFornecedores.map(modeloAtual => (

                                    <option value={modeloAtual.id}>{modeloAtual.fornecedor} </option>
                                ))}

                            </select>
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <label htmlFor="exampleInputEmail1">NUMERO DE SERIE</label>
                                <div className="form-group">
                                    <input style={{ border: "2px solid black" }} type="email" onChange={(e) => this.handleNserie(e)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Numero de Série" />
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <label htmlFor="exampleInputEmail1">NOTA FISCAL</label>
                                <div className="form-group">
                                    <input style={{ border: "2px solid black" }} type="email" onChange={(e) => this.handleNotafiscal(e)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nota Fiscal" />
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <label htmlFor="exampleInputEmail1">VALOR DA COMPRA</label>
                                <div className="form-group">
                                    <input style={{ border: "2px solid black" }} type="email" onChange={(e) => this.handleValorcompra(e)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Valor da Compra" />
                                </div>
                            </div>
                        </div>


                        <label htmlFor="exampleInputEmail1">CENTRO DE CUSTO</label>
                        <div className="form-group">
                            <input style={{ border: "2px solid black" }} type="email" onChange={(e) => this.handleCentro(e)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Centro de Custo" />
                        </div>

                        <div className="row">
                            <div className="col-lg-6">
                                <label htmlFor="exampleInputEmail1">DATA DE AQUISIÇÃO</label>
                                <div className="form-group" style={{ border: "2px solid black" }}>
                                    <input type="date" onChange={(e) => this.handleDataaquisicao(e)} className="form-control" ></input>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <label htmlFor="exampleInputEmail1">INICIO DA GARANTIA</label>
                                <div className="form-group" style={{ border: "2px solid black" }}>
                                    <input type="date" onChange={(e) => this.handleDatagarantia(e)} className="form-control" ></input>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-4">
                                <label htmlFor="exampleInputEmail1">POTENCIA</label>
                                <div className="form-group">
                                    <input style={{ border: "2px solid black" }} type="email" onChange={(e) => this.handlePotencia(e)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Potencia" />
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <label htmlFor="exampleInputEmail1">CORRENTE</label>
                                <div className="form-group">
                                    <input style={{ border: "2px solid black" }} type="email" onChange={(e) => this.handleCorrente(e)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Corrente" />
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <label htmlFor="exampleInputEmail1">ALIMENTAÇÃO ELETRICA</label>
                                <div className="form-group">
                                    <input style={{ border: "2px solid black" }} type="email" onChange={(e) => this.handleAlimentacaoEletrica(e)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Alimentação Eletrica" />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-3">
                                <label htmlFor="exampleInputEmail1">PESO</label>
                                <div className="form-group">
                                    <input style={{ border: "2px solid black" }} type="email" onChange={(e) => this.handlePeso(e)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Peso" />
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <label htmlFor="exampleInputEmail1">ALTURA</label>
                                <div className="form-group">
                                    <input style={{ border: "2px solid black" }} type="email" onChange={(e) => this.handleAltura(e)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Altura" />
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <label htmlFor="exampleInputEmail1">LARGURA</label>
                                <div className="form-group">
                                    <input style={{ border: "2px solid black" }} type="email" onChange={(e) => this.handleLargura(e)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Largura" />
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <label htmlFor="exampleInputEmail1">COMPRIMENTO</label>
                                <div className="form-group">
                                    <input style={{ border: "2px solid black" }} type="email" onChange={(e) => this.handleComprimento(e)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Comprimento" />
                                </div>
                            </div>
                        </div>


                        <div className="row">
                            <div className="col-lg-4">
                                <label htmlFor="exampleInputEmail1">ALIMENTAÇÃO HIDRAULICA?</label>
                                <div className="form-check" >
                                    <label className="form-check-label">
                                        <input type="radio" className="form-check-input" name="alimentacaoHidraulica" id="alimentacaoHidraulica" defaultValue="option1" defaultChecked />
            SIM
          </label>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input type="radio" className="form-check-input" name="alimentacaoHidraulica" id="alimentacaoHidraulica" defaultValue="option2" />
            NÃO
          </label>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <label htmlFor="exampleInputEmail1">UTILIZA GASES?</label>
                                <div className="form-check">
                                    <label onChange={(e) => this.handleUtilizaGases(true)} className="form-check-label">
                                        <input type="radio" className="form-check-input" name="utilizaGases" id="optionsRadios1" defaultValue="option1" defaultChecked />
            SIM
          </label>
                                </div>
                                <div className="form-check">
                                    <label onChange={(e) => this.handleUtilizaGases(false)} className="form-check-label">
                                        <input type="radio" className="form-check-input" name="utilizaGases" id="optionsRadios2" defaultValue="option2" />
            NÃO
          </label>
                                </div>
                            </div>
                           

                            <div className="col-lg-4">
                                <label htmlFor="exampleInputEmail1">UTILIZA ACESSORIOS?</label>
                                <div className="form-check">
                                    <label onChange={(e) => this.handleAcessorios(true)} className="form-check-label">
                                        <input type="radio" className="form-check-input" name="utilizaAcessorios" id="optionsRadios1" defaultValue="option1" defaultChecked />
            SIM
          </label>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input type="radio" onChange={(e) => this.handleAcessorios(false)} className="form-check-input" name="utilizaAcessorios" id="optionsRadios2" defaultValue="option2" />
            NÃO
          </label>
                                </div>
                            </div>
                            
                        </div>
                        <div className="col-lg-12">
                            <div className="row">
                                <div className="col-lg-4">
                                </div>
                                <div className="col-lg-4">
                                {this.state.utilizaGases == true ?
                                <div>
                                    <label htmlFor="exampleInputEmail1">QUAIS GASES?</label>
                                    <label htmlFor="exampleInputEmail1"></label>
                                    <div className="form-group">
                                        <input style={{ border: "2px solid black" }} type="email" onChange={(e) => this.handleQuaisGases(e)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Quais Gases?" />
                                    </div>
                                </div>
                                : false
                            }
                                </div>
                                <div className="col-lg-4">
                                {this.state.utilizaAcessorios == true ?
                                <div>
                                    <label htmlFor="exampleInputEmail1">QUAIS ACESSORIOS?</label>
                                    <label htmlFor="exampleInputEmail1"></label>
                                    <div className="form-group">
                                        <input style={{ border: "2px solid black" }} type="email" onChange={(e) => this.handleQuaisAcessorios(e)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Quais acessorio?" />
                                    </div>
                                </div>
                                : false
                            }
                                </div>


                            </div>

                        </div>

                        <label htmlFor="exampleInputEmail1">OBSERVAÇOES</label>
                        <div className="form-group">
                            <input style={{ border: "2px solid black" }} type="email" onChange={(e) => this.handleDescricao(e)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Observaçoes" />
                        </div>

                    </div>




                    <button onClick={(e) => this.cadastrarInventario()} type="button" style={{ width: "100%" }} className="btn btn-outline-success">Cadastrar</button>

                    <div style={{marginTop: "3%", marginBottom:"3%"}}>
                {this.state.mensagemSucesso ? <div>

                    <div className="alert alert-dismissible alert-success">
                        <button type="button" onClick={(e) => this.fecharAlertas()} className="close" data-dismiss="alert">×</button>
                        <strong>Equipamento Cadastrado!</strong> Equipamento esta na aba "INVENTARIO" <a href="#" className="alert-link">{this.state.mensagemSucesso}</a>.
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







        )


    }


}
CadastroInventario.contextType = AuthContext;
export default CadastroInventario;