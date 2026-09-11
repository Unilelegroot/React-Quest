import "./missionFilter.css"

function MissionFilters({ statusFilter, onStatusChange, technologyFilter, onTechnologyChange }) {
    return(
        <section className="mission-filters">
            <div className="mission-filters_group">
                <label htmlFor="status-filter">Status</label>
                <select 
                    id="status-filter"
                    value={statusFilter}
                    onChange={(e) => onStatusChange(e.target.value)}
                >
                    <option value="Todas">Todas</option>
                    <option value="Pendentes">Pendentes</option>
                    <option value="Concluídas">Concluídas</option>
                </select>

                <label htmlFor="technology-filter">Tecnologia</label>
                <select 
                    id="technology-filter"
                    value={technologyFilter}
                    onChange={(e) => onTechnologyChange(e.target.value)}>
                    
                    <option value="Todas">Todas</option>
                    <option value="React">React</option>
                    <option value="Html">HTML</option>
                    <option value="CSS">CSS</option>
                    <option value="Javascript">JavaScript</option>
                    <option value="Python">Python</option>
                    <option value="Debug">Debug</option>
                    <option value="IA">IA</option>
                    <option value="Git">Git</option>

                </select>
            </div>
        </section>
    )
}

export default MissionFilters