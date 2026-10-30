import "./gitHubRepoCard.css";

function GitHubRepoCard({ repository, onImportRepository, isImported }) {

  return (
    <article className="github-repo-card">
      <h3>{repository.name}</h3>

      <p>{repository.description || "Sem descrição disponível."}</p>

      <div className="github-repo-card__details">
        <span>Linguagem: {repository.language || repository.topics}</span>

        <span>⭐ {repository.stargazers_count}</span>
      </div>
      <button
        type="button"
        onClick={() => onImportRepository(repository)}
        disabled={isImported}
        className="github-repo-card__import-button"
      >
        {isImported ? "Já Importado" : "Importar"}
      </button>
    </article>
  );
}

export default GitHubRepoCard;