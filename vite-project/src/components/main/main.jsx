import "./Main.css";
import ServicoCard from "../ServicoCard";

const servicos = [
  {
    id: 1,
    icone: "🤮",
    titulo: "Desingn de interface",
    descricao: "Telas claras pensadas no usuário ",
  },
  {
    id: 1,
    icone: "😻",
    titulo: "Responsividade",
    descricao: "O mesmo site em qualquer tela ",
  },
  {
    id: 1,
    icone: "👌",
    titulo: "O mesmo site em qualquer tela",
    descricao: "Páginas leves que carregam rápido ",
  },
];

function Main() {
  return (
    <main className="main">
      <section className="hero">
        <h1>Criamos sites que funcionam</h1>
        <p>
          Layouts responsivos, rapidos e acessiveis para o seu negocio crescer
          na web.
        </p>
        <div className="hero-buttons">
          <a href="#orçamento" className="btn-primary">
            Peça um orçamento
          </a>
          <a href="#portfolio" className="btn-secondary">
            Ver portfólio
          </a>
        </div>
      </section>
      <section className="servico">
        <h2>Nossos serviços</h2>

        <div className="servicos-grid">
          {servicos.map((servico) => (
            <ServicoCard
              key={servico.id}
              icone={servico.icone}
              titulo={servico.titulo}
              descricao={servico.descricao}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main;
