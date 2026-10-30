import ProjectForm from "../components/ProjectForm"
import ProjectCard from "../components/ProjectCard"
import GitHubExplorer from "../components/GitHubExplorer"

function ProjectPage({ projects, addProject, deleteProject, editProject, setEditProject, updateProject, importRepository }) {
    return (
        <section className="projects-section">
            <div className="projects-section_header">
                <div>
                    <span className="section-heading_tag">Projetos</span>
                    <h2>Central de Projetos</h2>
                    <p>Projetos construídos durante a minha jornada.</p>
                    <p className="projects-count">Total de projetos:{" "}{projects.length}</p>
                </div>
            </div>

            <ProjectForm 
                onAddProject={addProject} 
                onUpdateProject={updateProject}
                editProject={editProject}
            />


            <div className="projects-grid">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        technologies={project.technologies}
                        status={project.status}
                        gitHubURL={project.gitHubURL}
                        deployURL={project.deployURL}
                        onDelete={() => deleteProject(project.id)}
                        onEdit={() => setEditProject(project)}
                    />
                ))}
            </div>

            <GitHubExplorer 
                projects={projects}
                onImportRepository={importRepository}
            />
        </section>
    )
}

export default ProjectPage