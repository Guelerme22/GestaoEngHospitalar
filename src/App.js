import logo from './logo.svg';
import 'bootswatch/dist/lux/bootstrap.css'
import './App.css';
import Home from './Views/Home';
import Menu from './Component/Menu';
import Rotas from './Main/Rotas';
import ProvedorAutenticacao from './Main/ProvedorAutenticacao';

function App() {
 
  return (
    <ProvedorAutenticacao>

    <div className="App" >
      <Menu></Menu>
      <Rotas></Rotas>
    </div>
    </ProvedorAutenticacao>

  );
}

export default App;
