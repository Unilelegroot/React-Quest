import "./App.css"
import Header from "./components/Header"
import Welcome from "./components/Welcome"
import Footer from "./components/Footer"
import ProfileCard from "./components/ProfileCard"
import SummaryCard from "./components/SummaryCard"

const summaryData = [
{
  id:1,
  title: "Missões",
  value: 5,
  description: "Desafios disponíveis"
},
{
  id:2,
  title: "Projetos",
  value: 5,
  description: "Projetos cadastrados"
},
{
  id:3,
  title: "Tecnologias",
  value: 5,
  description: "Tecnologias dominadas"
},
{
  id:4,
  title: "Avanço",
  value: 5,
  description: "Progresso na jornada"
},
{
  id:5,
  title: "XP",
  value: 5,
  description: "Experiência adquirida"
}
]

function App() {
  return (
    <main className="app">
      <Header />
      <div className="dashboard">
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
        <Welcome />
      </div>
      <Footer />
    </main>
  )
}

export default App