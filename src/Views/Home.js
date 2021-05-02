import React from 'react';

import { Redirect } from 'react-router';
import ConsultarQr from '../Component/ConsultarQr'
import ReactiveQR from "reactive-qr";

class Home extends React.Component {

  render() {


    return (<div>
      <div className="col-lg-12" style={{ marginTop:"30px", marginBottom:"30px"}}>
        <h1>PAGINA DO NARUTÃO</h1>
      </div>
      <div className="row" >
        <div className="col-lg-6" >
        {/* <ConsultarQr></ConsultarQr> */}
oiii
        <ReactiveQR onCode={code => console.log(code)} />
                </div>

        <div className="col-lg-6" >
          <h3>NARUTO</h3>
          <p>as vezes o naruto pode ser cabeça dura</p>
        </div>
     
      </div>
      <div className="col-lg-12" style={{marginTop:"30px"}}>
        <h1>formulário</h1>
      </div>
      <div className="row">
      <div className="col-lg-8" style={{paddingLeft:"80px", paddingRight:"80px"}} >
      <div className="form-group" style={{marginBottom:"30px", marginTop:"30px"}}>
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
      </div>
      <div className="form-group" style={{marginBottom:"30px", marginTop:"30px"}}>
        <label htmlFor="exampleInputEmail1">descrição</label>
        <input type="password" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Digite a Descrição" />
      </div>
      <div className="form-group" style={{marginBottom:"30px", marginTop:"30px"}}>
        <label htmlFor="exampleInputEmail1">descrição</label>
        <input type="date" className="form-control" ></input>
      </div>
      <button type="button"style={{width:"80%"}} className="btn btn-outline-success">Success</button>

      </div>
      <div className="col-lg-4" style={{ paddingRight:"30px", paddingLeft:"30px"}}>
        <p style={{textAlign:"justfy", }}> Podemos já vislumbrar o modo pelo qual o desafiador cenário globalizado facilita a criação dos procedimentos normalmente adotados. Todas estas questões, devidamente ponderadas, levantam dúvidas sobre se a contínua expansão de nossa atividade garante a contribuição de um grupo importante na determinação dos índices pretendidos. Percebemos, cada vez mais, que o novo modelo estrutural aqui preconizado oferece uma interessante oportunidade para verificação dos conhecimentos estratégicos para atingir a excelência. No mundo atual, o comprometimento entre as equipes acarreta um processo de reformulação e modernização dos métodos utilizados na avaliação de resultados.</p>
      </div>
      </div>
    </div>
    );
  }

}

export default Home;