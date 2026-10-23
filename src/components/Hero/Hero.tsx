import React from 'react';
import './Hero.scss';
import logoImg from '../../assets/img/logo.png';
import heroBg from '../../assets/hero-action-bg.jpg';
import { FaChevronDown } from 'react-icons/fa';

const Hero: React.FC = () => {
  return (
    <section className="hero" id="inicio">
      <div className="hero__backdrop">
        <img
          src={heroBg}
          alt="Lutadores de Muay Thai em ação na Arena Siam Fight"
          className="hero__bg-img"
        />
        <div className="hero__overlay-dark" />
        <div className="hero__overlay-gradient" />
        <div className="hero__overlay-vignette" />
        <div className="hero__glow-red" />
        <div className="hero__glow-blue" />
      </div>
      <div className="hero__container">
        <div className="hero__content">
          <div className="hero__badge">
            <span className="hero__badge-text">
              FORJANDO CAMPEÕES • DISCIPLINA • TRADIÇÃO TAILANDESA
            </span>
          </div>
          <div className="hero__logo-wrap">
            <img
              src={logoImg}
              alt="Arena Siam Fight Logo"
              className="hero__logo"
            />
          </div>

    
          <div className="hero__sub-badge">
            <span className="hero__sub-badge-line" />
            <span className="hero__sub-badge-label">MUAY THAI AUTÊNTICO</span>
            <span className="hero__sub-badge-line" />
          </div>
          <p className="hero__description">
            Supere seus limites físicos e mentais no maior centro de treinamento
            de Muay Thai da região. Metodologia autêntica, professores renomados.
          </p>
         
          <div className="hero__cta-group">
            <a
              href="#aula-experimental"
              className="hero__btn hero__btn--primary"
            >
              <span className="hero__btn-inner">
                AGENDE UMA AULA EXPERIMENTAL
              </span>
            </a>

            <a
              href="#sobre-nos"
              className="hero__btn hero__btn--secondary"
            >
              <span className="hero__btn-inner">
                CONHEÇA A ACADEMIA
              </span>
            </a>
          </div>
        </div>
      </div>
      <a href="#sobre" className="hero__scroll-indicator" aria-label="Rolar para baixo">
        <span className="hero__scroll-text">ROLE PARA BAIXO</span>
        <FaChevronDown className="hero__scroll-icon" />
      </a>
    </section>
  );
};

export default Hero;

        