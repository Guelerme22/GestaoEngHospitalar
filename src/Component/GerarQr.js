import axios from 'axios';
import React from 'react';

const GerarQr = ({idInventario, tamanho}) => {

    return (
        <div className="col-lg-12">
            <img style={{border:"10px solid white"}} src= {`https://api.qrserver.com/v1/create-qr-code/?size=${tamanho}x${tamanho}&data=${idInventario}`}></img>
         </div>
    );
};

export default GerarQr;