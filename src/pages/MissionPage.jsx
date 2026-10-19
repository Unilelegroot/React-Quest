import MissionForm from "../components/MissionForm"
import MissionSearch from "../components/MissionSearch"
import MissionFilter from "../components/MissionFilter"
import MissionCard from "../components/MissionCard"

function MissionPage({
    missions,
    filteredMissions,
    sortedMissions,
    editingMission,
    searchTerm,
    statusFilter,
    technologyFilter,
    difficultyFilter,
    sortOrder,
    onAddMission,
    onUpdateMission,
    onSearchChange,
    onStatusChange,
    onTechnologyChange,
    onDifficultyChange,
    onSortOrderChange,
    onToggleMission,
    onDeleteMission,
    onEditMission,
}) {
    return (
        <>
            <MissionForm
                onAddMission={onAddMission}
                editingMission={editingMission}
                onUpdateMission={onUpdateMission}
            />

            <section className="missions-section">
                <MissionSearch
                    searchTerm={searchTerm}
                    onSearchChange={onSearchChange}
                />
                <MissionFilter
                    statusFilter={statusFilter}
                    onStatusChange={onStatusChange}
                    technologyFilter={technologyFilter}
                    onTechnologyChange={onTechnologyChange}
                    difficultyFilter={difficultyFilter}
                    onDifficultyChange={onDifficultyChange}
                    sortOrder={sortOrder}
                    onSortOrderChange={onSortOrderChange}
                />

                <p className="missions-results">
                    {filteredMissions.length}
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
                    {sortedMissions.length === 0 ? (
                        <div className="empty-state">
                            <h3>Nenhuma missão encontrada</h3>
                            <label>
                                Tente alterar sua busca ou seus filtros.
                            </label>
                        </div>
                    ) : (
                        sortedMissions.map((mission) => (
                            <MissionCard
                                key={mission.id}
                                title={mission.title}
                                description={mission.description}
                                technology={mission.technology}
                                difficulty={mission.difficulty}
                                xp={mission.xp}
                                completed={mission.completed}
                                onToggle={() => onToggleMission(mission.id)}
                                onDelete={() => onDeleteMission(mission.id)}
                                onEdit={() => onEditMission(mission)}
                            />
                        ))
                    )}
                </div>
            </section>
        </>
    )
}

export default MissionPage