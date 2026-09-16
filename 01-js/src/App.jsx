import './App.css'

function App() {
 function testar (){
 let nome = prompt('Qual o seu nome: ')
 let bocaDoSapo = nome
 alert(nome + ', seu nome está na boca do sapo 🐸 ')
 
 
}
function calcularpontos(){
  let vitorias = Number(prompt('Numero de vitorias'))
  let empates = Number(prompt('Numero de empates'))

  let pontos = vitorias*3 + empates //*1
  
  alert('o time teu tem ' + pontos )

 }
 function trocarsapatos(){
 // give your jumps
 let qtdpares, precopares, valortotal 
 qtdpares = Number(prompt('Quantidade de pares: '))
 precopares = Number(prompt('Preço de cada par: '))
 valortotal = qtdpares * precopares
 alert('O valor total da troca: R$: ' + valortotal.toFixed(2) )



 }
 function numdevs(){
  let clt, estagiarios, pj

  clt = Number(prompt('quantidade de devs CLT: '))
  estagiarios = Number(prompt('quantidade de devs estagiarios: '))
  pj = Number(prompt('quantidade de devs PJ: '))
  
  let totaldevs = clt + estagiarios + pj
  alert('O total de devs na empresa é: ' + totaldevs)

 }
 function ceotraje(){
  let inlara, filara

  inlara = Number(prompt('quantidade inicial de laranjas: '))
  filara = Number(prompt('quantidade final de larajas: '))

  let totallaranja = inlara - filara

  alert('quantas laranjas foram vendidas: ' + totallaranja)
 }
 function fingre(){
  let custo, doacao
  
  custo = Number(prompt('Os custos mensais da igreja: R$: '))
  doacao = Number(prompt('Quanto foi recebido de doações e dízimos no dia: R$: '))

  let totdaigr = custo - doacao

  alert("oq falta pagar os custos mensais: R$: " + totdaigr )


 }
  return (
    <div className="cont-app">
    <h1>JavaScript no React</h1>

    <h2>Exercicios supimpas</h2>
    

    <button onClick={numdevs}>Empresa/RH</button>
    <button onClick={calcularpontos}>Campeonato</button>
    <button onClick={trocarsapatos}>Trocas pé pequeno</button>
    <button onClick={fingre}>Igreja</button>
    <hr />
    <button onClick={ceotraje}> Trajeto Pomar</button>
    <button onClick={testar}>Testar</button>
    <button onClick={calcularMedia}>Média</button>
    </div>
  )
}

function calcularMedia (){
let nota1 = Number((prompt("Qual o valor da primeira nota:")))
let nota2 = Number((prompt("Qual o valor da segunda nota:")))
let media = (nota1 + nota2) /2;
alert('Sua média final: ' + media)
}

export default App


