import { useState } from "react"
import "./app.css"
import Header from "./components/Header"
import Welcome from "./components/Welcome"
import Footer from "./components/Footer"
import ProfileCard from "./components/ProfileCard"
import SummaryCard from "./components/SummaryCard"
import MissionCard from "./components/MissionCard"
import MissionForm from "./components/MissionForm"
import MissionSearch from "./components/MissionSearch"
import MissionFilter from "./components/MissionFilter"
import ProjectCard from "./components/ProjectCard"



const initialMissions = [
  {
    id: 1,
    title: "Criar componente de perfil",
    description: "Monte um card com nome, codinome e área favorita.",
    technology: "React",
    difficulty: "Fácil",
    xp: 50,
    completed: true,
  },
  {
    id: 2,
    title: "Reutilizar um componente",
    description: "Use o mesmo componente para exibir dados diferentes.",
    technology: "React",
    difficulty: "Fácil",
    xp: 70,
    completed: true,
  },
  {
    id: 3,
    title: "Criar a Central de Missões",
    description: "Exiba uma lista de missões utilizando componentes.",
    technology: "React",
    difficulty: "Média",
    xp: 100,
    completed: false,
  },
  {
    id: 4,
    title: "Investigar um erro",
    description: "Encontre e corrija um problema de props ou estado.",
    technology: "Debug",
    difficulty: "Média",
    xp: 80,
    completed: false,
  },
]

const initialProjects = [
  {
    id: 1,
    title: "Desenho com Gestos",
    description: "Te permite desenhar na tela usando gestos e movimentos.",
    technologies: ["Python", "Mídia Pipe", "OpenCV"],
    status: "Em andamento",
  },

  {
    id: 2,
    title: "Detector de Invasores",
    description: "Jogo desenvolvido em Python com detecção e interação.",
    technologies: ["Python", "Pygame"],
    status: "Concluído",
  },

  {
    id: 3,
    title: "Loja Virtual com IA",
    description:
      "Loja virtual que utiliza inteligência artificial para auxiliar o usuário.",
    technologies: ["Python", "Flask", "HTML", "CSS"],
    status: "Concluído",
  },

]

