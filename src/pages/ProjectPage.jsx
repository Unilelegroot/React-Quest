import ProjectForm from "../components/ProjectForm"
import ProjectCard from "../components/ProjectCard"

function ProjectPage({ projects, addProject }) {
    return (
        <section className="projects-section">
            <div className="projects-section_header">
                <div>
                    <span className="section-heading_tag">Projetos</span>
                    <h2>Central de Projetos</h2>
                    <p>Projetos construídos durante a minha jornada.</p>
                </div>
            </div>

            <ProjectForm 
                onAddProject={addProject} 
            />


            <div className="projects-grid">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        technologies={project.technologies}
                        status={project.status}
                    />
                ))}
            </div>
        </section>
    )
}

export default ProjectPage