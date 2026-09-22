function Header(){
  return (
  <header className="header">
    <div className="logo">
     <img className="logo-icon" src="#" alt="logo" />
     <span className="logo-teste">Studio Alfa</span>
    </div>
    <nav className="nave">
       <a href="#">inicio</a>  
       <a href="#">serviços</a>
       <a href="#">sobre</a>
       <a href="#" className="btn-contatos">contatos</a>
    </nav>
  </header>
    
  );
}
export default Header;