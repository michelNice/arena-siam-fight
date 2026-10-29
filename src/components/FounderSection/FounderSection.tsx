import './FounderSection.scss';
import img from '../../assets/img/seam.png'
function FounderSection(){
     return(
        <section className='founder'>
            <div>
            <img src={img} alt="" />
        </div>
            <h2>ARTUR MARIANO<span>MESTRE</span></h2>
              <div>
                  <p>
                      Com anos de dedicação ao Muay Thai, Mestre Isaque Lima construiu sua trajetória com base na disciplina, respeito e compromisso com a arte das 8 armas. Em 2014, iniciou sua jornada à frente da Arena Siam Fight, com o propósito de
                       ensinar e fortalecer o Muay Thai, formando praticantes dentro e fora do tatame.
                  </p>
                  <p>
                    Ao longo dessa trajetória, a Arena Siam Fight tornou-se um espaço dedicado ao desenvolvimento técnico, físico e pessoal de seus alunos,
                     valorizando a tradição do Muay Thai e a evolução de cada praticante.
                  </p>
              </div>
              <div>
                    <p>"O Muay Thai não é apenas uma arte marcial. É uma filosofia de vida que transforma corpos, mentes e almas.
                         Cada aluno que entra na nossa academia sai como uma pessoa melhor."</p>
              </div>
              <a
              href="#sobre-nos"
              className="hero__btn hero__btn--secondary"
            >Ver Trajetória Completa</a>
        
        </section>
    
     );
}

export default FounderSection;