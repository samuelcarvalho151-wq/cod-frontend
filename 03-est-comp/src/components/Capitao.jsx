import React, {useState} from "react";

function capitaoganso(){
     const [resultado, setResultado] = useState("");

 function tripulacao(){
    let sabernadar = (prompt("Você sabe nadar s/n?: "));
    let idade = Number(prompt("Qual a sua idade?: "));
    let temrecomendacao = (prompt("Você tem recomendação? s/n: "));
    if(idade >= 16 && sabernadar == "s"){

        setResultado("Aprovado para o navio!")
    } else if(sabernadar == "n" && temrecomendacao == "s" && idade >= 14){

        setResultado("Aprovado sob recomendação. Monitorar nas primeiras viagens.")
    }else{

       setResultado("Reprovado. Volte quando estiver mais preparado para o mar.")
    }
 }
    return(
        <div className="capita">
            <h3>Capitão Ganso</h3>
            <button onClick={tripulacao}>Capitão - Tripulação</button>
            {resultado}
        </div>
    )
}

export default capitaoganso