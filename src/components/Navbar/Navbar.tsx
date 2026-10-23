
import { useState } from 'react';
import img from '../../assets/img/logo.png';
import './Navbar.scss';
import {FaBars,FaHome, FaImages,FaUser,FaTimes,FaUsers,FaEllipsisH,} from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  const menuItems = [
    { id: 1, label: 'HOME', href: '/', active: true },
    { id: 2, label: 'SOBRE NÓS', href: '/sobre-nos', active: false },
    { id: 3, label: 'MUAY THAI', href: '/muay-thai', active: false },
    { id: 4, label: 'GALERIA', href: '/galeria', active: false },
    { id: 5, label: 'NOTÍCIAS', href: '/noticias', active: false },
    { id: 6, label: 'FRANQUIA', href: '/franquia', active: false },
  ];

  return (
    <div className="navbar">
      <div className="navbar__showcase">
        <p className="navbar__phone">📞 (21) 96777-1277</p>

        <div className="navbar__socials">
          <a href="#" className="navbar__social-link">INSTAGRAM</a>
          <a href="#" className="navbar__social-link">YOUTUBE</a>
          <a href="#" className="navbar__social-link">FACEBOOK</a>
        </div>
      </div>

      <div className="navbar__main">
        <img src={img} alt="Arena Siam Fight" className="nav__logo" />

        <ul className="navbar__list">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`navbar__item ${item.active ? 'active' : ''}`}
            >
              <a href={item.href} className="navbar__link">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="navbar__actions">
          <button className="btn btn--primary">
            ATLETA SIAM
          </button>

          <button className="btn btn--secondary">
            AULA EXPERIMENTAL
          </button>
        </div>

        <div className="navbar__mobile-actions">
        
          <button
            type="button"
            className="navbar__icon-button"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      <div
        className={`navbar__mobile-menu ${
          menuOpen ? 'navbar__mobile-menu--open' : ''
        }`}
        aria-hidden={!menuOpen}
      >
        <nav aria-label="Navegação mobile">
          {menuItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="navbar__mobile-link"
              tabIndex={menuOpen ? 0 : -1}
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      <nav className="navbar__bottom" aria-label="Navegação rápida">
        <a
          href="/"
          className="navbar__bottom-link navbar__bottom-link--active"
        >
          <FaHome />
          <span>HOME</span>
        </a>

        <a href="/sobre-nos" className="navbar__bottom-link">
          <FaUser />
          <span>SOBRE NÓS</span>
        </a>

        <a href="/muay-thai" className="navbar__bottom-link">
          <FaUsers />
          <span>MUAY THAI</span>
        </a>

        <a href="/galeria" className="navbar__bottom-link">
          <FaImages />
          <span>GALERIA</span>
        </a>

        <button
          type="button"
          className="navbar__bottom-link"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
        >
          <FaEllipsisH />
          <span>MAIS</span>
        </button>
      </nav>
      <div className='body'>

      </div>
    </div>
  );
};

export default Navbar;