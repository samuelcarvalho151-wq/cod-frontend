import React, {useState} from "react";

function Ganso() {
    const [resultado, setResultado] = useState(""); 
    
    function calcularprovisoes() {
        let marujos = Number(prompt("Quantos marujos?: "));
        let comida = Number(prompt("Quantos quilos de comidas?: "));
        let comidapormarujo = comida / marujos

        if(marujos >= 10 && comidapormarujo >= 1.5){
            setResultado("Provisões suficientes. Rumo ao horizonte!")
        }else{
            setResultado("Algo está errado. Posseidom nao quer ninguém no mar hoje")
        }

    }
    return(
        <div className="ganso">
            <h3>Ganso</h3>
            <button onClick={calcularprovisoes}>Ganso - provisões</button>
            {resultado}
        </div>
    )
}
export default Ganso;