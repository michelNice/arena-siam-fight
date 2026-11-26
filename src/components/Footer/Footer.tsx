import type { MouseEvent } from 'react';
import './Footer.scss';
import logo from '../../assets/img/logo.png';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

function Footer() {
  const handleSmoothScroll = (
    e: MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      targetElement.setAttribute('tabindex', '-1');
      targetElement.focus({ preventScroll: true });
      window.history.pushState(null, '', `#${targetId}`);
    }
  };

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__top">
          <div className="footer__brand">
            <div className="footer__logo">
              <img
                src={logo}
                alt="Logo Arena Siam Fight"
                className="footer__logo-img"
              />
            </div>

            <p className="footer__description">
              Há mais de 15 anos formando atletas e transformando vidas
              através do Muay Thai. Sob a liderança do Mestre Isaque Hélio,
              ensinamos disciplina, superação e respeito, ajudando cada
              aluno a alcançar seu potencial.
            </p>

            <div className="footer__socials">
              <a
                href="https://www.instagram.com/arenasiamfight/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="footer__social-btn footer__social-btn--instagram"
              >
                <FaInstagram className="footer__social-icon" />
              </a>

              <a
                href="https://wa.me/5581999877927"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="footer__social-btn footer__social-btn--whatsapp"
              >
                <FaWhatsapp className="footer__social-icon" />
              </a>
            </div>
          </div>

          <div className="footer__column">
            <h3 className="footer__column-title">NAVEGAÇÃO</h3>
            <ul className="footer__list">
              <li>
                <a
                  href="#inicio"
                  onClick={(e) => handleSmoothScroll(e, 'inicio')}
                  className="footer__link"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#sobre"
                  onClick={(e) => handleSmoothScroll(e, 'sobre')}
                  className="footer__link"
                >
                  Sobre Nós
                </a>
              </li>
              <li>
                <a
                  href="#muay-thai"
                  onClick={(e) => handleSmoothScroll(e, 'muay-thai')}
                  className="footer__link"
                >
                  Muay Thai
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__column">
            <h3 className="footer__column-title">CONTEÚDO</h3>
            <ul className="footer__list">
              <li>
                <a
                  href="#contato"
                  onClick={(e) => handleSmoothScroll(e, 'contato')}
                  className="footer__link"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__column">
            <h3 className="footer__column-title">CONTATO</h3>
            <ul className="footer__list">
              <li>
                <a href="tel:+5581999877927" className="footer__link">
                  (81) 99987-7927
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5581999877927"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__link"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  onClick={(e) => handleSmoothScroll(e, 'contato')}
                  className="footer__link"
                >
                  Aula Experimental
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © 2026 Arena Siam Fight. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
