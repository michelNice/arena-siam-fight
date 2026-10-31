import './FounderSection.scss';
import img from '../../assets/img/treiner.jpg'
function FounderSection(){
     return(
        <section className='founder'>
            <div className="founder__container">
                 <div className="founder__image-wrapper">
                     <span className="founder__tag">O Fundador</span>
                     <div className="founder__img-box">
                        <img src={img} alt="Mestre Isaque Lima" className="founder__img" />
                            <div className="founder__img-badge">
                            <strong>ISAQUE LIMA</strong>
                            <span>MESTRE - FUNDADOR</span>
                        </div>
                     </div>
                 </div>
            </div>
            <div className='founder__content'>
                 <h2 className="founder__title">ISAQUE LIMA <span>MESTRE</span></h2>
                 <div className="founder__texts">
                    <p>
                            Com anos de dedicação ao Muay Thai, Mestre Isaque Lima construiu sua trajetória com base na disciplina, respeito e compromisso com a arte das 8 armas. Em 2014, iniciou sua jornada à frente da Arena Siam Fight, com o propósito de ensinar e fortalecer o Muay Thai, formando praticantes dentro e fora do tatame.
                        </p>
                        <p>
                            Ao longo dessa trajetória, a Arena Siam Fight tornou-se um espaço dedicado ao desenvolvimento técnico, físico e pessoal de seus alunos, valorizando a tradição do Muay Thai e a evolução de cada praticante.
                        </p>
                 </div>
                 <blockquote className="founder__quote">
                        <p>
                            "O Muay Thai não é apenas uma arte marcial. É uma filosofia de vida que transforma corpos, mentes e almas. Cada aluno que entra na nossa academia sai como uma pessoa melhor."
                        </p>
                 </blockquote>
                 <a href="#contato" className="hero__btn hero__btn--secondary founder__btn">
                        Ver Trajetória Completa
                    </a>
            </div>
        </section>
    
     );
}

export default FounderSection;