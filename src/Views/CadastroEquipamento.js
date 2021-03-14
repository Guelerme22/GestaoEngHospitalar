import React from 'react';

import { Redirect } from 'react-router';
import axios from 'axios'
class CadastroEquipamento extends React.Component {
    state = {
        qrcode :''
    }
    componentDidMount() {
        this.consultarQrCode()
    }

    consultarQrCode = () => {
        axios.get("http://localhost:8080/genrateQRCode/code/350/350").then(response => {
            this.setState({
                qrcode: response.data
            })
        }).catch(erro => {

        })
    }

    render() {
        return (
            <div>

                <div className="col-lg-12" style={{ marginTop: "30px", marginBottom: "30px" }}>
                    <h1>CADASTRAR EQUIPAMENTO</h1>
                </div>
                {this.state.qrcode}
                <img src={this.state.qrcode}></img>
            </div>
        )


    }


}
export default CadastroEquipamento