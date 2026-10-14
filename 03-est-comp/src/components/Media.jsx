import React, { useState } from "react";

function Media () {
    const [resultado, setResultado] = useState();

    function calcularMedia() {
        let nota1 = Number(prompt("Nota 1: "));
        let nota2 = Number(prompt("Nota 2: "));
        let media = Number ((nota1 + nota2) / 2).toFixed(2);

        console.log("Media" + media)

        if (media >= 7) {
            setResultado("Aprovado")
        }
        else {
            setResultado("Reprovado")
        }
    }

    return (
        <div className="Media">
            <h2>Media</h2>
            <button onClick={calcularMedia}>Calcular Média</button>
            <p>{resultado}</p>
        </div>
    )
}

export default Media;