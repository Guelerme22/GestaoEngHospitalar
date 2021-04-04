import React from 'react';
import axios from 'axios'
import { Redirect } from 'react-router';

class PaginaDoInventario extends React.Component {

  componentDidMount (){
      this.consutarInventario()
  }

  consutarInventario =() =>{
    axios.get(`https://engenharia-gestao-hospitalar.herokuapp.com/inventario/${this.props.match.params.id}`).then(response => {
            this.setState({
                inventario: response.data
            })
        }).catch(error => {

        })
  }

  render() {


    return (<div>
      
      pagina do inventario {this.props.match.params.id}
    </div>
    );
  }

}

export default PaginaDoInventario;