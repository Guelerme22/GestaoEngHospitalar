import React from 'react';
import axios from 'axios'
import { Redirect } from 'react-router';
import GerarQr from '../Component/GerarQr'
class PaginaDoInventario extends React.Component {

  state = {
    inventario :
     {modelo:{modelo:''},
    fornecedor:{fornecedor:''}}

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
  }
  componentDidMount() {
    this.consutarInventario()
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


    return (<div>
      <div className="col-lg-12" style={{ marginTop: "30px", marginBottom: "30px" }}>
        <h2> INVENTÁRIO {this.props.match.params.id}</h2>
        <hr></hr>

      </div>
      <div className="row" style={{ marginBottom: '100px' }}>
        <div className="col-lg-6">

          <GerarQr idInventario={this.props.match.params.id} tamanho="400"></GerarQr>
        </div>
        <div className="col-lg-6">
          Página do inventário 
          <ul>
            <li>Descricao: {this.state.inventario.descricao}</li>

            <li>Modelo:  {this.state.inventario.modelo.modelo}</li>

            <li>{this.state.inventario.fornecedor.fornecedor}</li>


            <li>{this.state.inventario.descricao}</li>



          </ul>
          {this.state.inventario.descricao}
        

        </div>
      </div>
    </div>
    );
  }

}

export default PaginaDoInventario;