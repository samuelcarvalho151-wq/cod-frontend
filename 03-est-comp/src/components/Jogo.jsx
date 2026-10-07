import React, { useState } from "react";

//rfce
function Jogo() {
  const [resultado, setResultado] = useState();

  function classificas() {
    let pontos = Number(prompt("Quantos pontos? "));
    if (pontos <= 10) {
      setResultado("Mogo o betinha...");
    } else if (pontos <= 100) {
      setResultado("Mantenha a esperança...");
    } else if (pontos <= 200) {
      setResultado("Supimpa!");
    } else {
      setResultado("Farmou aura!");
    }
}
    return (
      <div className="jogo">
        <h2> Jogo do mano Juca. </h2>
        <button onClick={classificas}>Classificar</button>
        {resultado}
      </div>
    )
 
}

export default Jogo;
