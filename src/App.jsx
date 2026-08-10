import "./App.css"
import Header from "./components/Header"
import Welcome from "./components/Welcome"
import Footer from "./components/Footer"
import ProfileCard from "./components/ProfileCard"
function App() {
  return (
    <main className="app">
      <Header />
      <div className="dashboard">
        <ProfileCard
          name="Helena"
          codiname="Helena"
          favoriteArea="Desenvolvimento de jogos e sites"
          level="XXI"/>
        <Welcome />
      </div>
      <Footer />
    </main>
  )
}

export default App