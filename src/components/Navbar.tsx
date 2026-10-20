import img from '../assets/img/logo.png';
import './Navbar.scss';

const Navbar = () => {
  const menuItems = [
    { id: 1, label: 'HOME', href: '/', active: true },
    { id: 2, label: 'SOBRE NÓS', href: '/sobre-nos', active: false },
    { id: 3, label: 'MUAY THAI', href: '/muay-thai', active: false },
    { id: 4, label: 'GALERIA', href: '/galeria', active: false },
    { id: 5, label: 'NOTÍCIAS', href: '/noticias', active: false },
    { id: 6, label: 'FRANQUIA', href: '/franquia', active: false },
  ];

  return (
    <div className='navbar'>
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
          <button className="btn btn--primary">SEJA FRANQUEADO</button>
          <button className="btn btn--secondary">AULA EXPERIMENTAL</button> 
        </div>
      </div>

      <div className='body'>

      </div>
    </div>
  );
};

export default Navbar;