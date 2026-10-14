
import React, { useState } from "react";

function Eleição() {
    const [resultado, setResultado] = useState("");

    function verificarIdade() {
        const idade = Number(prompt("Digite sua idade: "));

        if (idade < 16) {
            setResultado("Não pode votar");
        } 
        else if (idade >= 16 && idade <= 17) {
            setResultado("Voto opcional");
        } 
        else if (idade >= 18 && idade <= 69) {
            setResultado("Voto obrigatório");
        } 
        else {
            setResultado("Voto facultativo");
        }
    }

    return (
        <div className="eleição">
            <h2>Eleição</h2>
            <p>{resultado}</p>

            <button onClick={verificarIdade}>
                Eleição
            </button>
        </div>
    );
}

export default Eleição;
