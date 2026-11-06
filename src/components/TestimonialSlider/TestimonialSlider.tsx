import './TestimonialSlider.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { FaStar } from 'react-icons/fa';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  testimonial: string;
  rating: number;
}
function TestimonialSlider() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Lucas Mendes",
      role: "Aluno há 2 anos",
      testimonial: "Treinar na Arena Siam Fight mudou completamente a minha rotina e a minha disposição no dia a dia. Antes de começar, eu buscava apenas uma atividade física para sair do sedentarismo",
      rating: 5
    },
    {
      id: 2,
      name: "Camila Rocha",
      role: "Aluna há 8 meses",
      testimonial: "Entrei buscando apenas uma atividade física para sair do sedentarismo, mas encontrei uma verdadeira família. A estrutura da academia é diferenciada e minha evolução física nesses meses foi surreal.",
      rating: 5
    },
    {
      id: 3,
      name: "Matheus Oliveira",
      role: "Praticante há 3 anos",
      testimonial: "A disciplina e o respeito que a equipe transmite dentro do tatame são os maiores diferenciais. O treino é puxado na medida certa e se tornou minha principal válvula de escape para o estresse.",
      rating: 5
    },
    {
      id: 4,
      name: "Beatriz Lima",
      role: "Aluna há 1 ano",
      testimonial: "Sempre tive receio de entrar em artes marciais por achar o ambiente intimidador, mas a recepção quebrou todas as minhas barreiras. Treinos dinâmicos e acompanhamento de alto nível!",
      rating: 5
    },
    {
      id: 5,
      name: "Gabriel Fonseca",
      role: "Aluno há 1 ano e meio",
      testimonial: "A qualidade dos instrutores e o padrão das instalações mostram de cara a excelência da escola. Perdi peso, ganhei autoconfiança e fiz grandes amigos no tatame.",
      rating: 5
    }
  ];

  return (
    <section className="testimonial-slider" id="depoimentos">
      <div className="testimonial-slider__container">
        <header className="testimonial-slider__header">
          <span className="testimonial-slider__subtitle">Depoimentos</span>
          <h2 className="testimonial-slider__title">O QUE NOSSOS ALUNOS FALAM</h2>
        </header>

        <div className="testimonial-slider__wrapper-swiper">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{
              el: '.testimonial-slider__pagination',
              clickable: true,
            }}
            navigation={false}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 24,
                navigation: true,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
                navigation: true,
              },
            }}
            className="testimonial-slider__swiper"
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="testimonial-card">
                  <div className="testimonial-card__stars">
                    {[...Array(item.rating)].map((_, index) => (
                      <FaStar key={index} className="testimonial-card__star-icon" />
                    ))}
                  </div>
                  <p className="testimonial-card__text">"{item.testimonial}"</p>
                  <div className="testimonial-card__info">
                    <h3 className="testimonial-card__name">{item.name}</h3>
                    <span className="testimonial-card__role">{item.role}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="testimonial-slider__pagination" />
        </div>
      </div>
    </section>
  );
}

export default TestimonialSlider;