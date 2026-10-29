import './AcademyPresentation.scss'
import academy from '../../assets/img/Acadamy_img.png'

function AcademyPresentation() {
    return (
        <section className='AcademyPresentation'>
            <article className='AcademyPresentation__content'>
                <header className='AcademyPresentation__header'>
                    <span className='AcademyPresentation__subtitle'>Quem Somos</span>
                    <h2 className='AcademyPresentation__title'>MAIS QUE UMA ACADEMIA</h2>
                </header>

                <main className='AcademyPresentation__body'>
                    <p>
                        Fundada e liderada pelo Mestre Isaque Hélio, a Arena Siam Fight nasceu com o propósito de ensinar Muay Thai, desenvolver atletas e transformar vidas por meio da disciplina, respeito e dedicação. Ao longo de sua trajetória, a academia vem construindo uma comunidade unida, onde cada aluno encontra espaço para evoluir, superar seus limites e crescer dentro e fora do tatame.
                    </p>
                    <p>
                        Nossa filosofia RUSH — baseada em Respeito, União, Superação e Honra — é o alicerce de tudo que fazemos. Não formamos apenas lutadores. Formamos pessoas melhores.
                    </p>
                </main>
                <footer className='AcademyPresentation__footer'>
                    <a
                        href="#sobre-nos"
                        className="hero__btn hero__btn--primary"
                    >
                        <span className="hero__btn-inner">
                            CONHEÇA A ACADEMIA
                        </span>
                    </a>
                </footer>
            </article>

            <figure className='AcademyPresentation__image-wrapper'>
                <img src={academy} alt="Fachada e estrutura interna da academia Arena Siam Fight" />
            </figure>
        </section>
    );
}

export default AcademyPresentation;