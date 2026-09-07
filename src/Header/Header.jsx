function Header() {
  return (
    <header className="cabecalho">
      <section className="container">
        <h2 className="logo">Mundo dos Animes</h2>
        
        <nav aria-label="Navegação principal">
          <ul className="menu">
            <li>
              <a href="#inicio">Início</a>
            </li>
            <li>
              <a href="#sobre">Sobre</a>
            </li>
            <li>
              <a href="#animes">Animes</a>
            </li>
            <li>
              <a href="#galeria">Galeria</a>
            </li>
            <li>
              <a href="#contato">Contato</a>
            </li>
          </ul>
        </nav>
      </section>
    </header>
  );
}

export default Header;