
import React, { useState } from "react";

function PrecoMacas() {
    const [preco, setPreco] = useState("");

    function calcularPreco() {
        const quantidade = Number(prompt("Quantidade de maçãs: "));

        if (quantidade < 12) {
            const precoCalculado = (0.30 * quantidade).toFixed(2);
            setPreco(`O preço total é: R$ ${precoCalculado}`);
        } else {
            const precoCalculado = (0.25 * quantidade).toFixed(2);
            setPreco(`O preço total é: R$ ${precoCalculado}`);
        }
    }

    return (
        <div>
            <h2>Maçã</h2>
            <p>{preco}</p>
            <button onClick={calcularPreco}>Calcular preço</button>
        </div>
    );
}

export default PrecoMacas;