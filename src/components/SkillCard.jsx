import "./skillCard.css"

function SkillCard({ technology, xp }) {
    const progress = Math.min(Math.max((xp / 200) * 100, 0), 100)

    return (
        <article className="skillCard">
            <h3 className="skillCard_technology">{technology}</h3>
            <p className="skillCard_xp">{xp} XP</p>
            <div
                className="skillCard_progress"
                role="progressbar"
                aria-label={`Progresso em ${technology}`}
                aria-valuenow={progress}
                aria-valuemin="0"
                aria-valuemax="100"
            >
                <div
                    className="skillCard_progressBar"
                    style={{ width: `${progress}%` }}
                />
            </div>
        </article>
    )
}

export default SkillCard
