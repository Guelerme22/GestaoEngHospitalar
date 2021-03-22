import React from 'react';

import { Redirect } from 'react-router';
import axios from 'axios'
class ListaInventario extends React.Component {
    state = {
        ListaInventario:[]

    }

    componentDidMount() {
        //this.listarInventario()

    }

    listarInventario = () => {
        axios.get(`https://engenharia-gestao-hospitalar.herokuapp.com/inventario/${this.context.user}`).then(response => {
            this.setState({
                listarInventario: response.data
            })
        }).catch(error => {

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

                  
            
                
            </div>
        </div>
        </div>






        )


    }


}
export default ListaInventario