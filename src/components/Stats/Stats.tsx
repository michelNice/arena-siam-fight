import './Stats.scss'
const Stats = () => {
    const statsData = [
        { number: '2X', label: 'CAMPEÃ MUNDIAL' },
        { number: '7+', label: 'ANOS DE HISTÓRIA' },
        { number: '3+', label: 'TÍTULOS EXPRESSIVOS'},
        { number: '8X', label: 'CAMPEÃO BRASILEIRO' },
        { number: '40+', label: 'ANOS DO FUNDADOR GM ARTUR MARIANO' },
        {number:'10+',label:'campeão estadual corrigir'}
    ]
    return(
        <section className="stats__section" id='sobre'>
             <div className="stats-section__container">
                {statsData.map((item,index)=> (
                    <div className="stats-section__item" key={index}>
                        <span className="stats-section__number">{item.number}</span>
                        <span className="stats-section__label">{item.label}</span>
                    </div>
                ))}
             </div>
        </section>
    );
}
export default Stats;