function App() {
  const [missions, setMissions] = useState(initialMissions)
  // const [projects, setProjects] = useState(initialProjects)
  const [editingMission, setEditingMission] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("Todas")
  const [technologyFilter, setTechnologyFilter] = useState("Todas")
  const [difficultyFilter, setDifficultyFilter] = useState("Todas")
  const [sortOrder, setSortOrder] = useState("Maior XP");


  // console.log(searchTerm)


  function toogleMission(missionId) {
    const updatedMissions = missions.map((mission) => {
      if (mission.id === missionId) {
        return {
          ...mission,
          completed: !mission.completed,
        }
      }
      return mission
    })
    setMissions(updatedMissions)
  }

  function addMission(newMission) {
    setMissions([...missions, newMission])
  }

  function deleteMission(missionId) {
    const updatedMissions = missions.filter(
      (mission) => mission.id !== missionId
    )
    setMissions(updatedMissions)
  }

  function updateMission(updatedMission) {
    const updatedMissions = missions.map((mission) =>
      mission.id === updatedMission.id ? updatedMission : mission,
    )
    setMissions(updatedMissions)
    setEditingMission(null)
  }

  const completedMissions = missions.filter((mission) => mission.completed)

  const completedMissionsCount = completedMissions.length

  const earnedXP = completedMissions.reduce((total, mission) => total + mission.xp, 0)

  const filteredMissions = missions.filter(
    // (mission) => mission.title.toLowerCase().includes(searchTerm.toLowerCase())
    (mission) => {
      const matchesSearch = mission.title.toLowerCase().includes(
        searchTerm.toLowerCase()
      )
      const matchesStatus = statusFilter === "Todas" ||
        (statusFilter === "Concluídas" && mission.completed) ||
        (statusFilter === "Pendentes" && !mission.completed)

      const matchesTechnology = technologyFilter === "Todas" ||
        mission.technology === technologyFilter

      const matchesDifficulty = difficultyFilter === "Todas" ||
        mission.difficulty === difficultyFilter


      return matchesSearch && matchesStatus && matchesTechnology && matchesDifficulty
    }
  )

  const sortedMissions =
    [...filteredMissions].sort(
      (a, b) => {
        if (sortOrder === "Menor XP") {
          return a.xp - b.xp; //menor para o maior
        }

        return b.xp - a.xp; //maior para o menor
      }
    );

  const summaryData = [
    {
      id: 1,
      title: "Missões",
      value: completedMissionsCount,
      description: `${missions.length} missões cadastradas`
    },
    {
      id: 2,
      title: "Projetos",
      value: 5,
      description: "Projetos cadastrados"
    },
    {
      id: 3,
      title: "Tecnologias",
      value: 5,
      description: "Tecnologias dominadas"
    },
    {
      id: 4,
      title: "Avanço",
      value: 5,
      description: "Progresso na jornada"
    },
    {
      id: 5,
      title: "XP",
      value: earnedXP,
      description: "Experiência adquirida"
    }
  ]

  onclick = () => {
    setSortedMission()
  }

  return (
    <main className="app">
      <Header />
      <div className="dashboard">
        <Welcome />
        <ProfileCard
          name="Helena"
          codiname="Helena"
          favoriteArea="Desenvolvimento de jogos e sites"
          level="XXI" />

        <section className="summary-section" >
          <h2>Resumo da Jornada</h2>
          <div className="summary-grid">
            {summaryData.map((item) => (
              <SummaryCard
                key={item.id}
                title={item.title}
                value={item.value}
                description={item.description} />
            ))}
          </div>
        </section>

        <MissionForm
          onAddMission={addMission}
          editingMission={editingMission}
          onUpdateMission={updateMission}
        />

        <section className="missions-section">
          <MissionSearch
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
          />
          <MissionFilter
            statusFilter={statusFilter}
            onStatusChange={setStatusFilter}
            technologyFilter={technologyFilter}
            onTechnologyChange={setTechnologyFilter}
            difficultyFilter={difficultyFilter}
            onDifficultyChange={setDifficultyFilter}
            sortOrder={sortOrder}
            onSortOrderChange={setSortOrder}
          />

          <p className="mission-results">
            {filteredMissions.length}
            {""}
            {filteredMissions.length === 1 ? " Missão Encontrada" : " Missões Encontradas"}
          </p>

          <div className="section-heading">
            <div>
              <p className="section-heading_tag">Central de Missões</p>
              <h2>Próximos Desafios</h2>
            </div>
            <span>{missions.length} missões</span>
          </div>

          <div className="missions-grid">
            {sortedMissions.length === 0
              ? (<div className="empty-state">
                <h3>Nenhuma missão encontrada</h3>

                <label>
                  Tente alterar sua busca ou
                  seus filtros.
                </label>
              </div>)
              :

              (sortedMissions.map((mission) => (
                <MissionCard
                  key={mission.id}
                  title={mission.title}
                  description={mission.description}
                  technology={mission.technology}
                  difficulty={mission.difficulty}
                  xp={mission.xp}
                  completed={mission.completed}
                  onToggle={() => toogleMission(mission.id)}
                  onDelete={() => deleteMission(mission.id)}
                  onEdit={() => setEditingMission(mission)}
                />
              )))}
          </div>
        </section>

        <section className="projects-section">
          <div className="project-section_header">
            <div>
              <span className="section-heading_tag">Projetos</span>
              <h2>Central de Projetos</h2>
              <p>Projetos construídos durante a minha jornada.</p>
            </div>
            <div className="projects-grid">
              {
                initialProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    technologies={project.technologies}
                    status={project.status}
                  />
                ))
              }
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </main>
  )
}

export default App