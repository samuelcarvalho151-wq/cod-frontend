import './main.css';

 function Main() {
    return(
        <main className='main'>
        <section className='hero'>
        <h1>Criamos sites que funcionam</h1>
        <p>Layouts responsivos, rápidos e acessiveis para seu negôcio crecer na Web</p>

        <div className='hero-button'>
        <a href="#orcamento" className='btn-primary'> Peça um orçamento</a>
         <a href="#orcamento" className='btn-secondary'> Ver portfólio</a>

        </div>
        </section>
        <section className='servicos'>
          <h2>Nossos serviços</h2>

          <div className='servico-grid'>
              <span>👌</span>
              <h2>Design de interface</h2>
              <p>Telas claras, pensadas para o usuário.</p>
          
          <div className='servico-card'>
            <span>✨</span>
            <h2>Responsividade</h2>
            <p>O mesmo site em qualquer tela.</p>

          
          <div className='serivico-card'>
            <span>😊</span>
            <h2>Performance</h2>
            <p>Páginas leves que carregam rápido.</p>
          </div>
         </div>
         </div>
        </section>
        </main>
    )
}

export default Main;
