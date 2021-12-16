import Nav from '../components/Nav';
import Footer from '../components/Footer';
import '../styles/Inicio.css';

const Inicio = () => (
  <div>
    <Nav />
    <section className="home-container">
      <div className="name-container">
        <h1>CAIO LIMA<span className="show-hide">.</span></h1>
      </div>
      <div className="dev-container">
        <h2>Desenvolvedor Web Fullstack</h2>
      </div>
      <div className="paragraph-container">
        <p>Amante da tecnologia.</p>
        <p>Em busca de novos desafios.</p>
        <p>Aprender a aprender.</p>
      </div>
    </section>
    <Footer />
  </div>
);

export default Inicio;
