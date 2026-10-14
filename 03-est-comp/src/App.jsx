import './App.css'
import Pousada from './components/pousada'
import Jogo from './components/Jogo'
import IMC from './components/Peso'
import Palestra from './components/Palestra'
import Media from './components/Media'
import PrecoMacas from './components/PrecoMacas'
import Eleicao from './components/Eleicao'
import Ganso from './components/Ganso'
import Capitao from './components/Capitao'
import Sarumano from './components/Sarumano'

function App() {
  

  return (
  <div className='app'>
    <h1> estados e components</h1>

     <h2>#0030</h2>
     <Ganso/>
     <Capitao/>
     <Sarumano/>

    <hr />

    <h2>#0027.sq05</h2>
     <Palestra/>
     <IMC/>
     <Pousada/>
     <Jogo/>
     <Media/>
     <PrecoMacas/>
     <Eleicao/>
     

  </div>

  


  )
}

export default App
