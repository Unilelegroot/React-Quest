import "./missionCard.css" 

function MissionCard({ title, description, technology, difficulty, xp, completed, onToggle}) {
    return(
        <article className={`mission-card ${completed ? "mission-card--completed" : ""}`}> 
            <div className="mission-card_header">
                <span className="mission-card_technology">{technology}</span>
                <span className="mission-card_difficulty">{difficulty}</span>
            </div>
            <h3>{title}</h3>
            <p className="mission-card_description">{description}</p>
            <div className="mission-card_footer">
                <strong className="mission-card_xp">{xp} XP</strong>
                <button type="button" className="mission-card_button" onClick={onToggle}>
                    {completed ? "Reabrir missão" : "Concluir missão"}
                </button>
            </div>
        </article>
    )
}

export default MissionCard