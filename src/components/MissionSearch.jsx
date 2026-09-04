import "./missionSearch.css"

function MissionSearch({ searchTerm, onSearchChange }) {
    return (
        <section className="mission-search">
            <label htmlFor="mission-search">Buscar Missão</label>
            <input
                type="text"
                id="mission-search"
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Digite o nome da missão..."
            ></input>
        </section>
    )
}

export default MissionSearch