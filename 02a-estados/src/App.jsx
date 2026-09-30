import { useState } from 'react'
import './App.css'

function App() {
  const [saida, setsaida] = useState(0)

  function colmedia(){
   let n1 = Number(prompt("Nota 1: "))
   let n2 = Number(prompt("Nota 2: "))
   let media = (n1 + n2) / 2

   setsaida(media)

  
  }
  function rolda(){

    let n = Math.ceil(Math.random()*6)
    setsaida(n)
   
  }
  function rud(){
     let n = Math.ceil(Math.random()*8)
     setsaida(n)
  }
  function rad(){
     let n = Math.ceil(Math.random()*12)
     setsaida(n)
  }
  function rod(){
     let n = Math.ceil(Math.random()*20)
     setsaida(n)
  }
  function rid(){
     let n = Math.ceil(Math.random()*100)
     setsaida(n)
  }
  function correct(){

    let senha = Number(prompt("Digite sua senha: "))
    if(senha == 1234){
      setsaida('Acesso permitido')
    }else{
      setsaida('Acesso negado')
    }

  }
  function raciocinio(){
    


    
    
    
    
   
  }

  return (
   <div className='app'>
    <h1>Estados!</h1>
    <button onClick={colmedia}>Média</button>
    <button onClick={rolda}>D6</button>
    <button onClick={rud}>D8</button>
    <button onClick={rad}>D12</button>
    <button onClick={rod}>D20</button>
    <button onClick={rid}>D100</button>
    <button onClick={correct}>Validar senha</button>
    <button onClick={raciocinio}>Mano Juca</button>
    
    <p>Resultado:{saida}
  
    </p>


   </div>
  )
}

export default App
