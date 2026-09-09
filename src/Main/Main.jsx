
function Main() {
  return (
    <main>
      {/* HERO */}
      <section id="inicio" className="hero">
        <h1>Entre no Meu Mundo dos Animes</h1>

        <p>
          Descubra histórias incríveis, personagens inesquecíveis
          e aventuras que conquistam fãs do mundo inteiro.
        </p>

        <a href="#animes" className="botao">
          Conheça os animes
        </a>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="sobre container">
        <h2>Sobre o projeto</h2>

        <p>
          O Meu Mundo dos Animes nasceu para conectar você aos melhores títulos e lançamentos do universo das animações japonesas. O objetivo é incentivar a exploração desse universo fascinante, repleto de criatividade, aventuras épicas e emoções inesquecíveis.
        </p>
      </section>

      {/* ANIMES */}
      <section id="animes" className="animes container">
        <h2>Animes em destaque</h2>

        <p>
          Confira alguns títulos que fazem parte do meu mundo dos animes.
        </p>

        <section className="cards">

          <article className="card">
            <img
              src="https://i.redd.it/estou-muito-viciada-em-di%C3%A1rios-de-uma-apotec%C3%A1ria-v0-8ziupdyx72cf1.png?width=1064&format=png&auto=webp&s=b6ae34e16c064ebe412da151bd6f7b2f50504586"
              alt="Ilustração relacionada ao anime O Diário da Apotecária"
            />

            <h3>O Diário da Apotecaria</h3>

            <p>
              Mistério, medicina e uma protagonista inteligente
              em uma história cheia de descobertas.
            </p>

            <h4>Categoria: Mistério</h4>
          </article>

          <article className="card">
            <img
              src="https://www.planocritico.com/wp-content/uploads/2025/10/frieren-1-temp-plano-critico.jpg"
              alt="Ilustração do anime Frieren"
            />

            <h3>Frieren</h3>

            <p>
              Uma emocionante jornada sobre amizade, memória
              e o significado do tempo.
            </p>

            <h4>Categoria: Fantasia</h4>
          </article>

          <article className="card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZSDaibXycz4nYTjmWRbtEpBh651g6jFuMhmnhFm8kVA&s=10"
              alt="Ilustração do anime O Sabor do Calabouço"
            />

            <h3>O Sabor do Calabouço</h3>

            <p>
              Uma aventura divertida que mistura monstros,
              exploração e culinária.
            </p>

            <h4>Categoria: Aventura</h4>
          </article>

          <article className="card">
            <img
              src="https://t.ctcdn.com.br/3L7e0dfUxiKO8zUJcip-8fqcEJk=/1200x675/smart/i521738.jpeg"
              alt="Paisagem fantástica representando uma aventura"
            />

            <h3>One Piece</h3>

            <p>
              Uma grande aventura pelos mares em busca do lendário One Piece.
            </p>

            <h4>Categoria: Aventura</h4>
          </article>

          <article className="card">
            <img
              src="https://a.storyblok.com/f/178900/960x540/d1341a9265/cr_marriage_hero.png/m/filters:quality(95)format(webp)"
              alt="Paisagem romântica relacionada a uma história de fantasia"
            />

            <h3>Meu Casamento Perfeito</h3>

            <p>
              Romance, superação e uma história emocionante sobre novos começos.
            </p>

            <h4>Categoria: Romance</h4>
          </article>

          <article className="card">
            <img
              src="https://criticalhits.com.br/wp-content/uploads/2022/04/Spy-X-Family-Anime.webp"
              alt="Ilustração de uma família em uma situação divertida"
            />

            <h3>SPY x FAMILY</h3>

            <p>
              Uma família nada convencional vivendo uma divertida missão secreta.
            </p>

            <h4>Categoria: Comédia</h4>
          </article>

        </section>
      </section>

      {/* GALERIA */}
      <section id="galeria" className="galeria">
        <h2>Galeria</h2>

        <p>
          Um pequeno espaço para celebrar o universo dos animes.
        </p>

        <section className="galeria-imagens">
          <img
            src="https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=cover,format=auto,quality=85,width=1920/keyart/G3KHEVDJ7-backdrop_wide"
            alt="Ilustração relacionada ao anime O Diário da Apotecária"
          />

          <img
            src="https://i0.wp.com/geekpopnews.com.br/wp-content/uploads/2023/03/Ranking-of-kings-capa.jpg?resize=1200%2C640&ssl=1"
            alt="Ilustração relacionada ao anime Ranking of Kings"
          />

          <img
            src="https://www.gamersegames.com.br/wp-content/uploads/2024/05/Tsukimichi-Moonlit-Fantasy-2.webp"
            alt="Ilustração relacionada ao anime Tsukimichi Moonlit"
          />
        </section>
      </section>

      {/* CONTATO */}
      <section id="contato" className="contato container">
        <h2>Contato</h2>

        <p>
          Quer conversar sobre animes? Entre em contato conosco!
        </p>

        <nav aria-label="Redes sociais">
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/tatianecmessias/" target="_blank" rel="noreferrer">
                LinkdIn
              </a>
            </li>

            <li>
              <a href="https://github.com/TatianeCMessias" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </li>

            <li>
              <a href="tatianemm700@gmail.com">
                E-mail
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </main>
  );
}

export default Main;