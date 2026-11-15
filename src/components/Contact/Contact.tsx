import React, { useState, useEffect } from 'react';
import './Contact.scss';
import { FaWhatsapp, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  // Inicializa o AOS apenas neste componente
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: false,    
    });
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="contact">
      <div className="contact__container">
        
        <div className="contact__content" data-aos="fade-up">
          <span className="contact__subtitle">Contato</span>
          <h2 className="contact__title">FALE CONOSCO</h2>
        </div>

        <div className="contact__grid">
          
          <div className="contact__infor" data-aos="fade-right">
            <ul className="contact__list">
              <li className="contact-info__item">
                <div className="contact-info__icon-box contact-info__icon-box--whatsapp">
                  <FaWhatsapp />
                </div>
                <div className="contact-info__details">
                  <span className="contact-info__label">TELEFONE / WHATSAPP</span>
                  <a href="https://wa.me/558199877927" className="contact-info__value">
                    (81) 9987-7927
                  </a>
                </div>
              </li>

              <li className="contact-info__item">
                <div className="contact-info__icon-box contact-info__icon-box--instagram">
                  <FaInstagram />
                </div>
                <div className="contact-info__details">
                  <span className="contact-info__label">INSTAGRAM</span>
                  <a
                    href="https://www.instagram.com/arenasiamfight/"
                    target="_blank"
                    rel="noreferrer"
                    className="contact-info__value"
                  >
                    @siamfigth
                  </a>
                </div>
              </li>

              <li className="contact-info__item">
                <div className="contact-info__icon-box contact-info__icon-box--location">
                  <FaMapMarkerAlt />
                </div>
                <div className="contact-info__details">
                  <span className="contact-info__label">MAIN HEADQUARTERS</span>
                  <span className="contact-info__value">
                    Rua Gregório de Matos Guerra, 154 - Ibura, Jaboatão dos Guararapes - PE, 54230-422
                  </span>
                </div>
              </li>
            </ul>
          </div>
          <form onSubmit={handleSubmit} data-aos="fade-left">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your e-mail"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone (optional)"
              value={formData.phone}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Your message..."
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type="submit" className="btn-skewed btn-skewed--full">
              <span>Mandar mensagem</span>
            </button>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;
