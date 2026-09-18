import "./projectCard.css"

function ProjectCard({title, description, technologies, status}) {
    return(
        <article className="project-card">
            <span className="project-card_status">{status}</span>
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="project-card_technologies">
            {technologies.map((technology) => (
                    <span key={technology} className="project-card_technology">{technology}</span>
                ))}
                </div> 
        </article>
    )
}

export default ProjectCard