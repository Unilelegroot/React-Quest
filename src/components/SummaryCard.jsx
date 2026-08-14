import "./summaryCard.css"

function SummaryCard({ title, value, description }) {
    return(
        <article className="summaryCard">
            <p className="summaryCard_title">{title}</p>
            <strong className="summaryCard_value">{value}</strong>
            <p className="summaryCard_description">{description}</p>
        </article>
    )
}

export default SummaryCard