import { useState } from "react"
import { Routes, Route } from "react-router"
import "./App.css"

import DashboardPage from "./pages/DashboardPage";
import MissionPage from "./pages/MissionPage";
import ProjectPage from "./pages/ProjectPage";
import EvolutionPage from "./pages/EvolutionPage";

import Header from "./components/Header"
import Footer from "./components/Footer"
import Navigation from "./components/Navigation"



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
    gitHubURL: "https://github.com/seu-usuario/desenho-com-gestos",
    deployURL: "",
  },

  {
    id: 2,
    title: "Detector de Invasores",
    description: "Jogo desenvolvido em Python com detecção e interação.",
    technologies: ["Python", "Pygame"],
    status: "Concluído",
    gitHubURL: "https://github.com/seu-usuario/detector-de-invasores",
    deployURL: "",
  },

  {
    id: 3,
    title: "Loja Virtual com IA",
    description:
      "Loja virtual que utiliza inteligência artificial para auxiliar o usuário.",
    technologies: ["Python", "Flask", "HTML", "CSS"],
    status: "Concluído",
    gitHubURL: "https://github.com/seu-usuario/loja-virtual-com-ia",
    deployURL: "",
  },
  
  {
    id: 4,
    title: "React Quest",
    description:
      "Aplicação web que permite criar e gerenciar missões de aprendizado em React.",
    technologies: ["React", "HTML", "CSS", "JavaScript", "Vite"],
    status: "Concluído",
    gitHubURL: "https://github.com/seu-usuario/react-quest",
    deployURL: "",
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
  const [projects, setProjects] = useState(initialProjects)
  const [editProject, setEditProject] = useState(null)

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

  function addProject(newProject) {
    setProjects([...projects, newProject])
  }

  function deleteProject(projectId) {
    const deveriaDeletar = window.confirm("Tem certeza que deseja excluir este projeto?")
    if (!deveriaDeletar) {
      return
    }
    setProjects(projects.filter((project) => project.id !== projectId))
  }

  function updateProject(updatedProject) {
    const updatedProjects = projects.map((project) =>
      project.id === updatedProject.id ? updatedProject : project,
    )
    setProjects(updatedProjects)
    setEditProject(null)
  }



  const completedMissions = missions.filter((mission) => mission.completed)

  const completedMissionsCount = completedMissions.length

  const earnedXP = completedMissions.reduce((total, mission) => total + mission.xp, 0)

  const distinctTechnologies = new Set(
    projects.flatMap((project) =>
      project.technologies.map((technology) => technology.trim()).filter(Boolean),
    ),
  ).size

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


  const completedProjects = projects.filter((project) => project.status === "Concluído")
  const tecXP = {}
  completedProjects.forEach((project) => {
    project.technologies.forEach((technology) => {
      if (!tecXP[technology]) {
        tecXP[technology] = 0
      }
      tecXP[technology] += 50
    })
  })

  const skills = Object.entries(tecXP).map(([technology, xp]) => ({ technology, xp }))
  const hasSkillAchievement =
  skills.some(
    (skill) =>
      skill.xp >= 100
  );

  const isExplorer = skills.length >= 3
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
      value: projects.length,
      description: "Projetos cadastrados"
    },
    {
      id: 3,
      title: "Tecnologias",
      value: distinctTechnologies,
      description: "Tecnologias utilizadas em projetos"
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

  return (
    <main className="app">
      <Header />
      <Navigation />

      <div className="dashboard">
        <Routes>
          <Route
            path="/"
            element={<DashboardPage summaryData={summaryData} />}
          />

          <Route
            path="/mission"
            element={
              <MissionPage
                missions={missions}
                filteredMissions={filteredMissions}
                sortedMissions={sortedMissions}
                editingMission={editingMission}
                searchTerm={searchTerm}
                statusFilter={statusFilter}
                technologyFilter={technologyFilter}
                difficultyFilter={difficultyFilter}
                sortOrder={sortOrder}
                onAddMission={addMission}
                onUpdateMission={updateMission}
                onSearchChange={setSearchTerm}
                onStatusChange={setStatusFilter}
                onTechnologyChange={setTechnologyFilter}
                onDifficultyChange={setDifficultyFilter}
                onSortOrderChange={setSortOrder}
                onToggleMission={toogleMission}
                onDeleteMission={deleteMission}
                onEditMission={setEditingMission}
              />
            }
          />

          <Route
            path="/project"
            element={<ProjectPage 
              projects={projects} 
              addProject={addProject} 
              deleteProject={deleteProject} 
              updateProject={updateProject} 
              editProject={editProject}
              setEditProject={setEditProject} />}
          />

          <Route
            path="/evolution"
            element={
            <EvolutionPage 
            skills={skills} 
            hasSkillAchievement={hasSkillAchievement}
            isExplorer={isExplorer}
            />}
          />
        </Routes>
      </div>

      <Footer />
    </main>
  )
}

export default App