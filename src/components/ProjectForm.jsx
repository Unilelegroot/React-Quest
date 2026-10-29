import { useState, useEffect } from "react"
import "./projectForm.css"

function ProjectForm({ onAddProject, editProject, onUpdateProject }) {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [technologies, setTechnologies] = useState("")
    const [status, setStatus] = useState("Em andamento")
    const [gitHubURL, setGitHubURL] = useState("")
    const [deployURL, setDeployURL] = useState("")

    useEffect(() => {
        if (editProject) {
            // Synchronize the form fields when the selected project changes.
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setTitle(editProject.title)
            setDescription(editProject.description)
            setTechnologies(editProject.technologies.join(", "))
            setStatus(editProject.status)
            setGitHubURL(editProject.gitHubURL || "")
            setDeployURL(editProject.deployURL || "")
        }
    }, [editProject])

    function handleSubmit(event) {
        event.preventDefault()
        
        if ((gitHubURL && !gitHubURL.startsWith("http://") && !gitHubURL.startsWith("https://")) || 
            (deployURL && !deployURL.startsWith("http://") && !deployURL.startsWith("https://"))) {
            alert("Por favor, insira URLs válidas para o GitHub e/ou o deploy.")
            return
        }

        const projectData = {
            id: editProject ? editProject.id : Date.now(),
            title,
            description,
            technologies: technologies.split(",").map((tech) => tech.trim()),
            status,
            gitHubURL,
            deployURL,
        }

        if (editProject) {
            onUpdateProject(projectData)
        } else {
            onAddProject(projectData)
        }

        setTitle("")
        setDescription("")
        setTechnologies("")
        setStatus("Em andamento")
        setGitHubURL("")
        setDeployURL("")
    }

    return (
        <section className="project-form-section">
            <div className="project-form-heading">
                <p>Novo projeto</p>
                <h2>Adicione seu projeto</h2>
            </div>
            <form className="project-form" onSubmit={handleSubmit}>
                <div className="project-form_group">
                    <label htmlFor="project-title">Título</label>
                    <input
                        id="project-title"
                        type="text"
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                        required
                    />
                </div>

                <div className="project-form_group">
                    <label htmlFor="project-description">Descrição</label>
                    <textarea
                        id="project-description"
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                        required
                    />
                </div>

                <div className="project-form_group">
                    <label htmlFor="project-technologies">Tecnologias</label>
                    <input
                        id="project-technologies"
                        type="text"
                        value={technologies}
                        onChange={(event) => setTechnologies(event.target.value)}
                        placeholder="Insira as tecnologias separadas por vírgula"
                    />
                </div>

                <div className="project-form_group">
                    <label htmlFor="project-status">Status</label>
                    <select
                        id="project-status"
                        value={status}
                        onChange={(event) => setStatus(event.target.value)}
                    >
                        <option value="Em andamento">Em andamento</option>
                        <option value="Concluído">Concluído</option>
                    </select>
                </div>

                <div className="project-form_group">
                    <label htmlFor="project-github-url">GitHub URL</label>
                    <input
                        id="project-github-url"
                        type="text"
                        value={gitHubURL}
                        onChange={(event) => setGitHubURL(event.target.value)}
                    />
                </div>

                <div className="project-form_group">
                    <label htmlFor="project-deploy-url">Deploy URL</label>
                    <input
                        id="project-deploy-url"
                        type="text"
                        value={deployURL}
                        onChange={(event) => setDeployURL(event.target.value)}
                    />
                </div>

                <button className="project-form__button" type="submit">
                    {editProject ? "Salvar Alterações" : "Adicionar Projeto"}
                </button>
            </form>
        </section>
    )
}

export default ProjectForm
