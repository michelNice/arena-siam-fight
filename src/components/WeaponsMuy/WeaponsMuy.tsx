import './WeaponsMuy.scss';
import img from '../../assets/img/muy.jpg';

function WeaponsMuy() {
    return (
        <section className="weapons-muy">
            <div className="weapons-muy__container">
                <div className="weapons-muy__content">
                    <article className="weapons-muy__article">
                        <header className="weapons-muy__header">
                            <span className="weapons-muy__subtitle">Arte das 8 Armas</span>
                            <h2 className="weapons-muy__title">O QUE É MUAY THAI?</h2>
                        </header>
                        
                        <div className="weapons-muy__body">
                            <p className="weapons-muy__text">
                                O Muay Thai é a arte marcial nacional da Tailândia, conhecida como "A Arte das 8 Armas" por utilizar punhos, cotovelos, 
                                joelhos e canelas como armas de combate. É o esporte de contato mais completo do mundo.
                            </p>

                            {/* Cards das 8 armas baseados na referência visual */}
                            <div className="weapons-muy__grid">
                                <div className="weapons-muy__card">
                                    <span>🥊</span> <strong>2 PUNHOS</strong>
                                </div>
                                <div className="weapons-muy__card">
                                    <span>💪</span> <strong>2 COTOVELOS</strong>
                                </div>
                                <div className="weapons-muy__card">
                                    <span>🦵</span> <strong>2 JOELHOS</strong>
                                </div>
                                <div className="weapons-muy__card">
                                    <span>🦵</span> <strong>2 CANELAS</strong>
                                </div>
                            </div>

                            <p className="weapons-muy__text">
                                Além da técnica, o Muay Thai desenvolve disciplina mental, condicionamento físico excepcional,
                                autoconfiança e respeito — valores que a Champions Factory cultiva em todos os seus alunos.
                            </p>
                        </div>
                    </article>

                    <a href="#sobre-nos" className="weapons-muy__btn">
                        <span className="weapons-muy__btn-inner">
                            CONHEÇA A ACADEMIA
                        </span>
                    </a>
                </div>

                <figure className="weapons-muy__figure">
                    <img src={img} alt="Lutadores de Muay Thai em combate" />
                </figure>
            </div>
        </section>
    );
}

export default WeaponsMuy;