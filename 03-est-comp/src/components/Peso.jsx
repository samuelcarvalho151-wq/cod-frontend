import React, { useState } from "react";

function IMC() {
    const [resultado, setResultado] = useState();

function calcularIMC() {
    let altura = Number(prompt("Digite sua altura: "));
    let genero = prompt("Digite seu gênero (homi/muie): ");

    if (genero === "muie") {
        let imc = Number (62.1 * altura - 44.7).toFixed(2);
        setResultado(`Seu IMC é: ${imc}`);
    }
    else if (genero === "homi") {
        let imc = Number (72.7 * altura - 58).toFixed(2);
        setResultado(`Seu IMC é: ${imc}`);
    }
}
    return (
        <div className="IMC">
            <h2>IMC</h2>
            <p>{resultado}</p>
            <button onClick={calcularIMC}>IMC</button>
        </div>
    );
}
export default IMC;
