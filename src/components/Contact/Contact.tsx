import React, { useState } from 'react';
import './Contact.scss';
import { FaWhatsapp, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa';

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const texto = `Olá! Sou ${formData.name} (${formData.email}).
Telefone: ${formData.phone || 'Não informado'}.
Mensagem: ${formData.message}`;

    const url = `https://wa.me/5581999877927?text=${encodeURIComponent(texto)}`;

    window.open(url, '_blank');
  };

  return (
    <section className="contact" id="contato">
      <div className="contact__container">
        <div className="contact__content" data-aos="fade-up">
          <span className="contact__subtitle">Contato</span>
          <h2 className="contact__title">FALE CONOSCO</h2>
        </div>

        <div className="contact__grid">
          <div className="contact__info" data-aos="fade-right">
            <ul className="contact__list">
              <li className="contact__info-item">
                <div className="contact__info-icon-box contact__info-icon-box--whatsapp">
                  <FaWhatsapp />
                </div>

                <div className="contact__info-details">
                  <span className="contact__info-label">
                    TELEFONE / WHATSAPP
                  </span>

                  <a
                    href="https://wa.me/5581999877927"
                    target="_blank"
                    rel="noreferrer"
                    className="contact__info-value"
                  >
                    (81) 99987-7927
                  </a>
                </div>
              </li>

              <li className="contact__info-item">
                <div className="contact__info-icon-box contact__info-icon-box--instagram">
                  <FaInstagram />
                </div>

                <div className="contact__info-details">
                  <span className="contact__info-label">INSTAGRAM</span>

                  <a
                    href="https://www.instagram.com/arenasiamfight/"
                    target="_blank"
                    rel="noreferrer"
                    className="contact__info-value"
                  >
                    @arenasiamfight
                  </a>
                </div>
              </li>

              <li className="contact__info-item">
                <div className="contact__info-icon-box contact__info-icon-box--location">
                  <FaMapMarkerAlt />
                </div>

                <div className="contact__info-details">
                  <span className="contact__info-label">SEDE PRINCIPAL</span>

                  <span className="contact__info-value">
                    Rua Gregório de Matos Guerra, 154 - Ibura, Jaboatão dos
                    Guararapes - PE, 54230-422
                  </span>
                </div>
              </li>
            </ul>
          </div>

          <form
            className="contact__form"
            onSubmit={handleSubmit}
            data-aos="fade-left"
          >
            <input
              type="text"
              name="name"
              placeholder="Seu nome"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Seu e-mail"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Telefone (opcional)"
              value={formData.phone}
              onChange={handleChange}
            />

            <textarea
              name="message"
              placeholder="Sua mensagem..."
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
            />

            <button
              type="submit"
              className="btn-skewed btn-skewed--full"
            >
              <span>Mandar mensagem</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
