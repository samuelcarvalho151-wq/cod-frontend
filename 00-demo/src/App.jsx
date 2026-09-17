import React from 'react';

function App() {
  // Estilos embutidos atualizados para tampar a tela na horizontal e vertical
  const containerStyle = {
    backgroundColor: '#121212', /* Fundo preto */
    color: '#ffffff',
    minHeight: '100vh', /* Ocupa 100% da altura da tela */
    width: '100%',      /* Ocupa 100% da largura da tela (horizontal) */
    padding: '40px 10%', /* Espaçamento interno nas laterais */
    margin: '0',
    fontFamily: 'sans-serif',
    boxSizing: 'border-box'
  };

  const h1Style = {
    color: '#ffd700', /* Amarelo ouro */
    fontSize: '2.5rem',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    marginBottom: '40px',
    borderBottom: '2px solid #ffd700',
    paddingBottom: '15px'
  };

  const h2Style = {
    color: '#ffcc00', /* Amarelo suave */
    fontSize: '1.6rem',
    marginTop: '40px',
    marginBottom: '20px',
    borderLeft: '4px solid #ffcc00', /* Detalhe amarelo na lateral esquerda do título */
    paddingLeft: '10px'
  };

  const listStyle = {
    listStyleType: 'square',
    paddingLeft: '20px',
    color: '#e0e0e0',
    lineHeight: '1.8',
    fontSize: '1.15rem'
  };

  return (
    <div style={containerStyle}>
      <h1 style={h1Style}>TRABALHANDO COM REACT</h1>
      
      <h2 style={h2Style}>ONDE POSSO TRAMPAR COMO DEV</h2>
      <ul style={listStyle}>
        <li><strong style={{color: '#ffd700'}}>Estúdios de Jogos:</strong> Desenvolvimento de mecânicas de gameplay, física e lógica de inteligência artificial em Unity ou Unreal.</li>
        <br />
        <li><strong style={{color: '#ffd700'}}>Institutos de Pesquisa (P&D):</strong> Criação de algoritmos de visão computacional, Machine Learning e processamento de dados científicos.</li>
        <br />
        <li><strong style={{color: '#ffd700'}}>Empresas de Cibersegurança:</strong> Desenvolvimento de ferramentas de criptografia, firewalls de rede e automações para testes de invasão.</li>
        <br />
        <li><strong style={{color: '#ffd700'}}>FinTechs e Mercado Financeiro:</strong> Construção de robôs de investimento, algoritmos de alta frequência (HFT) e segurança em blockchain.</li>
        <br />
        <li><strong style={{color: '#ffd700'}}>GovTechs e Setor Público:</strong> Portais de serviços ao cidadão, sistemas de emissão de notas e gerenciamento de dados públicos.</li>
      </ul>

      <h2 style={h2Style}>TRAMPO COM TECNOLOGIA SEM PROGRAMAÇÃO</h2>
      <ul style={listStyle}>
        <li>Product Management & Negócios</li>
        <br />
        <li>Design e Experiência do Usuário (UI/UX)</li>
        <br />
        <li>Gestão de Projetos e Agilidade</li>
        <br />
        <li>Dados e Inteligência de Negócio</li>
        <br />
        <li>Vendas Técnicas e Sucesso do Cliente</li>
        <br />
      </ul>
     
      <h2 style={h2Style}>VAI FAZER FACULDADE DE OUTRA COISA</h2>
      <ul style={listStyle}>
        <li><strong style={{color: '#ffd700'}}>Direito:</strong> Resumos doutrinários, peças jurídicas e simulados.</li>
        <br />
        <li><strong style={{color: '#ffd700'}}>Saúde:</strong> Explicação de anatomia/fisiologia, artigos e casos clínicos.</li>
        <br />
        <li><strong style={{color: '#ffd700'}}>Negócios:</strong> Planos de negócios, análise SWOT e cálculos econômicos.</li>
        <br />
        <li><strong style={{color: '#ffd700'}}>Humanas:</strong> Resenhas, comparação de autores e normas ABNT.</li>
        <br />
        <li><strong style={{color: '#ffd700'}}>Engenharias:</strong> Passo a passo de cálculo, física e relatórios.</li>
      </ul>
    </div>
  );
}

export default App;